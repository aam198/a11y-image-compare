!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/materializecss-styles/lib/colors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/materializecss-styles/lib/colors.js"],e):e((t=t||self).LrnButton={},t.litElement_js)}(this,function(t,e){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function u(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function f(){var t=u(["\n:host {\n    display: block;\n    --lrnsys-button-height: 48px;\n  }\n\n  :host(.center) {\n    text-align: center;\n  }\n\n  a {\n    text-decoration: none;\n    display: block;\n    color: #000000;\n  }\n\n  paper-button {\n    transition: .3s;\n    margin: 0;\n    max-width: 50%;\n    height: inherit;\n    -webkit-justify-content: flex-start;\n    justify-content: flex-start;\n    align-items: center;\n    border-radius: unset;\n  }\n\n  paper-button iron-icon {\n    height: var(--lrnsys-button-height);\n    margin: 0 12px;\n  }\n\n  paper-button div.inner {\n    height: var(--lrnsys-button-height);\n    line-height: var(--lrnsys-button-height);\n    padding: 0 12px;\n  }\n\n  paper-button span.label {\n    height: var(--lrnsys-button-height);\n    line-height: var(--lrnsys-button-height);\n  }\n\n  .no-margin {\n    margin: 0 !important;\n  }\n\n  .no-right-padding {\n    padding-right: 0 !important;\n  }\n\n  .no-left-padding {\n    padding-left: 0 !important;\n  }\n\n  .center {\n    text-align: center;\n    margin: 0 auto;\n  }\n      "]);return f=function(){return t},t}function p(){var t=u(['\n        <span class="label">\n        ',"\n        </span>"]);return p=function(){return t},t}function h(){var t=u(['\n      <iron-icon icon="','" id="icon" class="','"></iron-icon>\n      ']);return h=function(){return t},t}function d(){var t=u(['\n\n<a tabindex="-1" id="lrnsys-button-link" href="','" data-prefetch-hover="','" target="','">\n<paper-button id="button" raised="','" class="'," "," ",'" ?disabled="','">\n    <div class="inner ','">\n      ',"\n      ",'\n      <slot></slot>\n    </div>\n  </paper-button>\n</a>\n<simple-tooltip for="lrnsys-button-link" animation-delay="0">',"</simple-tooltip>"]);return d=function(){return t},t}var b=function(t){function o(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(t=l(this,s(o).call(this))).href="#",t.label="",t.target="",t.disabled=!1,t.focusState=!1,setTimeout(function(){t.addEventListener("mousedown",t.tapEventOn),t.addEventListener("mouseover",t.tapEventOn),t.addEventListener("mouseout",t.tapEventOff),t.addEventListener("focusin",t.tapEventOn),t.addEventListener("focusout",t.tapEventOff),import("@polymer/paper-button/paper-button.js"),import("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),import("@polymer/iron-icons/iron-icons.js"),import("@polymer/iron-icon/iron-icon.js")},0),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(o,e.LitElement),r(o,[{key:"render",value:function(){return e.html(d(),this.showHref,this.prefetch,this.target,this.raised,this.class,this.color,this.textColor,this.disabled,this.innerClass,this.icon?e.html(h(),this.icon,this.iconClass):"",this.label?e.html(p(),this.label):"",this.alt)}}],[{key:"styles",get:function(){return[e.css(f())]}},{key:"properties",get:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}({},c(s(o),"properties",this),{href:{type:String},showHref:{type:String,attribute:"show-href"},raised:{type:Boolean},label:{type:String},target:{type:String},icon:{type:String},hoverClass:{type:String,attribute:"hover-class"},iconClass:{type:String,attribute:"icon-class"},innerClass:{type:String,attribute:"inner-class"},color:{type:String},textColor:{type:String,attribute:"text-color"},prefetch:{type:String},alt:{type:String},disabled:{type:Boolean},focusState:{type:Boolean,attribute:"focus-state"}})}},{key:"tag",get:function(){return"lrn-button"}}]),r(o,[{key:"firstUpdated",value:function(){this.shadowRoot.querySelector("#button").addEventListener("focused-changed",this.focusToggle),this.disabled||(this.showHref=this.href)}},{key:"tapEventOn",value:function(t){var e=this;"undefined"===n(this.hoverClass)||this.disabled||this.hoverClass.split(" ").forEach(function(t,n){""!=t&&(e.shadowRoot.querySelector("#button").classList.add(t),-1!=t.indexOf("-")&&e.shadowRoot.querySelector("#icon").classList.add(t))})}},{key:"tapEventOff",value:function(t){var e=this;"undefined"===n(this.hoverClass)||this.disabled||this.hoverClass.split(" ").forEach(function(t,n){""!=t&&(e.shadowRoot.querySelector("#button").classList.remove(t),-1!=t.indexOf("-")&&e.shadowRoot.querySelector("#icon").classList.remove(t))})}},{key:"focusToggle",value:function(t){var e=this;(this.dispatchEvent(new CustomEvent("focus-changed",{bubbles:!0,composed:!0,detail:{focus:this.focusState}})),"undefined"===n(this.hoverClass)||this.disabled)||this.hoverClass.split(" ").forEach(function(t,n){""!=t&&(e.focusState?(e.shadowRoot.querySelector("#button").classList.add(t),-1!=t.indexOf("-")&&e.shadowRoot.querySelector("#icon").classList.add(t)):(e.shadowRoot.querySelector("#button").classList.remove(t),-1!=t.indexOf("-")&&e.shadowRoot.querySelector("#icon").classList.remove(t)))});this.focusState=!this.focusState}}]),o}();window.customElements.define(b.tag,b),t.LrnButton=b,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=lrn-button.umd.js.map
