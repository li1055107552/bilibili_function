const fs = require('fs')
const axios = require('axios');
const cmd = require('node-cmd')
const jsdom = require('jsdom')
const JSDOM = jsdom.JSDOM

// bv = "" // "BV1aa4y1T7ih"   // "BV1as4y137E5"

var config = {
    method: 'get',
    url: "BVurl",
    headers: {
        'Cookie': `*`,
        'Accept': '*/*',
        'Host': 'www.bilibili.com',
        'Connection': 'keep-alive',
        'referer': "BVurl"
    }
};

// 获取cookie
function getCookie() {
    return new Promise((resolve, reject) => {
        resolve("cookies")
    })
}

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

// 获取网页内容 并做嗅探
function getData() {
    return new Promise((resolve, reject) => {
        try {
            axios(config)
            .then(function (response) {
                let html = response.data
                let document = new JSDOM(html).window.document
                // let head = html.match(/<head.*?head>/gms)[0]
                // let title = (() => {
                //     let temp = html.match(/(?<=<h1 title=").*?(?=" class=".*?">.*?<\/h1>)/gm)
                //     return temp ? temp[0] : 'title'
                // })()
                let head = document.querySelector(`head`).innerHTML
                let title = document.querySelector(`h1`).getAttribute('title')
                let json = head.match(/(?<=<script>window.__playinfo__=).*?(?=<\/script>)/gms)[0]
                let data = JSON.parse(json)

                resolve([data.data, title])
            })
            .catch(function (error) {
                console.log(`getData error: axios error` + error);
                reject(error)
            });

        } catch (error) {
            console.log(`getData error: try error` + error);
            reject(error)
        }

    })
}

// 获取文件大小
function len(url) {
    return new Promise((resolve, reject) => {
        axios.head(url, {
            headers: {
                'Referer': config.url,
            }
        }).then(res => {
            let dataLength = res.headers['content-length']
            resolve((dataLength / 1024 / 1024).toFixed(2) + "MB")
        }).catch(err => {
            console.log(err);
            reject(err)
        })
    })

}

async function download(url, name = "") {

    return new Promise(async (resolve, reject) => {
        try {
            let filename = name ? name : (url.match(/(?<=.*?)[^\/]*\.m4s/)[0]).replace(".m4s", ".mp4")
            const file = await axios.get(url, {
                headers: {
                    'Referer': config.url,
                },
                responseType: "stream"
            })
        
            const writer = fs.createWriteStream(`./${filename}`)
        
            let r = file.data
            r.pipe(writer)
    
            writer.on('finish', () => {
                writer.end(() => {
                    resolve(filename)
                })
            })
    
            writer.on('error', (err) => {
                console.log(err)
                reject(`${filename} download failed`)
            })
    
        } catch (error) {
            console.log(`download error: `, error);
            reject(error)
        }    

    })

}

async function main() {

    // let cookie = await getCookie()
    // config.headers.Cookie = cookie

    let bv = await getBV()
    // let bv = "BV1ym4y1a7G3"
    let BVurl = "https://www.bilibili.com/video/" + bv
    config.url = BVurl
    config.headers.referer = BVurl

    let [data, title] = [...await getData()]

    cmd.runSync('chcp 65001')
    console.log(title);

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
            // size: await len(element.baseUrl),
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
            // size: await len(element.baseUrl)
        }
        obj[element.id] ? obj[element.id].push(e) : obj[element.id] = [e]
    }

    for (let i = 0; i < support_formats.length; i++) {
        const element = support_formats[i];
        obj[element.quality] ? obj[element.quality].desc = element.new_description : ""
    }

    // console.log(obj)
	// return null
    let keys = Object.keys(obj)
    let key = keys[keys.length - 1]
    let urlList = obj[key]

    let audioURL = audioArr[0].baseURL
    let videoRUL = urlList[urlList.length - 1].baseURL

    // return
    try {
        console.log("正在下载音频文件：audio.mp4")
        await download(audioURL, "audio.mp4")
        console.log("audio.mp4 下载完成")

        console.log("正在下载视频文件：video.mp4")
        await download(videoRUL, "video.mp4")
        console.log("video.mp4 下载完成")
    }
    catch (error){
        console.log(`error: main download 'audio.mp4' or 'video.mp4' fail`);
    }

    let shell = `ffmpeg.exe -i audio.mp4 -i video.mp4 "${title}.mp4"`
    let qsvshell = `ffmpeg -hwaccel qsv -i audio.mp4 -c:v h264_qsv -i video.mp4 -profile:v high -preset slow -c:v qsv "${title}.mp4"`
    let nvshell = `ffmpeg -hwaccel cuvid -i audio.mp4 -i video.mp4 -profile:v high -qp 28 -c:v h264_nvenc "${title}.mp4"`
    // let nvshell = `ffmpeg -hwaccel cuvid -i audio.mp4 -c:v h264_cuvid -i video.mp4 -profile:v high -qp 28 -c:v h264_nvenc "${title}.mp4"`
    // console.log(shell)
    return null
    console.log('开始合并')
    let startTime = Date.now()
    await cmd.runSync(nvshell)  // 本机肯定用独显啊
    let endTime = Date.now()
    let time = new Date(endTime - startTime)
    console.log(`耗时：${time.getMinutes()}分${time.getSeconds()}.${time.getMilliseconds()}秒`)
    console.log('合并完成')

    console.log('正在删除音频文件：audio.mp4')
    fs.rmSync("./audio.mp4")
    console.log('正在删除视频文件：video.mp4')
    fs.rmSync("./video.mp4")

    console.log('finish')
}

main()
