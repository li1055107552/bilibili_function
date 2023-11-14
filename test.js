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

    static init1(msg = "this is testClass data"){
        // console.log(this);
        this.data = msg
        return new this
    }
    static init2(msg = "this is testClass data"){
        // console.log(this);
        this.data = msg
        return new testClass(this.data)
    }
    static init3(msg = "this is testClass data"){
        // console.log(this);
        this.data = msg
        return this
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

// main()
async function test(){

    let t = new testClass()
    console.log(t);

    let init1 = testClass.init1()
    console.log(init1);

    let init2 = testClass.init2()
    console.log(init2);

    let init3 = testClass.init3()
    console.log(init3);
    console.log('finish')
}
test()
