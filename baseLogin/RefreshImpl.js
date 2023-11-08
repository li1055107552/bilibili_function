const axios = require('axios');
const crypto = require('crypto')
const Info = require('../utils/info')

// 登录信息刷新模块
module.exports = {

    /**
     * @description 检查Cookie是否需要更新
     * @param {String} cookie Cookie
     * @param {String} bili_jct 校验码,位于cookie中(非必要，已取消)
     * @returns 
     */
    checkrefresh: async function (cookie, bili_jct = "") {
        let res = await axios({
            method: 'get',
            url: `https://passport.bilibili.com/x/passport-login/web/cookie/info?csrf=${bili_jct}`,
            headers: {
                'Cookie': cookie
            }
        })
        return res.data
    },

    /**
     * @description 生成CorrespondPath算法
     * @returns {String} 返回用于获取refresh_csrf的必要参数correspondPath
     */
    getCorrespondPath: async function () {
        const publicKey = await crypto.webcrypto.subtle.importKey(
            "jwk",
            {
                kty: "RSA",
                n: "y4HdjgJHBlbaBN04VERG4qNBIFHP6a3GozCl75AihQloSWCXC5HDNgyinEnhaQ_4-gaMud_GF50elYXLlCToR9se9Z8z433U3KjM-3Yx7ptKkmQNAMggQwAVKgq3zYAoidNEWuxpkY_mAitTSRLnsJW-NCTa0bqBFF6Wm1MxgfE",
                e: "AQAB",
            },
            { name: "RSA-OAEP", hash: "SHA-256" },
            true,
            ["encrypt"],
        )

        async function handle(timestamp) {
            const data = new TextEncoder().encode(`refresh_${timestamp}`);
            const encrypted = new Uint8Array(await crypto.webcrypto.subtle.encrypt({ name: "RSA-OAEP" }, publicKey, data))
            return encrypted.reduce((str, c) => str + c.toString(16).padStart(2, "0"), "")
        }

        const ts = Date.now()
        let correspondPath = await handle(ts)
        return correspondPath

    },

    /**
     * @description 获取refresh_csrf
     * @param {String} cookie
     * @param {String} correspondPath 通过getCorrespondPath方法获取
     * @returns {String} 返回用于刷新的refresh_csrf
     */
    getRefresh_csrf: async function (cookie, correspondPath) {
        try {
            let res = await axios({
                method: 'get',
                url: `https://www.bilibili.com/correspond/1/${correspondPath}`,
                headers: {
                    'Cookie': cookie
                }
            })
            return res.data
        } catch (error) {
            console.log(error);
        }
        return null
    },

    /**
     * @description 刷新Cookie
     * @param {String} cookie 
     * @param {String} bili_jct 位于cookie
     * @param {String} refresh_csrf 通过getRefresh_csrf获得
     * @param {String} refresh_token 首次授权登录获得
     * @returns 
     */
    refreshCookie: async function (cookie, bili_jct, refresh_csrf, refresh_token) {
        // let refresh_token = refresh_token
        let csrf = bili_jct
        let source = "main_web"
        let params = `csrf=${csrf}&refresh_csrf=${refresh_csrf}&source=${source}&refresh_token=${refresh_token}`
        try {
            let res = await axios({
                method: 'post',
                url: `https://passport.bilibili.com/x/passport-login/web/cookie/refresh?${params}`,
                headers: {
                    'Cookie': cookie
                }
            })
            return {
                data: res.data,
                headers: res.headers
            }
        } catch (error) {
            console.log(error);
            return error
        }
    },

    /**
     * @description 确认更新,该步操作将让旧的refresh_token对应的 Cookie 失效
     * @param {String} cookie 新的cookie
     * @param {String} csrf 新的bili_jct,位于cookie
     * @param {String} refresh_token 旧的refresh_token
     * @returns {Object}
     */
    confirmRefresh: async function (cookie, csrf, refresh_token) {
        try {
            let res = await axios({
                method: 'post',
                url: `https://passport.bilibili.com/x/passport-login/web/confirm/refresh?csrf=${csrf}&refresh_token=${refresh_token}`,
                headers: {
                    'Cookie': cookie
                }
            })
            return res.data
        } catch (error) {
            console.log(error);
        }
        return null
    },

    /**
     * @description 完整执行cookie刷新
     * @param {String} rootPath bilibili 根目录的路径
     * @returns {Info} 返回一个更新过后的Info对象
     */
    handle: async function (rootPath) {
        let info = new Info(rootPath)
        let cookies = info.getAllCookie()

        // 应在调用时 自行判断是否需要更新
        // let res = await RefreshImpl.checkrefresh(cookies)
        // console.log(res);

        // if (!res.data.refresh) {
        //     console.log("不需要刷新");
        // }
        // if (res.data.refresh) {
        //     console.log("需要刷新");
        // }


        // 生成CorrespondPath
        let correspondPath = await RefreshImpl.getCorrespondPath()

        // 获取refresh_csrf
        let refresh_csrf = await RefreshImpl.getRefresh_csrf(cookies, correspondPath)
        refresh_csrf = refresh_csrf.match(/(?<=<div id="1-name">).*?(?=<\/div>)/g)


        // 刷新Cookie
        let refresh_token_old = info.getInfo("refresh_token")
        let refreshCookie = await RefreshImpl.refreshCookie(cookies, info.getCookie("bili_jct"), refresh_csrf, refresh_token_old)

        // console.log(refreshCookie);

        // 更新cookie、refresh_token
        info.setNewInfo("refresh_token", refreshCookie.data.data.refresh_token)
        let newCookies = refreshCookie.headers['set-cookie']
        // console.log(newCookies);
        for (let i = 0; i < newCookies.length; i++) {
            let cookie = newCookies[i].split(";")[0];
            let temp = cookie.split("=")
            info.setCookie(temp[0], temp[1])
        }

        // 确认刷新，废弃旧的
        await RefreshImpl.confirmRefresh(info.getAllCookie(), info.getCookie("bili_jct"), refresh_token_old)

        console.log('refresh finish')
        return new Info(rootPath)
    }
}