const fs = require('fs')
const path = require('path')
const ffmpeg = require("fluent-ffmpeg");
const axios = require('axios')
const rootPath = path.join(__dirname, "..")
const Info = require(path.join(rootPath, "utils", "info"))
const info = new Info(rootPath)

const impl = require('./Impl')

let temp = {}

function isNeedDownload(bv, qn) {
    if (Object.keys(temp).length == 0) {
        temp = JSON.parse(fs.readFileSync(path.join(__dirname, "摄影师大元.json"), "utf-8") || "{}")
    }
    return !Object.prototype.hasOwnProperty.call(temp, bv)
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

    let support_formats = data.support_formats
    let audioArr = data.dash.audio
    let videoArr = data.dash.video
    videoArr.sort((a, b) => b.bandwidth - a.bandwidth)

    for (let i = 0; i < audioArr.length; i++) {
        const element = audioArr[i];
        audioArr[i] = {
            id: element.id,
            baseURL: element.baseUrl,
            bandwidth: element.bandwidth,
            type: element.mimeType
        }
    }


    let obj = {}
    for (let i = 0; i < videoArr.length; i++) {
        const element = videoArr[i];
        let e = {
            id: element.id,
            bandwidth: element.bandwidth,
            baseURL: element.baseUrl,
            frameRate: element.frameRate,
            height: element.height,
        }
        obj[element.id] ? obj[element.id].push(e) : obj[element.id] = [e]
    }

    for (let i = 0; i < support_formats.length; i++) {
        const element = support_formats[i];
        obj[element.quality] ? obj[element.quality].desc = element.new_description : ""
    }

    let keys = Object.keys(obj)
    let key = keys[keys.length - 1]
    let urlList = obj[key]

    let audioURL = audioArr[0].baseURL
    let videoRUL = urlList[urlList.length - 1].baseURL

    return { audioURL, videoRUL }
    try {
        console.log("正在下载音频文件：audio.mp4")
        await media.download(bvUrl, audioURL)
        console.log("audio.mp4 下载完成")

        console.log("正在下载视频文件：video.mp4")
        await media.download(bvUrl, videoRUL)
        console.log("video.mp4 下载完成")
    }
    catch (error) {
        console.log(`error: main download 'audio.mp4' or 'video.mp4' fail`);
    }

}

async function download(url, savefilepath) {
    
    // 创建文件夹
    fs.mkdirSync(path.dirname(savefilepath), { recursive: true });

    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            responseType: 'stream'
        }).then(response => {
            // 将响应流直接写入文件
            response.data.pipe(fs.createWriteStream(savefilepath));

            // 监听完成事件
            response.data.on('end', () => {
                resolve('finish')
            });
        }).catch(error => {
            console.error('下载文件时发生错误:', error.message);
        });
    })

}

async function merge(audio, vedio, output) {
    let start = new Date().getTime()
    return new Promise((resolve, reject) => {
        ffmpeg({ '-hwaccel': 'cuvid' })
        .addInput(audio)
        .addInput(vedio)
        // .addOutputOptions([
        //     '-profile:v high',
        //     '-qp 28',
        //     '-c:v h264_nvenc'
        // ])
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

async function upload(merge_savePath, uploadPath = "摄影师大元", filename = ""){
    const UploadTask = require('baiduNetDisk/handle')
    let uploadTask = new UploadTask("your_baiduNetDisk_username")
    console.log(uploadTask)
    if (uploadTask.auth("your_baiduNetDisk_username")) {
        const filePath = merge_savePath
        let name = filename == "" ? path.basename(filePath) : filename
        let res = await uploadTask.create(filePath, `/_upload/${uploadPath}/${name}`)
        console.log(res);
        return res
        console.log('finish')
    }
}

async function main() {

    // let res = await impl.getAllDynamic(info.getAllCookie(), 44648324)   // 677378178
    let res = await impl.getSpaceDynamic(info.getAllCookie(), 44648324)   // 677378178
    res = res.data.items
    res = res.filter(e => e.type == "DYNAMIC_TYPE_AV")
    let list = []

    for (let i = 0; i < res.length; i++) {
        const item = res[i];
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

    console.log(list);

    let item = list[0]
    let bv = item.dynamic.archive.bvid
    // 判断视频是否需要下载
    if (isNeedDownload(bv)) {
        // 获取cid
        let cid = await getCid(bv)
        // 获取MP4列表
        let mp4url = await getMP4Url(info.getAllCookie(), bv, cid)
        // 获取dash列表
        let dash = await getDash(bv)

        console.log(mp4url);
        console.log(dash.audioURL);
        console.log(dash.videoRUL);

        let mp4_savePath = path.join(__dirname, "download", `${bv}.mp4`)
        let audio_savePath = path.join(__dirname, "download", `${bv}-audio.mp4`)
        let video_savePath = path.join(__dirname, "download", `${bv}-video.mp4`)
        let merge_savePath = path.join(__dirname, "download", `${bv}-merge.mp4`)

        // 下载相应品质的音频/视频
        await download(mp4url, mp4_savePath)
        await download(dash.audioURL, audio_savePath)
        await download(dash.videoRUL, video_savePath)

        // 合成音视频
        await merge(audio_savePath, video_savePath, merge_savePath)

        // 上传
        await upload(merge_savePath)
    }



    console.log('finish')
}

main()

async function test() {
    // let res = await getDynamicAllVideo()
    // console.log(res);
    // console.log('finish')
    // let res = await impl.getSpace(info.getAllCookie(), 44648324)
    // let res = await impl.getAllDynamic(info.getAllCookie(), 44648324)
    let merge_savePath = path.join(__dirname, "download", `BV1PC4y1P7qv.mp4`)
    let res = await upload(merge_savePath)
    console.log(res);
    console.log('finish')

}
// test()

