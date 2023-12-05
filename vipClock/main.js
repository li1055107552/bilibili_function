const fs = require('fs')
const path = require('path')
const axios = require('axios')
const rootPath = path.join(__dirname, "..")
const RefreshImpl = require(path.join(rootPath, "baseLogin", "RefreshImpl"))

const Info = require(path.join(rootPath, "utils", "info"))
let info = new Info(rootPath)

async function main() {

    let cookies = info.getAllCookie()
    RefreshImpl.checkrefresh(cookies).then(res => {
        if (res) {
            return RefreshImpl.handle(rootPath).then(newinfo => {
                info = newinfo
            }).catch(err => {
                console.log("cookie刷新失败");
                Promise.reject("cookie刷新失败")
            })
        }
        return Promise.resolve()
    }).then(() => {

        let csrf = info.getCookie("bili_jct")
        let mid = info.getCookie("DedeUserID")

        return axios.post(`https://api.bilibili.com/x/vip/experience/add?mid=${mid}&csrf=${csrf}`).then(res => {
            return res.data
        }).catch(err => {
            console.error(err);
            return err
        })

    }).then(res => {
        console.log(res);
        fs.appendFileSync(path.join(__dirname, "log"), JSON.stringify(res), "utf-8")
    }).catch(err => {
        console.log(err);
    })
}

main()