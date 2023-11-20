let axios = require('axios');

module.exports = {
    getSpace: function (uid, cookies) {

        let config = {
            method: 'get',
            url: `https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space?host_mid=${uid}`,
            headers: {
                'Cookie': cookies
            }
        };

        return new Promise((resolve, reject) => {
            axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                resolve(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        })

    }
}

// offset	        str	    偏移量	    等于items中最后一条记录的id     获取下一页时使用
// update_baseline	str	    更新基线	等于items中第一条记录的id