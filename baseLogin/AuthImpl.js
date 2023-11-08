const fs = require('fs')
const axios = require('axios');
const FormData = require('form-data');

// 登录授权模块
module.exports = {

    // 申请二维码
    getCode: async function () {
        let config = {
            method: 'get',
            url: 'https://passport.bilibili.com/x/passport-login/web/qrcode/generate',
            // headers: {
            //     'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
            //     'Accept': '*/*',
            //     'Host': 'passport.bilibili.com',
            //     'Connection': 'keep-alive',
            //     'Cookie': 'SESSDATA=160bf08e%2C1714885221%2C6123d%2Ab1CjAUu8QRcCeuFEfzrBBAL80t0FI-3wlh3Em9zDlSlvOnS4OnUlglCxUI2Qn_HD4dsEQSVnc5M2kydjNkT18wZVRCYkxvZUZUbmdLQi1mdnRpc1BqN3BpeUo5LUJFa09MVTMyQl8xcUlzY01fY2xEbDRqZ2pjYm9jLVY0akhacUE1RnNFb1BLWHRRIIEC; bili_jct=e841748cadf77a199a0bdd275a2445e8; DedeUserID=279753317; DedeUserID__ckMd5=11bbb73ea3f37ba1; sid=7kw58who'
            // }
        };
        return new Promise((resolve, reject) => {
            axios(config).then(function (res) {
                console.log(JSON.stringify(res.data));
                resolve(res.data)
            }).catch(function (error) {
                console.log(error);
            });
        })

    },

    // 将二维码转为图片，然后APP扫码
    code2pic: async function (str, path = "tempQRcodePic.png") {
        str = encodeURIComponent(str)
        let config = {
            method: 'get',
            url: `https://tenyding.cn/proxy/QRcode/?type=file&str=${str}`,
            responseType: 'stream'
        };

        return new Promise((resolve, reject) => {
            axios(config).then(function (res) {
                let writeStream = fs.createWriteStream(path)
                res.data.pipe(writeStream)
                writeStream.on('finish', resolve)
            }).catch(function (error) {
                console.log(error);
            });
        })

    },

    // 轮训扫码状态
    searchCodeStatus: async function (qrcode_key) {

        // 轮训
        async function poll(qrcode_key) {
            let data = new FormData();
            data.append('qrcode_key', qrcode_key);

            let config = {
                method: 'get',
                url: 'https://passport.bilibili.com/x/passport-login/web/qrcode/poll',
                data: data
            };

            return new Promise((resolve, reject) => {
                axios(config).then(res => {
                    resolve({ data: res.data.data, headers: res.headers['set-cookie'] })
                }).catch(err => {
                    console.log(err);
                })
            })
        }

        let res = null
        let errorTime = 0
        while (true) {
            await new Promise(resolve => setTimeout(resolve, 5000));
            try {
                res = await poll(qrcode_key)
                console.log(res.data);
                console.log(res.headers);
                if (res.data.code == 86038) break
                if (!res.data.refresh_token) continue
                return new Promise(resolve => resolve(res))

            } catch (error) {
                errorTime++
                console.log(error.data);
                // 超过失败次数，则返回
                if (errorTime > 3) return new Promise(resolve => resolve(error))
                // 否则，继续轮询，等待一段时间后再次尝试  
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        }

    },

    // 登录后获取完整的cookies
    getAllCookies: async function (url) {
        return new Promise((resolve, reject) => {
            axios.get(url).then(res => {
                resolve(res.headers['set-cookie'])
            }).catch(err => {
                resolve(err)
            })
        })
    }

    
}
