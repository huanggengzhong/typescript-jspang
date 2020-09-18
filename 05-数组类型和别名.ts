//数组类型的写法

const numberArr:number[]=[1,2,3]

const undefinedArr:undefined[]=[undefined]//undefined也可以定义

// 数组中多个类型

const diferentArr:(number|string)[]=[11,"abc"]//意思可以是数字也可以是字符串

const diferentArr2:(number|string)[]=["abc",123]


// 数组对象的定义

const objArr:{name:string,age:Number}[]=[
// const objArr:{name:string,age:number}[]=[//大小写都行
    {
        name:"小码",
        age:20
    },
    {
        name:"小码",
        age:20
    },
]

console.log(objArr,"objArr");

// 上面数组对象写法麻烦,有一个别名写法
// 定义别名:用type生命
type Lady={name:string,age:number}

// 使用
const objArr2:Lady[]=[
    {
        name:"小张",
        age:20
    }
]
console.log(objArr2,"2")

// 类来定义也可以实现上面的功能

class Madam{
    name:string;//注意这里用分号
    age:number
}

const objArr3:Madam[]=[
    {
        name:"小ming",
        age:20  
    }
]
console.log(objArr3,"33333");
