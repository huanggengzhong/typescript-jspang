
// 接口使用

interface Girl{
    name:string,
    age:number,
    bust:number,
    waistline?:number,//非必填
    [proname:string]:any,//允许加入任意值
    say():string//方法,返回string类型
    
}
// 对象里的方法
const girl:Girl={
    name:'大脚',
    age:18,
    bust:90,
    waistline:20,
    sex:"男",
    say(){
        return '欢迎光临'
        
    }
}
console.log(girl);

// 接口和类的结合使用
class Xiaojiejie implements Girl{
    name="刘英";
    age=18;
    bust=100;
    say(){
        return "刘英欢迎您"
    }
}
console.log((new Xiaojiejie),"类");//Xiaojiejie { name: '刘英', age: 18, bust: 100 } 类

// 接口间的继承

interface Teacher extends Girl{
    teach():string//Teacher有自己的一个teach方法
}

// 比如现在要看Teacher级别的简历,可以这样做

const getResume=(girl:Teacher)=>{
    console.log(girl.name+'年龄是:'+girl.age);
    console.log(girl.name+'胸围是:'+girl.bust);
    girl.waistline&&  console.log(girl.name+'腰围是:'+girl.waistline);
    girl.sex&&  console.log(girl.name+'性别是:'+girl.sex);
    
}
