(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"094J":function(t,e,n){"use strict";(function(t){n("JHok"),n("sc67");var o=n("q1tI"),i=n("puqk"),r={},a=function(t,e,n){return r[t]||(r[t]={callbacks:[],value:n}),r[t].callbacks.push(e),{deregister:function(){var n=r[t].callbacks,o=n.indexOf(e);o>-1&&n.splice(o,1)},emit:function(n){r[t].value!==n&&(r[t].value=n,r[t].callbacks.forEach((function(t){e!==t&&t(n)})))}}};e.a=function(e,n){if(void 0===n&&(n=t.localStorage),n){var r=(l=n,{get:function(t,e){var n=l.getItem(t);return null===n?"function"==typeof e?e():e:JSON.parse(n)},set:function(t,e){l.setItem(t,JSON.stringify(e))}});return function(t){return function(t,e,n){var r=n.get,l=n.set,c=Object(o.useRef)(null),s=Object(o.useState)((function(){return r(e,t)})),u=s[0],f=s[1];return Object(i.a)("storage",(function(t){var n=t.key,o=JSON.parse(t.newValue);n===e&&u!==o&&f(o)})),Object(o.useEffect)((function(){return c.current=a(e,f,t),function(){c.current.deregister()}}),[]),Object(o.useEffect)((function(){l(e,u),c.current.emit(u)}),[u]),[u,f]}(t,e,r)}}var l;return o.useState}}).call(this,n("yLpj"))},"7jGI":function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var o=n("q1tI"),i=n.n(o),r=n("Wbzz"),a=n("1Qp6"),l=n("Bi3C"),c=n.n(l),s=n("vOnD"),u=s.b.div.withConfig({displayName:"styles__Wrapper",componentId:"j3490k-0"})(["a{color:#6d6d6d;text-decoration:none;}",""],(function(t){return t.desktop?"\n\t\t\t@media (max-width: 600px) {\n\t\t\t\tmargin: 0 auto;\n\t\t\t}\n\n\t\t\ta {\n\t\t\t\t\tmargin-right: 0.83333333rem;\n\n\t\t\t\t\t&:last-child {\n\t\t\t\t\t\t\tmargin-right: unset;\n\t\t\t\t\t}\n\t\t\t}\n\t\t":"\n\t\t\tpadding: 3rem;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\n\t\t\ta {\n\t\t\t\t\tmargin-bottom: 1rem;\n\n\t\t\t\t\t&:last-child {\n\t\t\t\t\t\t\tmargin-bottom: unset;\n\t\t\t\t\t}\n\t\t\t}\n\t"})),f=n("g+62"),d=n("D+mv"),M=n.n(d),m=n("iAIW"),p=n.n(m),I=function(t){var e=Object(f.a)(!1,{classNameDark:"dark",classNameLight:"light"});return i.a.createElement("button",{onClick:e.toggle,id:"theme-toggler"},i.a.createElement("img",{src:e.value?p.a:M.a,style:{marginTop:e.value?"0px":"-7px"}}))},g=function(t){var e=t.desktop;return i.a.createElement(u,{desktop:e},i.a.createElement("div",{className:"navbar-links"},i.a.createElement(r.Link,{to:"/projects"},"Projects"),i.a.createElement(c.a,{href:"#contact"},"Contact"),i.a.createElement(r.Link,{to:"/blog"},"Blog"),i.a.createElement(I,null)))},y=s.b.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1vtxm3h-0"})(["padding:1.5rem 0;display:flex;align-items:center;justify-content:space-between;a{color:#212121;text-decoration:none;&:focus,&:hover,&:visited,&:link,&:active{text-decoration:none;}}"]),v=(n("h3mB"),n("n0hJ"),n("TPxw"),function(t){return i.a.createElement("svg",{width:t.width,height:t.height,viewBox:"0 0 334 319",fill:t.fill||"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{id:"outer-circle",d:"M326.5 157.5C326.5 242.541 257.338 311.5 172 311.5C86.6615 311.5 17.5 242.541 17.5 157.5C17.5 72.4586 86.6615 3.5 172 3.5C257.338 3.5 326.5 72.4586 326.5 157.5Z",stroke:"black",strokeWidth:"7"}),i.a.createElement("path",{d:"M197.474 176.158L238.526 89L296 214.053H265.684C238.347 192.287 215.955 206.343 212 214.053H176C215.916 166.053 235.368 180.579 252.421 180.579L254.947 181.211L256.211 180.579L239.789 144.579L229.684 167.947C216.543 168.556 209.532 170.546 197.474 176.158Z",fill:"#050505",stroke:"black"}),i.a.createElement("path",{d:"M139.5 89.5H51C51 89.5 54.5 98 62 101.5C69.5 105 73.5 105 73.5 105C73.5 105 104.5 105 116 107C120.647 107.808 123.442 108.302 125.41 108.928C126.403 108.963 127.384 109.142 128.338 109.477C132.21 110.838 134.824 114.49 135.811 119.149C136.315 120.923 136.542 123.822 137 130C137.162 132.19 137.338 134.261 137.507 136.261C138.381 146.591 139.094 155.014 137 168C134.5 183.5 116.256 191.562 111 193C105.744 194.438 98.5 193 98.5 193C93.2634 192.135 88.1039 190.249 82.0627 188.041C79.4061 187.07 76.5791 186.036 73.5 185L62 201C75.1667 206.667 104.4 215.5 116 213.5C132.209 207.395 147.677 193.477 150 190.5C150.359 190.041 150.727 189.604 151.1 189.162C153.146 186.737 155.348 184.127 157 176.5C158.286 170.563 157.705 144.922 157.273 125.811C157.048 115.893 156.863 107.733 157 105C157.4 97 150.5 89.5 139.5 89.5Z",fill:"#141414",stroke:"black"}))}),h=function(){return i.a.createElement(y,{as:a.a},i.a.createElement("div",{className:"logo-container"},i.a.createElement(r.Link,{to:"/",id:"my-logo"},i.a.createElement(v,null)),i.a.createElement(r.Link,{to:"/",id:"home-link"},"Jino Antony")),i.a.createElement(g,{desktop:!0}))},b=(s.b.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-172wich-0"})(["z-index:5;top:1.6rem;right:1.8rem;display:none;cursor:pointer;transition:left 500ms cubic-bezier(0.6,0.05,0.28,0.91);position:absolute;@media (max-width:960px){display:block;}",""],(function(t){return t.sidebar&&"\n\t\t\tright: 18%;\n\t\t\ttop: 1.4rem;\n\t\t\n\t\t\t@media (max-width: 960px) {\n\t\t\t\tright: 35%;\n\t\t\t}\n\t\t\n\t\t\t@media (max-width: 600px) {\n\t\t\t\tright: 66%;\n\t\t\t}\n\t"})),s.b.div.withConfig({displayName:"styles__Bar",componentId:"sc-172wich-1"})(["width:1.6rem;height:.15rem;margin-bottom:.3rem;background-color:#212121;transition:transform 500ms cubic-bezier(0.6,0.05,0.28,0.91),opacity 500ms,box-shadow 250ms,background-color 500ms;@media (max-width:600px){width:1.6rem;}"," "," ",""],(function(t){var e=t.top,n=t.sidebar;return e&&n&&"\n\t\ttransform: translateY(8px) rotate(-135deg);\n\t"}),(function(t){var e=t.mid,n=t.sidebar;return e&&n&&"\n\t\t\ttransform: scale(0);\n\t"}),(function(t){var e=t.bottom,n=t.sidebar;return e&&n&&"\n\t\t\ttransform: translateY(-6px) rotate(-45deg);\n\t"})),s.b.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1rzfhdi-0"})(["position:fixed;z-index:4;overflow:auto;top:0px;right:-275px;width:0;opacity:0;height:100%;background-color:#fff;transition:all 350ms cubic-bezier(0.6,0.05,0.28,0.91);",""],(function(t){return t.active&&"\n\t\t\twidth: 20%;\n\t\t\tright: 0px;\n\t\t\topacity: 1;\n\n\t\t\t@media (max-width: 960px) {\n\t\t\t\twidth: 40%;\n\t\t\t}\n\n\t\t\t@media (max-width: 600px) {\n\t\t\t\twidth: 75%;\n\t\t\t}\n\t"}))),j=function(t){var e=t.sidebar,n=t.toggle;return i.a.createElement(b,{active:e,onClick:n},i.a.createElement(g,null))},C=s.b.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1gzl4j1-0"})(["background:transparent;width:100%;"]),N=s.b.div.withConfig({displayName:"styles__Overlay",componentId:"sc-1gzl4j1-1"})(["position:fixed;background:rgba(0,0,0,0.7);width:100%;height:100%;display:none;transition:0.4s;",""],(function(t){return t.sidebar&&"\n\t\t\tdisplay: block;\n\t\t\tz-index: 4;\t\n\t"})),x=function(){var t=Object(o.useState)(!1),e=t[0],n=t[1];return i.a.createElement(C,null,i.a.createElement(N,{sidebar:e,onClick:function(){return n(!e)}}),i.a.createElement(h,null),i.a.createElement(j,{sidebar:e,toggle:n}))}},Bi3C:function(t,e,n){var o;n("klQ5"),n("1dPr"),n("n7j8"),n("LagC"),n("pS08"),n("sc67"),n("E5k/"),n("R48M"),"undefined"!=typeof self&&self,o=function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=n(1),r=(o=i)&&o.__esModule?o:{default:o};e.default=r.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(2),l=(o=a)&&o.__esModule?o:{default:o},c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.smoothScroll=n.smoothScroll.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){n(3).polyfill()}},{key:"smoothScroll",value:function(t){var e=this;t.preventDefault();var n=function(){return 0};void 0!==this.props.offset&&(n=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var o=t.currentTarget.getAttribute("href").slice(1),i=document.getElementById(o).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:i-n(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,e=(t.offset,function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["offset"]));return l.default.createElement("a",i({},e,{onClick:this.smoothScroll}))}}]),e}(a.Component);e.default=c},function(e,n){e.exports=t},function(t,e,n){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var n,o=t.HTMLElement||t.Element,i={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:o.prototype.scroll||l,scrollIntoView:o.prototype.scrollIntoView},r=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,a=(n=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?m.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):i.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?i.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;m.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var n=d(this),o=n.getBoundingClientRect(),r=this.getBoundingClientRect();n!==e.body?(m.call(this,n,n.scrollLeft+r.left-o.left,n.scrollTop+r.top-o.top),"fixed"!==t.getComputedStyle(n).position&&t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(t,e){return"Y"===e?t.clientHeight+a<t.scrollHeight:"X"===e?t.clientWidth+a<t.scrollWidth:void 0}function u(e,n){var o=t.getComputedStyle(e,null)["overflow"+n];return"auto"===o||"scroll"===o}function f(t){var e=s(t,"Y")&&u(t,"Y"),n=s(t,"X")&&u(t,"X");return e||n}function d(t){var n;do{n=(t=t.parentNode)===e.body}while(!1===n&&!1===f(t));return n=null,t}function M(e){var n,o,i,a,l=(r()-e.startTime)/468;a=l=l>1?1:l,n=.5*(1-Math.cos(Math.PI*a)),o=e.startX+(e.x-e.startX)*n,i=e.startY+(e.y-e.startY)*n,e.method.call(e.scrollable,o,i),o===e.x&&i===e.y||t.requestAnimationFrame(M.bind(t,e))}function m(n,o,a){var c,s,u,f,d=r();n===e.body?(c=t,s=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=i.scroll):(c=n,s=n.scrollLeft,u=n.scrollTop,f=l),M({scrollable:c,method:f,startTime:d,startX:s,startY:u,x:o,y:a})}}}}()}])},t.exports=o(n("q1tI"))},"D+mv":function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjkgMjkiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAuNSIgY3k9IjAuNSIgcj0iMC41IiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZlMTlhIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMjM0Ii8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTE0LDJDOSwyLDMsNywzLDE1QTEzLjY3MSwxMy42NzEsMCwwLDAsMTcsMjljOCwwLDEzLTYsMTMtMTFDMTksMjUsNywxMywxNCwyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTEpIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"},N6TH:function(t,e,n){"use strict";var o=n("q1tI"),i=n.n(o);n("YmbC");e.a=function(){return i.a.createElement("div",{className:"links"},i.a.createElement("a",{href:"mailto:jinoantony99@gmail.com",className:"platforms"},i.a.createElement("svg",{viewBox:"0 0 24 24",role:"presentation",id:"email"},i.a.createElement("path",{d:"M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z"}))),i.a.createElement("a",{href:"https://linkedin.com/in/jinoantony",className:"platforms"},i.a.createElement("svg",{viewBox:"0 0 67 67",role:"presentation",id:"linkedin"},i.a.createElement("path",{d:"M50.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H50.837z M22.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H22.959z M34,64  C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z M26.354,48.137V27.71h-6.789v20.427  H26.354z",style:{fillRule:"evenodd",clipRule:"evenodd"}}))),i.a.createElement("a",{href:"https://github.com/jinoantony",className:"platforms"},i.a.createElement("svg",{viewBox:"0 0 24 24",role:"presentation",id:"github"},i.a.createElement("path",{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}))),i.a.createElement("a",{href:"https://twitter.com/Jino_Antony17",className:"platforms"},i.a.createElement("svg",{viewBox:"0 0 24 24",role:"presentation",id:"twitter"},i.a.createElement("path",{d:"M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"}))),i.a.createElement("a",{href:"https://instagram.com/jinoantony17",className:"platforms"},i.a.createElement("svg",{viewBox:"0 0 24 24",role:"presentation",id:"instagram"},i.a.createElement("path",{d:"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"}))))}},RvXn:function(t,e,n){},TPxw:function(t,e,n){},Xm10:function(t,e,n){"use strict";var o=n("q1tI"),i=n.n(o),r=n("N6TH");n("RvXn");e.a=function(){return i.a.createElement("div",{id:"footer"},i.a.createElement(r.a,null),i.a.createElement("div",{id:"info"},"Jino Antony ©",(new Date).getFullYear()," | All rights are reserved | Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))}},"Y++M":function(t,e,n){"use strict";var o=n("DFzH"),i=n("dTG6"),r=n("kiRH");t.exports=function(t){for(var e=o(this),n=r(e.length),a=arguments.length,l=i(a>1?arguments[1]:void 0,n),c=a>2?arguments[2]:void 0,s=void 0===c?n:i(c,n);s>l;)e[l++]=t;return e}},YmbC:function(t,e,n){},"g+62":function(t,e,n){"use strict";(function(t){var o=n("puqk"),i=n("q1tI"),r=n("094J"),a=function(){},l={classList:{add:a,remove:a}},c=function(e,n,o){void 0===o&&(o=t);var a=e?Object(r.a)(e,n):i.useState,c=o.matchMedia?o.matchMedia("(prefers-color-scheme: dark)"):{},s={addEventListener:function(t,e){return c.addListener&&c.addListener(e)},removeEventListener:function(t,e){return c.removeListener&&c.removeListener(e)}},u="(prefers-color-scheme: dark)"===c.media,f=o.document&&o.document.body||l;return{usePersistedDarkModeState:a,getDefaultOnChange:function(t,e,n){return void 0===t&&(t=f),void 0===e&&(e="dark-mode"),void 0===n&&(n="light-mode"),function(o){t.classList.add(o?e:n),t.classList.remove(o?n:e)}},mediaQueryEventTarget:s,getInitialValue:function(t){return u?c.matches:t}}};e.a=function(t,e){void 0===t&&(t=!1),void 0===e&&(e={});var n=e.element,r=e.classNameDark,a=e.classNameLight,l=e.onChange,s=e.storageKey;void 0===s&&(s="darkMode");var u=e.storageProvider,f=e.global,d=Object(i.useMemo)((function(){return c(s,u,f)}),[s,u,f]),M=d.getDefaultOnChange,m=d.mediaQueryEventTarget,p=(0,d.usePersistedDarkModeState)((0,d.getInitialValue)(t)),I=p[0],g=p[1],y=Object(i.useMemo)((function(){return l||M(n,r,a)}),[l,n,r,a,M]);return Object(i.useEffect)((function(){y(I)}),[y,I]),Object(o.a)("change",(function(t){return g(t.matches)}),m),{value:I,enable:Object(i.useCallback)((function(){return g(!0)}),[g]),disable:Object(i.useCallback)((function(){return g(!1)}),[g]),toggle:Object(i.useCallback)((function(){return g((function(t){return!t}))}),[g])}}}).call(this,n("yLpj"))},h3mB:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM0IiBoZWlnaHQ9IjMxOSIgdmlld0JveD0iMCAwIDMzNCAzMTkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xOTcuNDc0IDE3Ni4xNThMMjM4LjUyNiA4OUwyOTYgMjE0LjA1M0gyNjUuNjg0QzIzOC4zNDcgMTkyLjI4NyAyMTUuOTU1IDIwNi4zNDMgMjEyIDIxNC4wNTNIMTc2QzIxNS45MTYgMTY2LjA1MyAyMzUuMzY4IDE4MC41NzkgMjUyLjQyMSAxODAuNTc5TDI1NC45NDcgMTgxLjIxMUwyNTYuMjExIDE4MC41NzlMMjM5Ljc4OSAxNDQuNTc5TDIyOS42ODQgMTY3Ljk0N0MyMTYuNTQzIDE2OC41NTYgMjA5LjUzMiAxNzAuNTQ2IDE5Ny40NzQgMTc2LjE1OFoiIGZpbGw9IiMwNTA1MDUiIHN0cm9rZT0iYmxhY2siLz4KPHBhdGggZD0iTTMyNi41IDE1Ny41QzMyNi41IDI0Mi41NDEgMjU3LjMzOCAzMTEuNSAxNzIgMzExLjVDODYuNjYxNSAzMTEuNSAxNy41IDI0Mi41NDEgMTcuNSAxNTcuNUMxNy41IDcyLjQ1ODYgODYuNjYxNSAzLjUgMTcyIDMuNUMyNTcuMzM4IDMuNSAzMjYuNSA3Mi40NTg2IDMyNi41IDE1Ny41WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlV2lkdGg9IjciLz4KPHBhdGggZD0iTTEzOS41IDg5LjVINTFDNTEgODkuNSA1NC41IDk4IDYyIDEwMS41QzY5LjUgMTA1IDczLjUgMTA1IDczLjUgMTA1QzczLjUgMTA1IDEwNC41IDEwNSAxMTYgMTA3QzEyMC42NDcgMTA3LjgwOCAxMjMuNDQyIDEwOC4zMDIgMTI1LjQxIDEwOC45MjhDMTI2LjQwMyAxMDguOTYzIDEyNy4zODQgMTA5LjE0MiAxMjguMzM4IDEwOS40NzdDMTMyLjIxIDExMC44MzggMTM0LjgyNCAxMTQuNDkgMTM1LjgxMSAxMTkuMTQ5QzEzNi4zMTUgMTIwLjkyMyAxMzYuNTQyIDEyMy44MjIgMTM3IDEzMEMxMzcuMTYyIDEzMi4xOSAxMzcuMzM4IDEzNC4yNjEgMTM3LjUwNyAxMzYuMjYxQzEzOC4zODEgMTQ2LjU5MSAxMzkuMDk0IDE1NS4wMTQgMTM3IDE2OEMxMzQuNSAxODMuNSAxMTYuMjU2IDE5MS41NjIgMTExIDE5M0MxMDUuNzQ0IDE5NC40MzggOTguNSAxOTMgOTguNSAxOTNDOTMuMjYzNCAxOTIuMTM1IDg4LjEwMzkgMTkwLjI0OSA4Mi4wNjI3IDE4OC4wNDFDNzkuNDA2MSAxODcuMDcgNzYuNTc5MSAxODYuMDM2IDczLjUgMTg1TDYyIDIwMUM3NS4xNjY3IDIwNi42NjcgMTA0LjQgMjE1LjUgMTE2IDIxMy41QzEzMi4yMDkgMjA3LjM5NSAxNDcuNjc3IDE5My40NzcgMTUwIDE5MC41QzE1MC4zNTkgMTkwLjA0MSAxNTAuNzI3IDE4OS42MDQgMTUxLjEgMTg5LjE2MkMxNTMuMTQ2IDE4Ni43MzcgMTU1LjM0OCAxODQuMTI3IDE1NyAxNzYuNUMxNTguMjg2IDE3MC41NjMgMTU3LjcwNSAxNDQuOTIyIDE1Ny4yNzMgMTI1LjgxMUMxNTcuMDQ4IDExNS44OTMgMTU2Ljg2MyAxMDcuNzMzIDE1NyAxMDVDMTU3LjQgOTcgMTUwLjUgODkuNSAxMzkuNSA4OS41WiIgZmlsbD0iIzE0MTQxNCIgc3Ryb2tlPSJibGFjayIvPgo8L3N2Zz4K"},iAIW:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICAgd2lkdGg9IjI5IiBoZWlnaHQ9IjI5IiB2aWV3Qm94PSIwIDAgMjkgMjkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmYzIzNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItc3VuIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI1Ij48L2NpcmNsZT48bGluZSB4MT0iMTIiIHkxPSIxIiB4Mj0iMTIiIHkyPSIzIj48L2xpbmU+PGxpbmUgeDE9IjEyIiB5MT0iMjEiIHgyPSIxMiIgeTI9IjIzIj48L2xpbmU+PGxpbmUgeDE9IjQuMjIiIHkxPSI0LjIyIiB4Mj0iNS42NCIgeTI9IjUuNjQiPjwvbGluZT48bGluZSB4MT0iMTguMzYiIHkxPSIxOC4zNiIgeDI9IjE5Ljc4IiB5Mj0iMTkuNzgiPjwvbGluZT48bGluZSB4MT0iMSIgeTE9IjEyIiB4Mj0iMyIgeTI9IjEyIj48L2xpbmU+PGxpbmUgeDE9IjIxIiB5MT0iMTIiIHgyPSIyMyIgeTI9IjEyIj48L2xpbmU+PGxpbmUgeDE9IjQuMjIiIHkxPSIxOS43OCIgeDI9IjUuNjQiIHkyPSIxOC4zNiI+PC9saW5lPjxsaW5lIHgxPSIxOC4zNiIgeTE9IjUuNjQiIHgyPSIxOS43OCIgeTI9IjQuMjIiPjwvbGluZT48L3N2Zz4="},n0hJ:function(t,e,n){var o=n("P8UN");o(o.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},puqk:function(t,e,n){"use strict";(function(t){var o=n("q1tI");e.a=function(e,n,i){void 0===i&&(i=t);var r=Object(o.useRef)();Object(o.useEffect)((function(){r.current=n}),[n]),Object(o.useEffect)((function(){if(i&&i.addEventListener){var t=function(t){return r.current(t)};return i.addEventListener(e,t),function(){i.removeEventListener(e,t)}}}),[e,i])}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=fbada0255389077aac6c189f88f1370e72ab8480-9387af19d634acf44984.js.map