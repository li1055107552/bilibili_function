const path = require('path')
const Info = require('./utils/info')
const RefreshImpl = require('./baseLogin/RefreshImpl')

async function main() {
    let info = new Info(__dirname)
    let cookies = info.getAllCookie()

    let res = await RefreshImpl.checkrefresh(cookies)
    console.log(res);

    if (!res.data.refresh) {
        console.log("不需要刷新");
    }
    if (res.data.refresh) {
        console.log("需要刷新");
    }

    // 生成CorrespondPath
    let correspondPath = await RefreshImpl.getCorrespondPath()

    // 获取refresh_csrf
    let refresh_csrf = await RefreshImpl.getRefresh_csrf(cookies, correspondPath)
    refresh_csrf = refresh_csrf.match(/(?<=<div id="1-name">).*?(?=<\/div>)/g)


    // 刷新Cookie
    let refresh_token_old = info.getInfo("refresh_token")
    let refreshCookie = await RefreshImpl.refreshCookie(cookies, info.getCookie("bili_jct"), refresh_csrf, refresh_token_old)

    console.log(refreshCookie);

    // 更新cookie、refresh_token
    info.setNewInfo("refresh_token", refreshCookie.data.data.refresh_token)
    let newCookies = refreshCookie.headers['set-cookie']
    console.log(newCookies);
    for (let i = 0; i < newCookies.length; i++) {
        let cookie = newCookies[i].split(";")[0];
        let temp = cookie.split("=")
        info.setCookie(temp[0], temp[1])
    }

    // 确认刷新，废弃旧的
    await RefreshImpl.confirmRefresh(info.getAllCookie(), info.getCookie("bili_jct"),refresh_token_old)
    
    console.log('finish')
}

// main()
async function test(){

    let info = new Info(__dirname)
    
    let check = await RefreshImpl.checkrefresh(info.getAllCookie())
    console.log(isrefresh = check.data.refresh);

    console.log('finish')
}
test()
