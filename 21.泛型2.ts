// 在类中泛型

// 先来一个普通的获取小姐姐类
// class SelectGirl {
//   constructor(private girls: string[]) { };
//   getGirl(index: number): string {
//     return this.girls[index]
//   }
// }

// const selectGirl = new SelectGirl(['大脚', "刘英", "小红"])
// console.log(selectGirl.getGirl(1));//刘英

// 姓名改为编号小姐姐

// class SelectGirl {
//   constructor(private girls: string[] | number[]) { }
//   getGirl(index: number): string | number {
//     return this.girls[index]
//   }
// }
// // 这样的写法不够优雅,使用泛型来标准化
// class SelectGirl<T>{
//   constructor(private girls: T[]) { }
//   getGirl(index: number): T {
//     return this.girls[index]
//   }
// }

// // const selectGirl = new SelectGirl(['大脚', "刘英", "小红"])
// // console.log(selectGirl.getGirl(1));//刘英
// // 上面是类型推断出来的
// const selectGirl = new SelectGirl<string>(['大脚', "刘英", "小红"])
// console.log(selectGirl.getGirl(1));//刘英


// 泛型中的继承
// 需求要求数组对象,里面有name属性
interface Girl {
  name: string
}

class SelectGirl<T extends Girl>{
  constructor(private girls: T[]) { }
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}


const selectGirl = new SelectGirl([
  { name: "大脚" },
  { name: "刘英" },
  { name: "小红" }
])

console.log(selectGirl.getGirl(1));//刘英

// 泛型约束:也就是继承来自比如对象、字符串、布尔、数字

class SelectGirl2<T extends number | string | boolean | Object>{
  constructor(private girls: T[]) { }
  getGirl(index: number): T {
    return this.girls[index]
  }
}

const selectGirl2 = new SelectGirl2<string>(['大脚', "刘英", "小红"])
console.log(selectGirl2.getGirl(1), "泛型约束");//刘英 泛型约束

