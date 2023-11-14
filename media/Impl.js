
const path = require('path')
const fs = require('fs')
const axios = require('axios');
const jsdom = require('jsdom')
const JSDOM = jsdom.JSDOM

module.exports = {

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
        return new Promise((resolve, reject) => {
            axios.get(fileUrl, {
                headers: {
                    'Referer': bvUrl,
                }
            }).then(res => {
                let dataLength = res.headers['content-length']
                resolve((dataLength / 1024 / 1024).toFixed(2) + "MB")
            }).catch(err => {
                console.log(err);
                console.log(`len error: catch error` + err);
                reject(err)
            })
        })

    }
}