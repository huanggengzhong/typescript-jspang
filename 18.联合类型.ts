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
