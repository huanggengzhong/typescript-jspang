// 没加泛型的拼接
// function join(first: string | number, second: string | number) {
//   return `${first}${second}`;
// }

// join('jspang', '.com')
// join(1, "2");//不会报错

// 现在要求如果first是number类型,要求second也保持同一种,这就要用到泛型了

function join<T>(first: T, second: T) {
  return `${first}${second}`
}
console.log(join<string>('jspang', '.com'));
// console.log(join<string>('jspang', 2));//报错
console.log(join<number>(1, 2));


// 数组泛型的使用
// 写法1:直接用T[]
function myFun<T>(params: T[]) {//声明
  return params;
}

console.log(myFun<string>(['123', "456"]));//使用,打印 '123', '456' ]

// 写法2:用Array<T>

function myFun2<T>(params: Array<T>) {
  return params;
}
console.log(myFun2<string>(['123', '456']), "泛型写法2");


// 多个泛型的定义

function myFun3<T, P>(first: T, second: P) {
  return `${first}${second}`
}
console.log(myFun3<number, string>(1, "2"), "多个泛型的定义");//"12"

// 泛型的类型推断
function myFun4<T, P>(first: T, second: P) {
  return `${first}${second}`
}
