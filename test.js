const path = require('path')
const Info = require('./utils/info')
const RefreshImpl = require('./baseLogin/RefreshImpl')
const fs = require('fs')

class testClass{
    constructor(){
        this.data = "this is testClass data"
    }
    fn1(){
        return "this is testClass.fn1"
    }
    fn2(){
        return "this is testClass.fn2"
    }
}

let fnc = function(){
    function constructor(){
        this.data = "this is testClass data"
    }
    function fn1(){
        return "this is testClass.fn1"
    }
    function fn2(){
        return "this is testClass.fn2"
    }
}

async function main() {
    let c = new testClass()
    let add = function(){
        return "this is testClass.fn3"
    }
    c.__proto__.fn3 = add
    testClass.prototype.fn3re = add
    console.log(c);
    
    console.log(c.fn3());
    
    console.log(testClass.prototype);

    fnc.prototype.add = function(){
        return "this is testClass.fn3"
    }

    console.log(fnc);
    console.log(fnc.prototype);

    let a = new fnc()
    console.log(a);
    console.log(a.add());

    a.__proto__.ttt = function(r){
        return `${r}.ttt`
    }
    console.log(a.ttt("a"));
    let b = new fnc()
    console.log(b.ttt("b"));
    console.log('finish')
}

main()
async function test(){

    let info = new Info(__dirname)
    
    let check = await RefreshImpl.checkrefresh(info.getAllCookie())
    console.log(isrefresh = check.data.refresh);

    console.log('finish')
}
// test()
