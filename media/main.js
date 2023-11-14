const fs = require('fs')

const path = require('path')
const rootPath = path.join(__dirname, "..")
const Info = require(path.join(rootPath, "utils", "info"))
const info = new Info(rootPath)

const impl = require('./Impl')
// const cmd = require('node-cmd')

function getBV() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise((resolve, reject) => {
        readline.question("给个BV号：", bv => {
            resolve(bv)
            readline.close()
        })
    })

}

async function main() {

    // 获取BV号
    // 1. 短链接
    // 2. 完整链接
    // 3. 终端输入
    let bv = 'BV1Uw411p7ij' // 'BV1nw411x7DK' // await getBV()
    let bvUrl = "https://www.bilibili.com/video/" + bv


    // 获取网页内容 并做嗅探
    let [data, title] = [...await impl.getData(bvUrl, info.getAllCookie())]


    // 排序formats/audioArr/videoArr
    // 该用户支持的音视频格式
    let support_formats = data.support_formats
    // 音频资源数组
    let audioArr = data.dash.audio
    // 视频资源数组
    let videoArr = data.dash.video

    // 视频降序排序
    videoArr.sort((a, b) => b.bandwidth - a.bandwidth)

    // 提取原本 data.dash.audio 中的信息，重新复制给audioArr
    for (let i = 0; i < audioArr.length; i++) {
        const element = audioArr[i];
        audioArr[i] = {
            id: element.id,
            baseURL: element.baseUrl,
            bandwidth: element.bandwidth,
            size: await impl.len(element.baseUrl, bvUrl),
            type: element.mimeType
        }
    }

    /**
     * obj: {
     *      1080: [{
     *              id: 1080,
     *              bandwidth: element.bandwidth,
     *              baseURL: element.baseUrl,
     *              frameRate: element.frameRate,
     *              height: element.height,
     *      }, {
     *              id: id_1,
     *              bandwidth: element.bandwidth,
     *              baseURL: element.baseUrl,
     *              frameRate: element.frameRate,
     *              height: element.height,
     *      }],
     *     720: [{
     *              id: 720,
     *              bandwidth: element.bandwidth,
     *              baseURL: element.baseUrl,
     *              frameRate: element.frameRate,
     *              height: element.height,
     *      }, {
     *              id: id_2,
     *              bandwidth: element.bandwidth,
     *              baseURL: element.baseUrl,
     *              frameRate: element.frameRate,
     *              height: element.height,
     *      }]
     * }
     * obj: 
     *      16:
     *      (3) [{…}, {…}, {…}, desc: '360P 流畅']
     *      32:
     *      (3) [{…}, {…}, {…}, desc: '480P 清晰']
     *      64:
     *      (3) [{…}, {…}, {…}, desc: '720P 高清']
     *      80:
     *      (3) [{…}, {…}, {…}, desc: '1080P 高清']
     *      116:
     *      (3) [{…}, {…}, {…}, desc: '1080P 60帧']
     *      120:
     *      (2) [{…}, {…}, desc: '4K 超清']
     */
    let obj = {}
    // 处理videoArr，根据id 将所有的视频资源分类
    for (let i = 0; i < videoArr.length; i++) {
        const element = videoArr[i];
        let e = {
            id: element.id,
            bandwidth: element.bandwidth,
            baseURL: element.baseUrl,
            frameRate: element.frameRate,
            height: element.height,
            size: await impl.len(element.baseUrl, bvUrl),
        }
        obj[element.id] ? obj[element.id].push(e) : obj[element.id] = [e]
    }

    /**
     * 将视频格式也塞到obj里面
     * 注意：这里的 element.quality 和videoArr[i].id是表现一致的，都为视频清晰度，如: 1080 720 480 360
     * support_formats:
     *  0: {quality: 116, format: 'flv_p60', new_description: '1080P 60帧', display_desc: '1080P', superscript: '60帧', …}
     *  1: {quality: 80, format: 'flv', new_description: '1080P 高清', display_desc: '1080P', superscript: '', …}
     *  2: {quality: 64, format: 'flv720', new_description: '720P 高清', display_desc: '720P', superscript: '', …}
     *  3: {quality: 32, format: 'flv480', new_description: '480P 清晰', display_desc: '480P', superscript: '', …}
     *  4: {quality: 16, format: 'flv360', new_description: '360P 流畅', display_desc: '360P', superscript: '', …}
     */
    for (let i = 0; i < support_formats.length; i++) {
        const element = support_formats[i];
        obj[element.quality] ? obj[element.quality].desc = element.new_description : ""
    }

    // 选取视频数组中，最后一个format格式的视频资源列表
    let keys = Object.keys(obj)
    let key = keys[keys.length - 1]
    let urlList = obj[key]

    // 把音频数组中的第一个(质量最高，但音频质量差异不大)音频作为音频的URL
    let audioURL = audioArr[0].baseURL
    // 把视频资源列表中的最后一个作为视频的URL(大会员的话, 一般为1080p/4k?)
    let videoRUL = urlList[urlList.length - 1].baseURL


    // 下载视频/音频
    try {
        console.log("正在下载音频文件：audio.mp4")
        await impl.download(bvUrl, audioURL, __dirname, "audio.mp4")
        console.log("audio.mp4 下载完成")

        console.log("正在下载视频文件：video.mp4")
        await impl.download(bvUrl, videoRUL, __dirname, "video.mp4")
        console.log("video.mp4 下载完成")

        console.log('finish')
    }
    catch (error) {
        console.log(`error: main download 'audio.mp4' or 'video.mp4' fail`);
    }


    // 合成视频


}


main()