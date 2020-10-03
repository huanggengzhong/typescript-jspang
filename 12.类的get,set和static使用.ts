// 声明只有自己可以看年龄的小姐姐类

// class XiaoJieJie {
//   constructor(private _age: number) { }
//   // 只有自己知道的get方法,但归根到底还是属性,调用的使用使用
//   属性语法
//   get age() {
//     return this._age;
//   }
// }

// const dajiao = new XiaoJieJie(18)
// console.log(dajiao.age);//注意这里是属性,打印18

// -------------private对age进行偷摸的处理
// class XiaoJieJie {
//   constructor(private _age: number) { }
//   get age() {
//     return this._age - 2//自己单独进行处理
//   }
// }

// const dajiao = new XiaoJieJie(18)
// console.log(dajiao.age);//16

// set 

// class XiaoJieJie {
//   constructor(private _age: number) { }
//   get age() {
//     return this._age - 10
//   }
//   set age(age: number) {
//     this._age = age + 3
//   }
// }

// const dajiao = new XiaoJieJie(25)
// console.log(dajiao.age);//15
// // 15岁未成年,我们想办法改变一下年龄
// dajiao.age = 25
// console.log(dajiao.age);//18


// static 静态 不需要new 直接加上static之后即可使用

class Girl {
  static sayLove() {
    return "I love you"
  }
}

console.log(Girl.sayLove());//I love you
