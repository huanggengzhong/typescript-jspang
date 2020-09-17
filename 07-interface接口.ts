
//普通写法

const screenResume=(name:string,age:number,bust:number)=>{
    age<25&& bust>90 && console.log(name+"进入面试");
    if(age>25|| bust<90) {
        console.log(name+"不符合要求");
    } 
    
}

screenResume("刘英",18,98)
screenResume("大脚",30,80)


// 同时增加看简历信息

const getResume=(name:string,age:number,bust:number)=>{
    console.log(name+",年龄是:"+age);
    console.log(name+",胸围是:"+bust);
    
}

getResume('大脚',30,64)


// 发现上面同一规范写了两次,所以使用接口来统一
