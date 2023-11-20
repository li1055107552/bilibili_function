const fs = require('fs')
const path = require('path')
const rootPath = path.join(__dirname, "..")
const Info = require(path.join(rootPath, "utils", "info"))
const info = new Info(rootPath)

const impl = require('./Impl')

async function main() {

    let res = await impl.getAllDynamic(info.getAllCookie(), 44648324)   // 677378178
    res = res.filter(e => e.type == "DYNAMIC_TYPE_AV")
    let list = []

    for (let i = 0; i < res.length; i++) {
        const item = res[i];
        let obj = {
            id: item.id_str,
            author: {
                pub_action: item.modules.module_author.pub_action,  // 投稿了视频 | 发布了动态视频 
                pub_time: item.modules.module_author.pub_time,  // 发布时间(刚刚 | 几天前 | xx月xx日)
                pub_ts: item.modules.module_author.pub_ts,      // 发布时间戳（秒）
                type: item.modules.module_author.type           // AUTHOR_TYPE_NORMAL 普通更新
            },
            dynamic: {
                archive: {
                    aid: item.modules.module_dynamic.major.archive.aid,     // '278444528',
                    bvid: item.modules.module_dynamic.major.archive.bvid,   // BV号,
                    cover: item.modules.module_dynamic.major.archive.cover, // 视频封面
                    desc: item.modules.module_dynamic.major.archive.desc,   // 视频简介,
                    duration_text: item.modules.module_dynamic.major.archive.duration_text, // 视频时长 '01:50',
                    jump_url: item.modules.module_dynamic.major.archive.jump_url,   // '//www.bilibili.com/video/BV1aw411N7vX/',
                    title: item.modules.module_dynamic.major.archive.title  // 视频标题
                },
                type: item.modules.module_dynamic.major.type    // MAJOR_TYPE_ARCHIVE 视频
            }
        }
        list.push(obj)
    }

    console.log(list);


    // 判断视频是否需要下载
    if(isNeedDownload(item.dynamic.archive.bvid)){
        // 获取cid
        let cid = getCid()
        // 获取MP4列表
        getMP4List(cid)
        // 获取dash列表
        let dash = media.main()
        // 下载相应品质的音频/视频
        download()
        // 合成音视频
        merge()
        // 上传
        upload()
    }



    console.log('finish')
}

main()

async function test() {
    // let res = await getDynamicAllVideo()
    // console.log(res);
    // console.log('finish')
    // let res = await impl.getSpace(info.getAllCookie(), 44648324)
    let res = await impl.getAllDynamic(info.getAllCookie(), 44648324)
    console.log(res);
    console.log('finish')

}
// test()

