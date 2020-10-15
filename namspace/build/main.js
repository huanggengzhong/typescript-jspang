"use strict";
var Components;
(function (Components) {
    var Header = (function () {
        function Header() {
            var el = document.createElement("div");
            el.innerText = "This is Header";
            document.body.appendChild(el);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = (function () {
        function Content() {
            var el = document.createElement("div");
            el.innerText = "This is Content";
            document.body.appendChild(el);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = (function () {
        function Footer() {
            var el = document.createElement("div");
            el.innerText = "This is Footer";
            document.body.appendChild(el);
        }
        return Footer;
    }());
    Components.Footer = Footer;
    var SubComponents;
    (function (SubComponents) {
        var Test = (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
})(Components || (Components = {}));
var Home;
(function (Home) {
    var Page = (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
