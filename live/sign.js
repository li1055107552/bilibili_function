
const path = require('path')
const axios = require('axios')
const rootPath = path.join(__dirname, "..")
const utils = require(path.join(rootPath, "utils", "utils"))
const Info = require(path.join(rootPath, "utils", "info"))
const info = new Info(rootPath)

/**
 * 直播每日签到
 */
async function sign() {
    let baseURL = "https://api.live.bilibili.com"
    let url = '/xlive/web-ucenter/v1/sign/DoSign'
    let res = await axios({
        method: 'get',
        url: baseURL + url,
        headers: {
            'Cookie': info.getAllCookie()
        }
    })
    let data = res.data
    utils.log(__dirname, data)
}

sign()
