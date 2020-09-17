// 元组其实就是数组的加强,目的是给数组类型位置固定

// 数组普通注解,缺点无法限制位置类型
const xiaojiejie1:(string|number)[]=['dajiao',"teacher",28];
const xiaojiejie2:(string|number)[]=['dajiao',28,"teacher"]

// 元组的使用:把每个元素类型给固定住了
const xiaojiejie3:[string,string,number]=['dajiao','teacher',28]

// 数据源数组的使用
const xiaojiejie4:[string,string,number][]=[
    ['dajiao',"teacher",28],
    ['dajiao',"teacher",18],
    ['dajiao',"teacher",38]
]