const fs = require('fs')
const path = require('path')

module.exports = class info {

    /**
     * @param {String} rootPath bilibili 根目录的路径
     */
    constructor(rootPath = __dirname) {

        this.timer = null
        this.isRefresh = null
        this.dataPath = path.join(rootPath, "_data", "info.json")
        this.data = JSON.parse(fs.readFileSync(this.dataPath))

        // 更新自检，但好像没有必要，谁实现 谁自己检查去
        // let that = this
        // this.refreshImpl = require(path.join(rootPath, "baseLogin", "RefreshImpl"))
        // let check = this.refreshImpl.checkrefresh(this.getAllCookie())
        // check.then(res => {
        //     that.isRefresh = res.data.refresh
        // })
    }

    __debounce(fn, delay) {
        let that = this
        if (this.timer != null) {
            clearTimeout(this.timer)
            this.timer = null
        }
        this.timer = setTimeout(() => {
            fn.call(that)
        }, delay);

    }

    /**
     * @description 将信息重新写入到磁盘
     * @returns {Boolean}
     */
    __write() {
        console.log("write");
        fs.writeFileSync(this.dataPath, JSON.stringify(this.data, null, 2), "utf-8")
        return true
    }

    /**
     * @description 获取所有信息
     * @returns {Object} 
     */
    getAllInfo() {
        return this.data
    }

    /**
     * @description 获取个人信息中的某一个字段
     * @param {String} key 个人信息的字段
     * @returns {String | Object}
     */
    getInfo(key) {
        return this.data[key]
    }

    /**
     * @description 更新个人信息中的一个字段
     * @param {String} key 个人信息的字段
     * @param {String} value 该字段的值
     * @returns {Boolean}
     */
    setNewInfo(key, value) {
        this.data[key] = value
        return this.__debounce(this.__write, 50)
    }

    /**
     * @description 设置一个新的Cookie字段的值
     * @param {String} key Cookie字段
     * @param {String} value 该字段的值
     * @returns {Boolean}
     */
    setCookie(key, value) {
        this.data.cookies[key] = value
        return this.__debounce(this.__write, 50)
    }

    /**
     * @description 获取Cookie 字符串形式
     * @returns {String}
     */
    getAllCookie() {
        let res = ""
        let obj = this.data.cookies
        for (const key in obj) {
            res += `${key}=${obj[key]}; `
        }
        return res
    }

    /**
     * @description 获取Cookie某一个字段的值
     * @param {String} key Cookie字段
     * @returns {String} Cookie[key]的值
     */
    getCookie(key) {
        return this.data.cookies[key]
    }

}