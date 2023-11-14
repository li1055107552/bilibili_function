
const path = require('path')
const fs = require('fs')
const axios = require('axios');
const jsdom = require('jsdom')
const JSDOM = jsdom.JSDOM

let that = {

    download: async function (buUrl, url, saveDir = __dirname, name = "") {

        return new Promise(async (resolve, reject) => {
            try {
                let filename = name ? name : (url.match(/(?<=.*?)[^\/]*\.m4s/)[0]).replace(".m4s", ".mp4")
                const file = await axios.get(url, {
                    headers: {
                        'Referer': buUrl,
                    },
                    responseType: "stream"
                })

                const writer = fs.createWriteStream(path.join(saveDir, filename))

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

    },

    // 获取网页内容 并做嗅探
    getData: function (bvUrl, cookies) {
        let config = {
            method: 'get',
            url: bvUrl,
            headers: {
                'Cookie': cookies,
                'Accept': '*/*',
                'Host': 'www.bilibili.com',
                'Connection': 'keep-alive',
                'referer': bvUrl
            }
        }
        return new Promise((resolve, reject) => {
            try {
                axios(config).then(function (response) {
                    let html = response.data
                    let document = new JSDOM(html).window.document
                    let head = document.querySelector(`head`).innerHTML
                    let title = document.querySelector(`h1`).getAttribute('title')
                    let json = head.match(/(?<=<script>window.__playinfo__=).*?(?=<\/script>)/gms)[0]
                    let data = JSON.parse(json)

                    resolve([data.data, title])
                }).catch(function (error) {
                    console.log(`getData error: axios error` + error);
                    reject(error)
                });

            } catch (error) {
                console.log(`getData error: try error` + error);
                reject(error)
            }

        })
    },

    // 获取文件大小
    len: function (fileUrl, bvUrl) {
        // console.log(fileUrl, bvUrl);
        console.log("len start");
        return new Promise((resolve, reject) => {
            axios.get(fileUrl, {
                headers: {
                    'Referer': bvUrl,
                }
            }).then(res => {
                console.log("len res is come back");
                let dataLength = res.headers['content-length']
                resolve((dataLength / 1024 / 1024).toFixed(2) + "MB")
            }).catch(err => {
                console.log(err);
                console.log(`len error: catch error` + err);
                reject(err)
            })
        })

    },

    test: async function (data) {
        let promiseArr = []
        for (let i = 0; i < data.length; i++) {
            const e = data[i];
            promiseArr.push(this.len(e.baseUrl, e.bvUrl))
        }
        return await Promise.all(promiseArr)
    },

    Media: class Media {
        constructor(data) {
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const value = data[key];
                    this[key] = value
                }
            }
            // this = data
            // this.data = {}
            // this._rawdata = data
            // console.log(data);
            // // fs.writeFileSync('./mdia/data.json', JSON.stringify(data, null, 4), "utf-8")
            // this.bv = bv
        }

        static async init(data, bv) {
            let here = this
            this.data = {}
            this._rawdata = data
            console.log(data);
            // fs.writeFileSync('./mdia/data.json', JSON.stringify(data, null, 4), "utf-8")
            this.bv = bv
            this.bvUrl = "https://www.bilibili.com/video/" + bv
            this.audio = data.dash.audio
            this.video = data.dash.video
            this.support_formats = data.support_formats
            this.accept_quality = data.accept_quality // = Object.keys(this.data)
            this.timelength = data.timelength
            this.video_codecid = data.video_codecid

            // 初始化this.data
            data.accept_quality.forEach(id => this.data[id] = {})
            // 添加描述
            data.support_formats.forEach(obj =>
                this.data[obj.quality].description = obj.new_description
            );

            // let lenArr = await that.test(data.dash.video)
            // console.log(lenArr);

            let promiseArr = []
            let startIndex = 0
            for (let i = startIndex; i < data.dash.video.length; i++) {
                const e = data.dash.video[i];
                promiseArr.push(that.len(e.baseUrl, e.bvUrl))
            }
            await Promise.all(promiseArr).then(res => {
                console.log(res);
                for (let i = 0; i < res.length; i++) {
                    const obj = data.dash.video[i + startIndex];
                    here.data[obj.id].video || (here.data[obj.id].video = [])
                    here.data[obj.id].video.push({
                        bandwidth: obj.bandwidth,
                        baseUrl: obj.baseUrl,
                        // backupUrl: obj.backupUrl,
                        // codecid: obj.codecid,
                        // codecs: obj.codecs,
                        frameRate: obj.frameRate,
                        size: res[i]
                    })
                }
                // res.forEach((size, index, lenArr) => {
                //     const obj = data.dash.video[index];
                //     here.data[obj.id].video || (here.data[obj.id].video = [])
                //     here.data[obj.id].video.push({
                //         bandwidth: obj.bandwidth,
                //         baseUrl: obj.baseUrl,
                //         // backupUrl: obj.backupUrl,
                //         // codecid: obj.codecid,
                //         // codecs: obj.codecs,
                //         frameRate: obj.frameRate,
                //         size: size
                //     })
                // });
            })

            // for (let i = 10; i < data.dash.video.length; i++) {
            //     const obj = data.dash.video[i];

            //     this.data[obj.id].video || (this.data[obj.id].video = [])
            //     this.data[obj.id].video.push({
            //         bandwidth: obj.bandwidth,
            //         baseUrl: obj.baseUrl,
            //         // backupUrl: obj.backupUrl,
            //         // codecid: obj.codecid,
            //         // codecs: obj.codecs,
            //         frameRate: obj.frameRate,
            //         size: await that.len(obj.baseUrl, this.bvUrl)
            //     })
            // }

            console.log(this.data);
            console.log('finish')

            return new Media(this)
        }

    }

}

module.exports = that