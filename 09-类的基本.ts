class Lady{
    content="hello Jack!";
    sayHello(){
        return this.content;
    }
}

class XiaoJieJie extends Lady{
    sayLove(){
        return "I love you"
    }
}

const goddess=new XiaoJieJie()
console.log(goddess.sayHello());
console.log(goddess.sayLove());
