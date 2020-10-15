"use strict";
var Home;
(function (Home) {
    var Header = (function () {
        function Header() {
            var el = document.createElement('div');
            el.innerText = "This is Header";
            document.body.appendChild(el);
        }
        return Header;
    }());
    var Content = (function () {
        function Content() {
            var el = document.createElement("div");
            el.innerText = "This is Content";
            document.body.appendChild(el);
        }
        return Content;
    }());
    var Footer = (function () {
        function Footer() {
            var el = document.createElement("div");
            el.innerText = "This is Footer";
            document.body.appendChild(el);
        }
        return Footer;
    }());
    var Page = (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
