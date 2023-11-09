const path = require('path')
const Info = require('./utils/info')
const RefreshImpl = require('./baseLogin/RefreshImpl')

async function main() {

}

// main()
async function test(){

    let info = new Info(__dirname)
    
    let check = await RefreshImpl.checkrefresh(info.getAllCookie())
    console.log(isrefresh = check.data.refresh);

    console.log('finish')
}
test()
