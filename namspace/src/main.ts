
// namespace Home {
//   export class Page {
//     constructor() {
//       new Components.Header()
//       new Components.Content()
//       new Components.Footer()
//     }
//   }
// }

// 使用import语法,直接无法使用要在index.html引入requie.js
import { Header, Content, Footer } from "./components"
export default class Page {
  constructor() {
    new Header()
    new Content()
    new Footer()
  }
}
