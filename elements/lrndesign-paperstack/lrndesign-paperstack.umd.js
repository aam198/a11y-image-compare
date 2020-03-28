!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js"),require("@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js","@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js"],n):n((e=e||self).LrndesignPaperstack={},e.polymerElement_js,e.simpleColorsPolymer_js,e.a11yBehaviors_js)}(this,function(e,n,t,r){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,n){return(c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e,n,t){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=a(e)););return e}(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(t):o.value}})(e,n,t||e)}function p(){var e,n,t=(e=['\n      <style include="simple-colors-shared-styles-polymer">\n        :host {\n          display: block;\n          font-size: 14px;\n          --lrndesign-paperstack-bg: var(--simple-colors-default-theme-grey-1);\n          --lrndesign-paperstack-faded-bg: var(\n            --simple-colors-default-theme-grey-2\n          );\n          --lrndesign-paperstack-border: var(\n            --simple-colors-default-theme-grey-4\n          );\n          --lrndesign-paperstack-shadow: var(\n            --simple-colors-default-theme-grey-12\n          );\n          --lrndesign-paperstack-accent: var(\n            --simple-colors-default-theme-accent-8\n          );\n          --lrndesign-paperstack-text: var(\n            --simple-colors-default-theme-grey-12\n          );\n          --lrndesign-paperstack-heading-font: cursive;\n        }\n        :host([dark]) {\n          --lrndesign-paperstack-bg: var(\n            --simple-colors-default-theme-accent-4\n          );\n          --lrndesign-paperstack-faded-bg: var(\n            --simple-colors-default-theme-accent-3\n          );\n          --lrndesign-paperstack-border: var(\n            --simple-colors-default-theme-accent-1\n          );\n          --lrndesign-paperstack-shadow: var(\n            --simple-colors-default-theme-grey-1\n          );\n          --lrndesign-paperstack-accent: var(\n            --simple-colors-default-theme-grey-12\n          );\n          --lrndesign-paperstack-text: var(\n            --simple-colors-default-theme-grey-12\n          );\n        }\n        .stack {\n          width: 100%;\n          position: relative;\n          display: flex;\n          flex-direction: column;\n          align-items: stretch;\n        }\n        .paper {\n          min-height: 160px;\n          width: 80%;\n          padding: 12px 24px;\n          position: absolute;\n          flex: 1 1 auto;\n          left: 0;\n          top: 0;\n          box-shadow: 0 0 1px var(--lrndesign-paperstack-shadow);\n          border: 1px solid var(--lrndesign-paperstack-border);\n        }\n        .paper:first-of-type {\n          left: -0.32px;\n          top: 0.32px;\n          transform: rotate(-2.5deg);\n          background-color: var(--lrndesign-paperstack-faded-bg);\n        }\n        .paper:nth-of-type(2) {\n          right: -0.32px;\n          top: 1.6px;\n          transform: rotate(1.4deg);\n          background-color: var(--lrndesign-paperstack-faded-bg);\n        }\n        .front {\n          flex: 0 0 100%;\n          position: relative;\n          margin-bottom: 48px;\n          background-color: var(--lrndesign-paperstack-bg);\n          color: var(--lrndesign-paperstack-text);\n        }\n\n        iron-icon {\n          width: 40px;\n          height: 40px;\n          margin: 4px;\n          color: var(--lrndesign-paperstack-bg);\n        }\n        .heading {\n          display: flex;\n          align-items: center;\n        }\n        .icon-container {\n          width: 48px;\n          height: 48px;\n          border-radius: 50%;\n          background-color: var(--lrndesign-paperstack-accent);\n          margin-right: 8px;\n          display: flex;\n          align-items: center;\n        }\n        .title {\n          font-size: 16px;\n          color: var(--lrndesign-paperstack-accent);\n          font-family: var(--lrndesign-paperstack-heading-font);\n        }\n      </style>\n      <div class="stack">\n        <div class="paper"></div>\n        <div class="paper"></div>\n        <div class="front paper">\n          <div class="heading">\n            <div class="icon-container circle">\n              <iron-icon icon="[[icon]]"></iron-icon>\n            </div>\n            <span class="title">[[title]]</span>\n          </div>\n          <p><slot></slot></p>\n        </div>\n      </div>\n    '],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return p=function(){return t},t}var d=function(e){function d(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,d),e=l(this,a(d).call(this)),import("@polymer/iron-icon/iron-icon.js"),import("@lrnwebcomponents/lrn-icons/lrn-icons.js"),e}var u,f,g;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&c(e,n)}(d,r.A11yBehaviors(t.SimpleColorsPolymer)),u=d,g=[{key:"template",get:function(){return n.html(p())}},{key:"tag",get:function(){return"lrndesign-paperstack"}},{key:"properties",get:function(){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){i(e,n,t[n])})}return e}({},s(a(d),"properties",this),{title:{type:String,value:"Title"},icon:{type:String,value:"lrn:assignment"}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Paper stack",description:"A stack of papers",icon:"icons:content-copy",color:"grey",groups:["Video","Media"],handles:[],meta:{author:"ELMS:LN"}},settings:{quick:[{property:"title",title:"Title",description:"Title of the cards",inputMethod:"textfield",icon:"editor:title"},{property:"accentColor",title:"Accent Color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"}],configure:[{property:"title",title:"Title",description:"Title of the cards",inputMethod:"boolean"},{property:"accentColor",title:"Accent Color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{property:"icon",title:"Icon",description:"Icon for the card",inputMethod:"iconpicker"},{slot:"",title:"Contents",description:"card contents",inputMethod:"code-editor"}],advanced:[]}}}}],(f=null)&&o(u.prototype,f),g&&o(u,g),d}();window.customElements.define(d.tag,d),e.LrndesignPaperstack=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-paperstack.umd.js.map
