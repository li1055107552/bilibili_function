/**
 * 获取粉丝牌牌 和 up主的直播间号
 */
const axios = require('axios')

async function handle(cookies) {
    try {

        let baseURL = "https://api.live.bilibili.com"
        let url = '/xlive/app-ucenter/v1/fansMedal/panel'
        let res = await axios({
            method: 'get',
            url: baseURL + url,
            headers: {
                'Cookie': cookies
            },
            params: {
                page: 1,
                page_size: 10
            }
        })
        return res.data
    } catch (error) {
        console.log(`getFansMedal main error: ${error}`);
        return 
    }

}

async function getFansMedal(cookies) {

    try {
        let response = await handle(cookies)
        let data = response.data
    
        let list = data.list.concat(data.special_list)
    
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