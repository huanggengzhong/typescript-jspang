
// 基础静态类型
const count:number=99
const myName:string='jspang'


// 对象类型

const xiaojiejie:{name:string,age:number}={
  name:'大脚',
  age:30
}
console.log(xiaojiejie);//{ name: '大脚', age: 30 }

// 对象类型也可以是数组

const xiaojiejies:String[]=["刘英","小红"]//String大写

const xiaojiejies2:Number[]=[1,2,3]

// 类的形式定义变量

class Person{}

const dajiao:Person=new Person()
console.log(dajiao,"类dajiao");


// 函数形式
// 下面意思要求函数,返回字符串

const jianXiaojiejieFn:()=>string=()=>("大脚")
console.log(jianXiaojiejieFn(),"func");



const jianxiaojiejie:()=>string=()=>{return '111'}

// 因为一切皆对象,上面对象类型,数组类型,类类型,函数类型统一都称为对象
