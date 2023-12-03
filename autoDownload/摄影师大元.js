const fs = require('fs')
const path = require('path')
const ffmpeg = require("fluent-ffmpeg");
const axios = require('axios')
const rootPath = path.join(__dirname, "..")
const Info = require(path.join(rootPath, "utils", "info"))
let info = new Info(rootPath)

const DynamicImpl = require(path.join(rootPath, "dynamic", 'Impl'))
const RefreshImpl = require(path.join(rootPath, "baseLogin", "RefreshImpl"))

function init() {
    let dataPath = path.join(__dirname, "data.json")
    if (!fs.existsSync(dataPath)) {
        fs.writeFile(dataPath, JSON.stringify({downloaded: []}, null, 2), "utf-8", () => { })
        return {
            downloaded: []
        }
    }
    return JSON.parse(fs.readFileSync(dataPath, "utf-8"))
}
let history = init()

console.log("history: ", history);

function isNeedDownload(bv) {
    if (Object.keys(history).length !== 0 && history.downloaded !== undefined) {
        let downloaded = history.downloaded
        const targetObject = downloaded.find(obj => obj[bv] === bv);
        return targetObject === undefined
    }
    return true
}

async function getCid(bv) {
    let config = {
        method: 'get',
        url: `https://api.bilibili.com/x/player/pagelist?bvid=${bv}`
    };
    let response = await axios(config)
    return response.data.data[0].cid
}

async function getMP4Url(cookies, bv, cid, qn = "64") {

    let config = {
        method: 'get',
        url: `https://api.bilibili.com/x/player/wbi/playurl?bvid=${bv}&cid=${cid}&qn=${qn}&high_quality=1&platform=html5&fnval=1`,
        headers: {
            'Cookie': cookies
        }
    };

    let response = await axios(config)
    let res = response.data

    let quality = res.data.quality
    let accept_format = res.data.accept_format
    let accept_quality = res.data.accept_quality
    let video_codecid = res.data.video_codecid

    let acceptArr = accept_format.split(",")
    for (let i = 0; i < acceptArr.length; i++) {
        const str = acceptArr[i];
        if (!str.includes("mp4")) continue;

        if (accept_quality[i] > quality)
            return await getMP4Url(cookies, bv, cid, accept_quality[i])

        if (accept_quality[i] == quality)
            return res.data.durl[0].url
    }

    return res.data.durl.url

    let durl = {}
    [durl.length, durl.size, durl.url] = res.data.durl

}

async function getDash(bv) {
    let media = require(path.join(rootPath, "media", "Impl"))
    let bvUrl = "https://www.bilibili.com/video/" + bv
    let [data, title] = [...await media.getData(bvUrl, info.getAllCookie())]

    let audioArr = [...data.dash.audio]
    audioArr.sort((a, b) => b.bandwidth - a.bandwidth)
    let audioURL = audioArr[0].baseUrl

    let videoArr = [...data.dash.video]
    videoArr.sort((a, b) => b.id - a.id)
    let bigId = videoArr[0].id
    videoArr = videoArr.filter(e => e.id == bigId)

    let videoItem = videoArr.find(e => e.codecid == 12)
    if (videoItem === undefined) videoItem = videoArr.find(e => e.codecid == 7)
    if (videoItem === undefined) videoItem = videoArr.find(e => e.codecid == 13)
    if (videoItem === undefined) {
        videoArr.sort((a, b) => b.bandwidth - a.bandwidth)
        videoItem = videoArr[0]
    }
    let videoRUL = videoItem.baseUrl

    return { audioURL, videoRUL }

}

async function download(bv, url, savefilepath) {

    // 创建文件夹
    fs.mkdirSync(path.dirname(savefilepath), { recursive: true });
    if (fs.existsSync(savefilepath)) Promise.resolve('finish')

    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            responseType: 'stream',
            headers: {
                'Referer': `https://www.bilibili.com/video/${bv}/`
            }
        }).then(response => {
            // 将响应流直接写入文件
            response.data.pipe(fs.createWriteStream(savefilepath));

            // 监听完成事件
            response.data.on('end', () => {
                resolve('finish')
            });
        }).catch(error => {
            console.error('下载文件时发生错误:', error.message);
            // console.log(error);
            reject('下载文件时发生错误:', error.message)
        });
    })

}

async function merge(audio, video, output) {
    if (fs.existsSync(output)) Promise.resolve(`${output} exist`)

    let start = new Date().getTime()
    return new Promise((resolve, reject) => {
        ffmpeg()
            .addInput(audio)
            .addInput(video)
            .addOutputOptions([
                // '-profile:v high',
                // '-qp 28',
                // '-c:v h264_nvenc'
                '-c:v copy'
            ])
            .output(output)
            .on('progress', (progress) => { // 监听切片进度
                console.log('Processing: ' + progress.percent + '% done');
            })
            .on('end', () => { // 监听结束
                console.log("视频切片完成");
                console.log("用时：", Date.now() - start)
                resolve("finish")
            })
            .run(); // 执行
    })

}

async function upload(merge_savePath, uploadPath = "摄影师大元", filename = "") {
    // const UploadTask = require('E:/_Project/百度云盘上下传/handle')
    const UploadTask = require(path.join(__dirname, "..", "..", "baiduDisk", "handle"))
    let uploadTask = new UploadTask("li1055107552")

    if (uploadTask.auth("li1055107552")) {
        const filePath = merge_savePath
        let name = filename == "" ? path.basename(filePath) : filename
        let res = await uploadTask.create(filePath, `/_upload/${uploadPath}/${name}`)
        console.log(res);
        return res
    }
}

function sanitizeFolderName(folderName) {
    // 定义不允许的字符集合，可以根据需要扩展
    const invalidChars = /[\/\:*?"<>|\\]+/g;

    // 使用正则表达式替换不允许的字符
    const sanitizedFolderName = folderName.replace(invalidChars, '');

    // 返回处理后的文件夹名称
    return sanitizedFolderName;
}


async function main() {
    let isrefresh = await RefreshImpl.checkrefresh(info.getAllCookie())
    console.log("isrefresh: ", isrefresh);
    if (isrefresh) {
        info = await RefreshImpl.handle.call(RefreshImpl, rootPath)
    }

    let action = Object.keys(history.downloaded).length === 0 ? "getAllDynamic" : "getSpaceDynamic"
    console.log("action:", action);
    let res = await DynamicImpl[action].call(DynamicImpl, info.getAllCookie(), 44648324)

    let data = res.items
    data = data.filter(e => e.type == "DYNAMIC_TYPE_AV")
    let list = []

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        let obj = {
            id: item.id_str,
            author: {
                pub_action: item.modules.module_author.pub_action,  // 投稿了视频 | 发布了动态视频 
                pub_time: item.modules.module_author.pub_time,  // 发布时间(刚刚 | 几天前 | xx月xx日)
                pub_ts: item.modules.module_author.pub_ts,      // 发布时间戳（秒）
                type: item.modules.module_author.type           // AUTHOR_TYPE_NORMAL 普通更新
            },
            dynamic: {
                archive: {
                    aid: item.modules.module_dynamic.major.archive.aid,     // '278444528',
                    bvid: item.modules.module_dynamic.major.archive.bvid,   // BV号,
                    cover: item.modules.module_dynamic.major.archive.cover, // 视频封面
                    desc: item.modules.module_dynamic.major.archive.desc,   // 视频简介,
                    duration_text: item.modules.module_dynamic.major.archive.duration_text, // 视频时长 '01:50',
                    jump_url: item.modules.module_dynamic.major.archive.jump_url,   // '//www.bilibili.com/video/BV1aw411N7vX/',
                    title: item.modules.module_dynamic.major.archive.title  // 视频标题
                },
                type: item.modules.module_dynamic.major.type    // MAJOR_TYPE_ARCHIVE 视频
            }
        }
        list.push(obj)
    }

    // console.log(list);


    let uploadList = []

    // data.length
    for (let i = data.length - 1; i >= 0; i--) {
        const task = list[i];
        let bv = task.dynamic.archive.bvid

        console.log("isNeedDownload: ", bv);
        // 判断视频是否需要下载
        if (isNeedDownload(bv)) {
            try {


                // // 获取cid
                // let cid = await getCid(bv)
                // // 获取MP4列表
                // let mp4url = await getMP4Url(info.getAllCookie(), bv, cid)

                // 获取dash列表
                console.log("getDash: ", bv);
                let dash = await getDash(bv)

                // console.log(mp4url);
                // console.log(dash.audioURL);
                // console.log(dash.videoRUL);

                let title = sanitizeFolderName(task.dynamic.archive.title)

                let audio_savePath = path.join(__dirname, "download", `${bv}-audio.mp4`)
                let video_savePath = path.join(__dirname, "download", `${bv}-video.mp4`)
                let merge_savePath = path.join(__dirname, "download", `${bv}-${title}.mp4`)

                // 下载相应品质的音频/视频
                console.log("download: ", audio_savePath);
                await download(bv, dash.audioURL, audio_savePath)
                console.log("download finish: ", audio_savePath);

                console.log("download: ", video_savePath);
                await download(bv, dash.videoRUL, video_savePath)
                console.log("download finish: ", video_savePath);

                // 合成音视频
                console.log("merge: ", audio_savePath, video_savePath);
                await merge(audio_savePath, video_savePath, merge_savePath)
                console.log("merge success: ", merge_savePath);

                // 合成后删除音频和视频
                console.log("delect: ", audio_savePath);
                fs.rmSync(audio_savePath)
                console.log("delect success: ", audio_savePath);

                console.log("delect: ", video_savePath);
                fs.rmSync(video_savePath)
                console.log("delect success: ", video_savePath);

                history.lastId = task.id
                if (history.downloaded === undefined)
                    history.downloaded = []
                history.downloaded.unshift({
                    id: task.id,
                    bv: bv,
                    pub_ts: task.author.pub_ts
                })
                uploadList.push(task)

                // 上传
                console.log("upload: ", merge_savePath);
                await upload(merge_savePath)
                console.log("upload success: ", merge_savePath);
            } catch (error) {
                console.log("粗绰啦~");
                console.log(error);
            }
        }
    }

    if (uploadList.length) {
        console.log("save data...");
        let dp = path.join(__dirname, "摄影师大元.json")
        let allData = JSON.parse(fs.readFileSync(dp || "[]", "utf-8"))
        uploadList = uploadList.concat(allData)
        fs.writeFileSync(dp, JSON.stringify(uploadList, null, 2), "utf-8")

        let dataPath = path.join(__dirname, "data.json")
        fs.writeFileSync(dataPath, JSON.stringify(history, null, 2), "utf-8")
    }

    console.log('finish')
}

main()

async function test() {
    let bv = 'BV1cx411W7mZ'
    try {

        // 获取dash列表
        console.log("getDash: ", bv);
        let dash = await getDash(bv)

        // let title = sanitizeFolderName(task.dynamic.archive.title)
        let title = "腾讯竟然在成都办了个漫展"

        let audio_savePath = path.join(__dirname, "download", `${bv}-audio.mp4`)
        let video_savePath = path.join(__dirname, "download", `${bv}-video.mp4`)
        let merge_savePath = path.join(__dirname, "download", `${bv}-${title}.mp4`)

        // 下载相应品质的音频/视频
        console.log("download: ", audio_savePath);
        await download(bv, dash.audioURL, audio_savePath)
        console.log("download finish: ", audio_savePath);

        console.log("download: ", video_savePath);
        await download(bv, dash.videoRUL, video_savePath)
        console.log("download finish: ", video_savePath);

        // 合成音视频
        console.log("merge: ", audio_savePath, video_savePath);
        await merge(audio_savePath, video_savePath, merge_savePath)
        console.log("merge success: ", merge_savePath);

        // 合成后删除音频和视频
        console.log("delect: ", audio_savePath);
        fs.rmSync(audio_savePath)
        console.log("delect success: ", audio_savePath);

        console.log("delect: ", video_savePath);
        fs.rmSync(video_savePath)
        console.log("delect success: ", video_savePath);

        // history.lastId = task.id
        // if (history.downloaded === undefined)
        //     history.downloaded = []
        // history.downloaded.unshift({
        //     id: task.id,
        //     bv: bv,
        //     pub_ts: task.author.pub_ts
        // })
        // uploadList.push(task)

        // 上传
        console.log("upload: ", merge_savePath);
        await upload(merge_savePath)
        console.log("upload success: ", merge_savePath);
    } catch (error) {
        console.log("粗绰啦~");
        console.log(error);
    }

}
// test()

