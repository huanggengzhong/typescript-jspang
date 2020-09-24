//先来一个简单的ts类
// class Person{
//   name:string;
// }

// const person=new Person();
// person.name="jspang"
// console.log(person.name);//jspang

// 类的三个访问属性 public protected  private

// public 内部和外部都可以访问

// class Person{
//   public name:string;
//   public sayHello(){
//     console.log(this.name+"say Hello ");//this.name这种方式就是内部调用
    
//   }
// }
// // 下面这些属于外部访问
// const person=new Person()
// person.name="jspang"
// person.sayHello();//jspangsay Hello 
// console.log(person.name);//jspang


// private 只允许自己类的内部调用

// class Person{
//   private name:string;//这里声明了一个内部访问属性
//   public sayHello(){
//     console.log(this.name+"say hello");
//   }
// }

// const person=new Person()
// // person.name="xiaojiejie"//报错内部属性无法赋值和访问
// // console.log(person.name);//报错内部属性无法赋值和访问
// person.sayHello()//undefined say hello


// protected 可以在当前类和继承的子类中使用

class Person3{
  protected name:string="abc";
  public sayHello(){
    console.log(this.name+"say Hello");
  }
}

class Teacher extends Person3{
  public sayBye(){
    console.log(this.name);//可以拿到父类的name:abc
  }
}
// 下面是外部
const teacher=new Teacher()
// teacher.name="canglaoshi"//外部报错
teacher.sayBye()//abc
teacher.sayHello()//abcsay Hello


