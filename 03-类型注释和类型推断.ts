

// 类型注解
let count :number;//规定了number类型,这就是类型注解
count =123;
console.log(count);//123

// 类型推断

let countInference=123;//鼠标移动到变量时会显示number

//使用原则:ts无法识别变量类型的话就用类型注解

// 使用类型注解案例

function getTatol(one:number,two:number){
    return one+two
}

const total=getTatol(1,3)
console.log(total,"sum");

// 这里的total不需要加类型注解,因为它会自动类型推断

