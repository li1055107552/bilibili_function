const path = require('path')
const Info = require('./utils/info')
const RefreshImpl = require('./baseLogin/RefreshImpl')
const fs = require('fs')

class testClass{
    constructor(data){
        console.log("constructor");
        this.data = data
    }
    fn1(){
        return "this is testClass.fn1"
    }
    fn2(){
        return "this is testClass.fn2"
    }
    static obj = {
        "7": {
            msg: "this is 7"
        },
        9: function(){
            return "this is 9"
        }
    }
}
async function main() {
}

// main()
async function test(){
    function isNeedDownload(bv) {
        history = {
            downloaded: [
                {bv: "123"},
                {bv: "456"},
                {bv: "789"},
                {bv: "23r"},
                {bv: "wef"},
                {bv: "adaf12"},
            ]
        }
        const targetObject = history.downloaded.find(obj => obj[bv] === bv);
        return targetObject === undefined
    }
    let res = isNeedDownload("wef")
    console.log(res);
    console.log('finish')
}
test()
