// 类的构造函数
// class Person{
//   public name:string;
//   constructor(name:string){
//     this.name=name
//   }
// }

// const person=new Person('jspang')
// console.log(person.name);//jspang

// 上面简写
// 这种写法就相当于你定义了一个name,然后在构造函数里进行了赋值，这是一种简化的语法，在工作中我们使用这种语法的时候会更多一些。

// class Person{
//   constructor(public name:string){

//   }
// }

// const person=new Person('jspang')
// console.log(person.name);//jspang

// 继承类中使用构造函数的写法

// class Person{
//   constructor(public name:string){}
// }
// class Teacher extends Person{
//   constructor(public age:number){
//     super('jspang')
//   }
// }

// const teacher = new Teacher(12)
// console.log(teacher.age);
// console.log(teacher.name);

// 父类没有构造函数，子类也要使用super()进行调用

class Person{

}
class Teacher extends Person{
  constructor(public age:number){
    super()
  }
}

const teacher=new Teacher(20)
console.log(teacher.age);//20
