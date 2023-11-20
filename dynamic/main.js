const fs = require('fs')
const path = require('path')
const rootPath = path.join(__dirname, "..")
const Info = require(path.join(rootPath, "utils", "info"))
const info = new Info(rootPath)

const impl = require('./Impl')

async function main(){

    let res = await impl.getSpace(8366990, info.getAllCookie())
    console.log(res);
    let _rawData = res.data
    let data = {
        items: [],
        update_baseline: res.data.update_baseline,  // 更新基线,等于items中第一条记录的id
        offset: res.data.offset     // 偏移量,等于items中最后一条记录的id
    }

    let dynamicList = res.data.items
    for (let i = 0; i < dynamicList.length; i++) {
        const item = dynamicList[i];
        data.items.push({
            id: item.id_str,    // 动态ID
            type: item.type,    // 动态类型
            dynamicDetail: item.modules.module_dynamic,
            stat: {
                comment: item.modules.module_stat.comment,  // 评论
                forward: item.modules.module_stat.forward,  // 转发
                like: item.modules.module_stat.like         // 点赞
            }
        })
    }

    console.log('finish')
}

main()

