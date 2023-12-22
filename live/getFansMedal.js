/**
 * 获取粉丝牌牌 和 up主的直播间号
 */
const axios = require('axios')

async function handle(cookies) {

    function _request(pageIndex) {
        return axios({
            method: 'get',
            url: "https://api.live.bilibili.com/xlive/app-ucenter/v1/fansMedal/panel",
            headers: {
                'Cookie': cookies
            },
            params: {
                page: pageIndex,
                page_size: 10
            }
        }).then(response => {
            return response.data
        }).catch(err => {
            return { err, msg: "_request error" }
        })
    }
    
    try {
        let result = []
        let pageIndex = 1
        let res = await _request(pageIndex++)
        result = result.concat(res.data.special_list)
        result = result.concat(res.data.list)
    
        let has_more = res.data.page_info.has_more
    
        while(has_more){
            let res = await _request(pageIndex++)
            has_more = res.data.page_info.has_more
            result = result.concat(res.data.list)
        }
        return await result

    } catch (error) {
        console.log(`getFansMedal handle error: ${error}`);
        return 
    }

}

async function getFansMedal(cookies) {

    try {
        let list = await handle(cookies)
        let res = []

        list.forEach(element => {
            res.push({
                nick_name: element.anchor_info.nick_name,
                room_id: element.room_info.room_id
            })
        });

        return res

    } catch (error) {
        console.log(`getFansMedal error: ${error}`);
        return []
    }

}

module.exports = getFansMedal