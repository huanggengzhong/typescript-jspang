// console.log("jspang");//测试搭建环境
// 按常规方式创建Header,Content,Footer

// class Header {
//   constructor() {
//     const el = document.createElement('div')
//     el.innerText = "This is Header"
//     document.body.appendChild(el)
//   }
// }

// class Content {
//   constructor() {
//     const el = document.createElement("div")
//     el.innerText = "This is Content"
//     document.body.appendChild(el)
//   }
// }

// class Footer {
//   constructor() {
//     const el = document.createElement("div")
//     el.innerText = "This is Footer"
//     document.body.appendChild(el)
//   }
// }

// class Page {
//   constructor() {
//     new Header()
//     new Content()
//     new Footer()
//   }
// }

// 运行npm run serve后发现,上面都是全局变量,现在需要只有Page这个全局变量:解决办法用命名空间namespace解决,这样暴露出去的就只有一个Home类了

namespace Home {
  class Header {
    constructor() {
      const el = document.createElement('div')
      el.innerText = "This is Header"
      document.body.appendChild(el)
    }
  }

  class Content {
    constructor() {
      const el = document.createElement("div")
      el.innerText = "This is Content"
      document.body.appendChild(el)
    }
  }

  class Footer {
    constructor() {
      const el = document.createElement("div")
      el.innerText = "This is Footer"
      document.body.appendChild(el)
    }
  }
  // 要暴露出去的类
  export class Page {
    constructor() {
      new Header()
      new Content()
      new Footer()
    }
  }
}
