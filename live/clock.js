/**
 * 实现 bilibili 关注主播的自动弹幕打卡
 */
const path = require('path')
const axios = require('axios')

const rootPath = path.join(__dirname, "..")

const utils = require(path.join(rootPath, "utils", "utils"))
const Info = require(path.join(rootPath, "utils", "info"))
const info = new Info(rootPath)

const baseURL = "https://api.live.bilibili.com"

async function clock(roomid) {

    try {
        let url = '/msg/send'
        let res = await axios({
            method: 'post',
            url: baseURL + url,
            headers: {
                'Cookie': info.getAllCookie(),
                'content-type': 'multipart/form-data'
            },
            data: {
                'msg': '滴',   // '打卡',
                'color': '5816798', // '5816798',
                'fontsize': '25',
                'rnd': Math.floor(new Date().getTime() / 1000),
                'roomid': roomid,  // roomid,
                'csrf': info.getCookie("bili_jct"),
                'csrf_token': info.getCookie("bili_jct")
            }
        })
        let data = res.data
        console.log(res.data)

        return {
            code: data.code,
            message: data.message
        }

    } catch (error) {
        console.log(error.data);
        utils.log(error.data)
    }

}

async function main() {

    try {
        // 获取up主的信息
        const getFansMedal = require('./getFansMedal')
        let list = await getFansMedal(info.getAllCookie())
        console.log("???")
        let index = 0

        while (index < list.length) {
            let element = list[index++]
            // 发送打卡请求
            let res = await clock(element.room_id)
            // 请求日志
            utils.log(__dirname, res, element)
            console.log("!!!")
            await new Promise(resolve => setTimeout(resolve, 15 * 1000))
        }

        // let interval = setInterval(async () => {
        //     if (index >= list.length) {
        //         clearInterval(interval)
        //     }
        //     else {
        //         let element = list[index++]
        //         // 发送打卡请求
        //         let res = await clock(element.room_id)
        //         // 请求日志
        //         utils.log(res, element)
        //     }
        //     console.log("!!!")

        // }, 15 * 1000);

    } catch (error) {
        console.log(error.data);
        utils.log(error.data)
    }

}
main()
return null;
