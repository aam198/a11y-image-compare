!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/legacy/polymer.dom"),require("@polymer/paper-dialog/paper-dialog.js"),require("@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/neon-animation/animations/scale-up-animation.js"),require("@polymer/neon-animation/animations/scale-down-animation.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/legacy/polymer.dom","@polymer/paper-dialog/paper-dialog.js","@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js","@polymer/paper-button/paper-button.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icon/iron-icon.js","@polymer/neon-animation/animations/scale-up-animation.js","@polymer/neon-animation/animations/scale-down-animation.js"],n):n(e.SimpleModal={},e.polymerElement_js,e.polymer_dom)}(this,function(e,n,o){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,n){return(r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function a(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e,n,o){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,o){var t=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=l(e)););return e}(e,n);if(t){var i=Object.getOwnPropertyDescriptor(t,n);return i.get?i.get.call(o):i.value}})(e,n,o||e)}function p(){var e,n,o=(e=['\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n#close {\n  float: right;\n  top: 0;\n  font-size: 12px;\n  text-transform: none;\n  right: 0;\n  position: absolute;\n  padding: 4px;\n  margin: 0;\n  color: var(--simple-modal-color, black);\n  background-color: transparent;\n  min-width: unset;\n}\n\n#close iron-icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  margin-right: 2px;\n}</style>\n<paper-dialog id="dialog" entry-animation="scale-up-animation"\nexit-animation="fade-out-animation" opened="{{opened}}" with-backdrop always-on-top>\n  <h2 hidden$="[[!title]]">[[title]]</h2>\n  <slot name="header"></slot>\n  <paper-dialog-scrollable>\n    <slot name="content"></slot>\n  </paper-dialog-scrollable>\n  <div class="buttons">\n    <slot name="buttons"></slot>\n  </div>\n  <paper-button id="close" on-tap="close" hidden$="[[!opened]]"><iron-icon icon="[[closeIcon]]"></iron-icon> [[closeLabel]]</paper-button>\n</paper-dialog>'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return p=function(){return o},o}var c=function(e){function c(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),a(this,l(c).apply(this,arguments))}var d,u,m;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}(c,n.PolymerElement),d=c,m=[{key:"template",get:function(){return n.html(p())}},{key:"properties",get:function(){return{title:{name:"title",type:String,value:""},opened:{name:"opened",type:Boolean,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},closeLabel:{name:"closeLabel",type:String,value:"Close"},closeIcon:{name:"closeIcon",type:String,value:"cancel"},invokedBy:{name:"invokedBy",type:Object}}}},{key:"tag",get:function(){return"simple-modal"}}],(u=[{key:"connectedCallback",value:function(){s(l(c.prototype),"connectedCallback",this).call(this),window.addEventListener("simple-modal-show",this.showEvent.bind(this))}},{key:"showEvent",value:function(e){var n=this;if(this.opened){for(;null!==o.dom(this).firstChild;)o.dom(this).removeChild(o.dom(this).firstChild);setTimeout(function(){n.show(e.detail.title,e.detail.elements,e.detail.invokedBy)},100)}else this.show(e.detail.title,e.detail.elements,e.detail.invokedBy)}},{key:"show",value:function(e,n,t){var i=this;this.set("invokedBy",t),this.title=e;var l=["header","content","buttons"];for(var r in l)if(n[l[r]]){var a=n[l[r]].cloneNode(!0);a.setAttribute("slot",l[r]),o.dom(this).appendChild(a)}setTimeout(function(){i.opened=!0},100)}},{key:"animationEnded",value:function(e){var n=this;this.opened||this.invokedBy&&setTimeout(function(){for(n.invokedBy.focus(),n.title="";null!==o.dom(n).firstChild;)o.dom(n).removeChild(o.dom(n).firstChild)},100)}},{key:"close",value:function(){this.$.dialog.close()}},{key:"_openedChanged",value:function(e,n){"undefined"===t(e)||e||this.animationEnded()}},{key:"disconnectedCallback",value:function(){s(l(c.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("simple-modal-show",this.showEvent.bind(this))}}])&&i(d.prototype,u),m&&i(d,m),c}();window.customElements.define(c.tag,c),window.simpleModal=window.simpleModal||{},window.simpleModal.requestAvailability=function(){return window.simpleModal.instance||(window.simpleModal.instance=document.createElement("simple-modal"),document.body.appendChild(window.simpleModal.instance)),window.simpleModal.instance},e.SimpleModal=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-modal.umd.js.map