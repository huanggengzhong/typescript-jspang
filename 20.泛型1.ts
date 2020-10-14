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




