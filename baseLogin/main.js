const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const app = new Koa()
const PORT = 16000

const imp = require('./AuthImpl')

// 用户扫码登录授权
async function auth(ctx, next) {

    // 获取登录的二维码
    let getCodeRes = await imp.getCode()
    let { url, qrcode_key } = getCodeRes.data
    // 将二维码保存到本地
    let tempPath = path.join(__dirname, "tempQRcodePic.png")
    await imp.code2pic(url, tempPath)
    // 将二维码返回前端用户进行扫码
    let data = Buffer.from(fs.readFileSync(tempPath)).toString('base64');
    ctx.body = `<img src=data:image/png;base64,${data}></img>`

    app.use(async (ctx, next) => {
        // 开启二维码状态轮训
        let res = await imp.searchCodeStatus(qrcode_key)
        // 获取完整cookies
        let cookies = res.headers.concat(await imp.getAllCookies(res.data.url))

        const obj = {
            refresh_token: res.data.refresh_token,
            cookies: {}
        }

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].split(";")[0];
            let temp = cookie.split("=")
            obj.cookies[temp[0]] = temp[1]
        }
        console.log(res);

        fs.writeFileSync(path.join(__dirname, "..", "_data", "info.json"), JSON.stringify(obj, null, 2), "utf-8")
    })
    next()

    console.log('finish')
}

app.use(async (ctx, next) => {

    let ip = ctx.get("X-Real-IP") || ctx.request.ip
    console.log(ip);
    console.log(ip, ctx.request.query);

    let tempPath = ctx.path.replace(/\/proxy\/bilibili/, "")
    ctx.path = tempPath ? tempPath : "/"

    if (ctx.path === '/') {
        ctx.body = "hello world"
    }
    if (ctx.path === '/auth') {
        app.use(auth)
    }

    await next()
})


app.listen(PORT)
