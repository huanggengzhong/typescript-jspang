// 开始联合类型

interface Waiter {
  anjiao: boolean;
  say: () => {}
}

interface Teacher {
  anjiao: boolean,
  skill: () => {}
}


// function judgeWho(animal: Waiter | Teacher) {//联合类型
//   // animal.say()//报错没因为判断不了
// }
// 解决上面问题:方法1用类型断言

// function judgeWho(animal: Waiter | Teacher) {
//   if (animal.anjiao) {
//     (animal as Teacher).skill()//使用类型断言
//   } else {
//     (animal as Waiter).say()
//   }
// }

// 方法2使用in语法

function judgeWho(animal: Waiter | Teacher) {
  if ('skill' in animal) {
    // 说明是技师
    animal.skill()
  } else {
    animal.say()
  }
}


//  类型保护的其它知识


// 现在有一个需求:如果数字或者字符串让他们相加
// function add(first: string | number, second: string | number) {
//   return first + second;//报错了
// }
// 使用typeof语法解决这个问题

function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  } else {
    return first + second;
  }
}

// 如果上面的参数是对象或者类

class NumberObj {
  count: number
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  // return first.count + second.count;//报错
  // 解决方法使用instanceof语法
  if (first instanceof NumberObj && second instanceof NumberObj) {//注意instanceof 只能用在类上,并且这里是&&
    return first.count + second.count;
  } else return 0;
}
