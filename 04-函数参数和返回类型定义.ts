// demo:没有定义返回值类型
function getTotal(one:number,two:number){
    return one  +two
    // return one  +''+two
}

const total=getTotal(1,4)
console.log(total,"111");

// 正确做法:函数增加返回值
function getTotal2(one:number,two:number):number{
    // return one +two+""//直接提示报错
    return one +two
}
const total2=getTotal2(1,8)
console.log(total2);

//函数没有返回值,如何定义呢,使用void关键字

function sayHi():void{
    // return 1//没有返回值,不能返回操作
    console.log("hello");
    
}
sayHi()


// 永远没有返回值的函数,用never关键字
function errFunction():never{
    throw new Error()
    console.log("hello");//永远都不会只想这句话
    
}
// errFunction()

// 死循环也可以用这个never关键字
function forNaver():never{
    while(true){}
    console.log("hello");
    
}

// 特别主要,函数的参数是对象时的写法
// function add({one:number,two:number}){//不能这样写
function addSum({one,two}:{one:number,two:number}){
    return one+two
}

const add =addSum({one:1,two:5})
console.log(add);//6

// 即使参数的对象是一个值也要这么写

function addSum2({one}:{one:number}):number{
    return one
}
const add2=addSum2({one:9})
console.log(add2);




