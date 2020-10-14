// 场景:随机选择一项任务

// 常规写法
// const Status = {
//   MESSAGE: 0,
//   SPA: 1,
//   DABAOJIAN: 2
// }

// function getServe(status: any) {
//   if (status === Status.MESSAGE) {
//     return 'message'
//   } else if (status === Status.SPA) {
//     return 'spa'
//   } else if (status === Status.DABAOJIAN) {
//     return '大宝剑'
//   }

// }

// const result = getServe(2)
// console.log(`我要去${result}`);//我要去大宝剑

// 枚举高级写法

enum Status {
  // MESSAGE,
  MESSAGE = 1,//修改枚举下标值
  SPA,
  DABAOJIAN
}

function getServe(status: any) {
  if (status === Status.MESSAGE) {
    return 'message'
  } else if (status === Status.SPA) {
    return 'spa'
  } else if (status === Status.DABAOJIAN) {
    return '大宝剑'
  }
}

const result = getServe(Status.DABAOJIAN)
console.log(result, "枚举");

// 枚举对应值
console.log(getServe(1), "直接传递下标");//默认跟数组下标一致

// 修改下标值后
console.log(Status.MESSAGE);//1
console.log(Status.SPA);//2
console.log(Status.DABAOJIAN);//3

//知道下标后,我们可以通过数组一样查询它的值,
console.log(Status.SPA, Status[2]);//打印2和SPA,这里的Status[2]取到枚举的名字



