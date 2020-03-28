!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).HtmlBlock={})}(this,function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e,n){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)})(t)}function s(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t,e,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}var f=function(t){function n(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(t=s(this,i(n).call(this))).tag=n.tag,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(n,l(HTMLElement)),r(n,[{key:"html",get:function(){return"\n<style>\n\n        </style>\n<slot></slot>"}}],[{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Html block",description:"A basic HTML block that provides HAXschema wiring",icon:"icons:warning",color:"red",groups:["Block"],handles:[{type:"html",content:"slot"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{slot:"",title:"HTML",description:"HTML code you want to present in content",inputMethod:"code-editor"}],advanced:[]}}}},{key:"properties",get:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}({},a(i(n),"properties",this))}},{key:"tag",get:function(){return"html-block"}}]),r(n,[{key:"connectedCallback",value:function(){this.allowscript=!1,this.__ignoreChange=!1,this.style.display="block",this.__observer=new MutationObserver(this.render.bind(this)),this.__observer.observe(this,{attributes:!0,characterData:!0,childList:!0,subtree:!0})}},{key:"render",value:function(){this.__ignoreChange?this.__ignoreChange=!1:null!=this.allowscript&&this.allowscript&&"undefined"!==e(this.allowscript)||this.__sanitizeHTML()}},{key:"attributeChangedCallback",value:function(t,n,r){"allowscript"===t&&(null!=r&&r&&"undefined"!==e(r)?this.__rawHTML&&(this.__ignoreChange=!0,this.innerHTML=this.__rawHTML):this.__sanitizeHTML())}},{key:"__sanitizeHTML",value:function(){this.__pen||(this.__pen=document.createElement("div")),this.__pen.innerHTML=this.innerHTML,this.__rawHTML=this.__pen.cloneNode(!0).innerHTML,"function"==typeof this.innerHTML&&(this.innerHTML=this.innerHTML.replace(/<script[\s\S]*?>/gi,"&lt;script&gt;"),this.innerHTML=this.innerHTML.replace(/<\/script>/gi,"&lt;/script&gt;"))}},{key:"allowscript",get:function(){return this.getAttribute("allowscript")},set:function(t){t?this.setAttribute("allowscript","allowscript"):this.removeAttribute("allowscript")}}],[{key:"observedAttributes",get:function(){return["allowscript"]}}]),n}();window.customElements.define(f.tag,f),t.HtmlBlock=f,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=html-block.umd.js.map
