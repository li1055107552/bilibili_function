const fs = require('fs')
const path = require('path')
const rootPath = path.join(__dirname, "..")
const Info = require(path.join(rootPath, "utils", "info"))
const info = new Info(rootPath)

const impl = require('./Impl')

async function main(){
    console.log(info.getAllCookie()); 
    return null
    let res = await impl.getSpaceDynamic(info.getAllCookie(), 8366990)
    console.log(res);
    const _rawData = res.data
    
    let data = {
        items: [],
        has_more: res.data.has_more,                // 是否有更多数据
        update_baseline: res.data.update_baseline,  // 更新基线,等于items中第一条记录的id
        offset: res.data.offset,                    // 偏移量,等于items中最后一条记录的id
        update_num: res.data.update_num             // 本次获取获取到了多少条新动态	在更新基线以上的动态条数
    }

    let dynamicList = res.data.items
    for (let i = 0; i < dynamicList.length; i++) {
        const item = dynamicList[i];
        data.items.push({
            id_str: item.id_str,    // 动态ID
            type: item.type,    // 动态类型
            visible: item.visible,
            modules: {
                module_author: {
                    following: item.modules.module_author.following,
                    mid: item.modules.module_author.mid,
                    name: item.modules.module_author.name,
                    pub_action: item.modules.module_author.pub_action,
                    pub_location_text: item.modules.module_author.pub_location_text,
                    pub_time: item.modules.module_author.pub_time,
                    pub_ts: item.modules.module_author.pub_ts,
                    type: item.modules.module_author.type
                },
                module_dynamic: item.modules.module_dynamic,
                module_stat: item.modules.module_stat
            }
        })
    }
    console.log(data);
    // fs.writeFileSync(path.join(rootPath, "dynamic", "data.json"), JSON.stringify(data, null, 4), "utf-8")

    console.log('finish')
}

main()

