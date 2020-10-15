define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    var Header = (function () {
        function Header() {
            var el = document.createElement("div");
            el.innerText = "This is Header";
            document.body.appendChild(el);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = (function () {
        function Content() {
            var el = document.createElement("div");
            el.innerText = "This is Content";
            document.body.appendChild(el);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = (function () {
        function Footer() {
            var el = document.createElement("div");
            el.innerText = "This is Footer";
            document.body.appendChild(el);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("main", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = (function () {
        function Page() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
