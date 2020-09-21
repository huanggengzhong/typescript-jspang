
// 接口

interface Girl{
    name:string,
    age:number,
    bust:number,
    waistline?:number,//非必填
    [proname:string]:any//允许加入任意值
}
