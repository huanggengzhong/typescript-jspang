namespace Components {
  export class Header {
    constructor() {
      const el = document.createElement("div")
      el.innerText = "This is Header"
      document.body.appendChild(el)
    }
  }
  export class Content {
    constructor() {
      const el = document.createElement("div")
      el.innerText = "This is Content"
      document.body.appendChild(el)
    }
  }
  export class Footer {
    constructor() {
      const el = document.createElement("div")
      el.innerText = "This is Footer"
      document.body.appendChild(el)
    }
  }
  // 使用子命名空间,这样在控制台Components.SubComponents.Test也能打印出这个fn
  export namespace SubComponents {
    export class Test { }
  }
}
