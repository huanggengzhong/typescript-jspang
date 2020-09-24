//类的继承
// class Lady {
//   content="hello Jack";
//   sayHello(){
//     return this.content;
//   }
// }

// class XiaoJieJie extends Lady {
//   sayLove(){
//     return "I love you"
//   }
// }

// const goddess =new XiaoJieJie()
// console.log(goddess.sayHello());//hello Jack
// console.log(goddess.sayLove());//I love you

// 类的重写

class Lady {
  content="hello Jack"
  sayHello(){
    return this.content;
  }
}

class XiaoJieJie extends Lady{
  sayLove(){
    return "I love you"
  }
  // 重写子类的sayHello方法
  sayHello(){
    // super它可以直接可以在父类中调用子类中的方法
    return super.sayHello()+'父组件的你好'//这里返回新的父组件的方法
  }
}

const goddess=new XiaoJieJie()
console.log(goddess.sayHello());//hello Jack父组件的你好



