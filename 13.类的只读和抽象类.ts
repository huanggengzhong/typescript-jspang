
// 类的只读属性

// class Person {
//   constructor(public name: string) { }

// }

// const person = new Person('jspang')
// console.log(person.name);//jspang
// person.name = "谢大脚"//谢大脚
// console.log(person.name);

// 现在需求,上面名字不能改,做法如下

// class Person {
//   public readonly _name: string;
//   constructor(name: string) {
//     this._name = name
//   }
// }

// const person = new Person('jspang')
// // person._name = 'sdf'//报错
// console.log(person._name);//jspang

// 抽象类

// 要求
/**我要求无论是什么职位，都要有独特的技能，
 * 比如服务员就是给顾客倒水，
 初级技师要求会泰式按摩，
高级技师要求会 SPA 全身按摩。
 */

abstract class Girl {
  abstract skill()//因为没有具体方法,所以这里不写括号
}

class Waiter extends Girl {
  skill() {
    console.log("大爷,请喝水");
  }
}

class BaseTeacher extends Girl {
  skill() {
    console.log("大爷,来个泰式按摩吧");

  }
}
class hightTeacher extends Girl {
  skill() {
    console.log("大爷,来个全身SPA吧");

  }
}
const waiter = new Waiter()

console.log(waiter.skill());//大爷,请喝水

