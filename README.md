# B站相关接口功能实现

## 文件说明

```shell

├─_data
│      info.json                // 存储的用户登录信息(共用的)
│  
│─baseLogin                     // 用户登录相关
│      AuthImpl.js
│      main.js
│      RefreshImpl.js
│      tempQRcodePic.png
│
├─live                          // 直播间相关
│      clock.js
│      getFansMedal.js
│      log
│      sign.js
│
├─media                         // 媒体相关（音视频下载）
│  │  data.json
│  │  httpget.js
│  │  Impl.js
│  │  main.js
│  │  
│  └─xld-BiliBiliDown           // 无关
│
│-shortLink                     // 短链接
│      index.css
│      index.html
│
│-vipClock                      // 大会员每日看视频 可以领取10经验领取
│      log
│      main.js
│
├─utils                         // 公共类
│      info.js                  // 用户信息相关操作（因为共用一个登陆信息）
│      utils.js
│
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│  test.js
```

## 路径说明

rootPath 指的都是README.md同级的目录

## 使用说明

使用前建议都先进行扫码登录

启动 `baseLogin/main.js` => 网页访问 `http://yourIP:16000/auth` => 打开B站App 进行扫码登录

登录成功之后，您的个人信息将会保存在 `_data/info.json` 文件中

怕被泄漏及时删除该文件即可，重新扫码登录会覆盖原来的信息
