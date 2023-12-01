let axios = require('axios');

// fn = {

//     /**
//      * @description 获取某一UP主空间下的动态信息
//      * @param {String} cookies 
//      * @param {Number} uid  
//      * @param {String} offset 偏移量,等于items中最后一条记录的id
//      * @returns 
//      */
//     getSpaceDynamic: async function (cookies, uid = 1, offset = "") {

//         let config = {
//             method: 'get',
//             url: `https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space?host_mid=${uid}&offset=${offset}`,
//             headers: {
//                 'Cookie': cookies
//             }
//         };
//         let response = await axios(config)
//         return response.data
//     },

//     getAllDynamic: async (cookies, uid) => {
//         let list = []
//         let flag = true, offset = ""
//         while (flag) {
//             let res = await fn.getSpaceDynamic(cookies, uid, offset)
//             let data = res.data
//             console.log(data);
//             list.push(...data.items)
//             flag = data.has_more
//             offset = data.offset
//         }
//         return await list
//     }
// }


module.exports = {

    /**
     * @description 获取某一UP主空间下的动态信息
     * @param {String} cookies 
     * @param {Number} uid  
     * @param {String} offset 偏移量,等于items中最后一条记录的id
     * @returns 
     */
    getSpaceDynamic: async function (cookies, uid = 1, offset = "") {

        let config = {
            method: 'get',
            url: `https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space?host_mid=${uid}&offset=${offset}`,
            headers: {
                'Cookie': cookies
            }
        };
        let response = await axios(config)
        return response.data.data
    },

    getAllDynamic: async function (cookies, uid) {
        let list = []
        let flag = true, offset = "", res;
        while (flag) {
            res = await this.getSpaceDynamic(cookies, uid, offset)
            console.log(res);
            list.push(...res.items)
            flag = res.has_more
            offset = res.offset
        }
        res.items = list

        return await res
    }
}

// offset	        str	    偏移量	    等于items中最后一条记录的id     获取下一页时使用
// update_baseline	str	    更新基线	等于items中第一条记录的id