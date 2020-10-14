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
// 这样的写法不够优雅,使用泛型来标准化
class SelectGirl<T>{
  constructor(private girls: T[]) { }
  getGirl(index: number): T {
    return this.girls[index]
  }
}

