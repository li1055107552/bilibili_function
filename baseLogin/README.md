# baseLogin 用户登录相关


## 文件说明

```shell
|    AuthImpl.js            // 登录授权模块
|    main.js                // 主程序
|    RefreshImpl.js         // 刷新Cookies模块
|    tempQRcodePic.png      // 测试用的二维码
|    README.md
```

<br>

---

<br>


## 用法

1. 启动 `main.js`

2. 浏览器访问 `http://127.0.0.1:16000/auth`

3. 打开B站App，扫描屏幕的二维码，并同意登录授权

4. 个人登录信息将会保存在 `../_data/info.json` 中

<br>

---

<br>

## 代码相关

1. AuthImpl.js > code2pic

这里使用的是 `qr-image` 这个 npm 包实现的,需要的可以自己部署个简单的接口来用

```js
const path = require('path')
var fs = require('fs');
const qr = require('qr-image');
const Koa = require("koa");
const app = new Koa()

const PORT = 9999

async function getQRcode(str) {
    return new Promise((resolve, reject) => {
        let code = qr.image(str, { type: 'png', size: 10 });
        let pic = code.pipe(fs.createWriteStream(path.join(path.resolve(__dirname), "tempQRCode.png")));

        pic.on('error', () => {
            console.log('二维码生成失败');
            resolve("二维码生成失败")
        })
        pic.on('finish', () => {
            console.log('二维码生成完毕');
            resolve(fs.readFileSync(path.join(path.resolve(__dirname), "tempQRCode.png")))
        })
    })
}

app.use(async (ctx, next) => {

    let ip = ctx.request.ip
    console.log(ip);
    console.log(ip, ctx.request.query);

    if (ctx.path === '/') {
        let { str } = ctx.request.query
        let { type } = ctx.request.query
        
        let data = await getQRcode(str)
        if (type == "file") {
            ctx.body = data
        }
        else {
            data = Buffer.from(data).toString('base64');
            ctx.body = `<img src=data:image/png;base64,${data}></img>`
        }
    }

    await next()
})


app.listen(PORT)
```

2. RefreshImpl

这是用来刷新Cookies的

用户进行登录授权后，其他所有功能的实现都可以通过读取 `_data/info.json` 来获取用户登录信息(cookies等)

再读取cookie时，应当自行调用 `RefreshImpl.checkrefresh()` 来判断cookie是否需要刷新

`RefreshImpl.handle()` 是总的刷新流程，可以参考 [刷新步骤（伪代码）](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/login/cookie_refresh.md#%E5%88%B7%E6%96%B0%E6%AD%A5%E9%AA%A4%E4%BC%AA%E4%BB%A3%E7%A0%81)



<br>

---

<br>