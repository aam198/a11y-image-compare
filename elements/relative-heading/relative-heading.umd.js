!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/anchor-behaviors/anchor-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/anchor-behaviors/anchor-behaviors.js"],t):t((e=e||self).RelativeHeading={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){a(e,t,n[t])})}return e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?u(e):t}function h(e,t,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function g(){var e=p(["\n        paper-toast:not(:defined) {\n          display: none;\n        }\n      "]);return g=function(){return e},e}function f(){var e=p(['\n      <paper-toast\n        id="relative-heading-toast"\n        duration="5000"\n        ?hidden="','"\n        ?disabled="','"\n        text="',": ",'"\n      >\n        <paper-icon-button\n          icon="','"\n          label="','"\n          title="','"\n          @click="','"\n        ></paper-icon-button>\n      </paper-toast>\n    ']);return f=function(){return e},e}window.RelativeHeadingStateManager=window.RelativeHeadingStateManager||{},window.RelativeHeadingStateManager.requestAvailability=function(){return window.RelativeHeadingStateManager.instance||(window.RelativeHeadingStateManager.instance=document.createElement("relative-heading-state-manager"),document.body.appendChild(window.RelativeHeadingStateManager.instance)),window.RelativeHeadingStateManager.instance};var v=function(e){function i(){var e;return n(this,i),(e=d(this,l(i).call(this))).closeIcon="close",e.closeLabel="Close",e.copyMessage="Copied to Clipboard",e.headings=[],e.copyHeading={},e.usesCopyLink=!1,window.RelativeHeadingStateManager.instance||(window.RelativeHeadingStateManager.instance=u(e)),e}return s(i,t.LitElement),o(i,null,[{key:"tag",get:function(){return"relative-heading-state-manager"}},{key:"properties",get:function(){return r({},h(l(i),"properties",this),{closeIcon:{type:String},closeLabel:{type:String},copyHeading:{type:Object},copyMessage:{type:String},headings:{type:Object},usesCopyLink:{type:Boolean}})}}]),o(i,[{key:"render",value:function(){return t.html(f(),!this.usesCopyLink,!this.usesCopyLink,this.copyHeading.copyMessage||this.copyMessage,this.copyUrl,this.copyHeading.closeIcon||this.closeIcon,this.copyHeading.closeLabel||this.closeLabel,this.copyHeading.closeLabel||this.closeLabel,this.closeCopyLink)}},{key:"useCopyLink",value:function(){this.usesCopyLink||(this.usesCopyLink=!0,import("@polymer/iron-icons/iron-icons.js"),import("@polymer/paper-icon-button/paper-icon-button.js"),import("@polymer/paper-toast/paper-toast.js"))}},{key:"copyLink",value:function(e){this.copyHeading=e;var t=document.createElement("textarea");t.value=this.copyUrl,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.shadowRoot.querySelector("#relative-heading-toast")&&this.shadowRoot.querySelector("#relative-heading-toast").open&&this.shadowRoot.querySelector("#relative-heading-toast").open()}},{key:"closeCopyLink",value:function(){this.shadowRoot.querySelector("#relative-heading-toast")&&this.shadowRoot.querySelector("#relative-heading-toast").close&&this.shadowRoot.querySelector("#relative-heading-toast").close()}},{key:"addHeading",value:function(e){e&&(this.addSubhead(e),this.setHeading(e.id,e),this.updateLevel(e))}},{key:"removeHeading",value:function(e){var t=this;e&&(e.id&&this.headings[e.id]&&(this.headings[e.id].heading=null,this.headings[e.id].subheads.forEach(function(e){return t.updateLevel(e)})),this.removeSubhead(e.parent,e))}},{key:"updateId",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&(t&&this.setHeading(t,null),this.setHeading(e.id,e))}},{key:"updateParent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&(t&&this.removeSubhead(t,e),this.addSubhead(e))}},{key:"updateDefaultLevel",value:function(e){e&&this.updateLevel(e)}},{key:"addSubhead",value:function(e){e&&(e.parent&&(this.headings[e.parent]||(this.headings[e.parent]={heading:null,subheads:[]}),this.headings[e.parent].subheads.includes(e)||this.headings[e.parent].subheads.push(e)),this.updateLevel(e))}},{key:"removeSubhead",value:function(e,t){e&&this.headings[e]&&this.headings[e].subheads&&(this.headings[e].subheads=this.headings[e].subheads.filter(function(e){return e!=t}))}},{key:"setHeading",value:function(e,t){e&&(this.headings[e]||(this.headings[e]={heading:null,subheads:[]}),this.headings[e].heading=t)}},{key:"updateLevel",value:function(e){var t=this;if(e){var n=e.parent&&this.headings[e.parent].heading?parseInt(this.headings[e.parent].heading.__level):null,i=n?Math.min(6,Math.max(n+1,1)):null,o=i||e.defaultLevel;e._setLevel(o),this.headings[e.id]&&this.headings[e.id].subheads.forEach(function(e){return t.updateLevel(e)})}}},{key:"copyUrl",get:function(){return"".concat(window.location.href.replace(window.location.hash,""),"#").concat(this.copyHeading&&this.copyHeading.id?this.copyHeading.id:"")}}],[{key:"styles",get:function(){return[t.css(g())]}}]),i}();function y(){var e=p(["\n        :host {\n          display: block;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n      "]);return y=function(){return e},e}function b(){var e=p(["\n      <slot></slot>\n    "]);return b=function(){return e},e}window.customElements.define(v.tag,v);var k=function(e){function i(){var e;return n(this,i),(e=d(this,l(i).call(this))).parent=null,e.checkId(),e.__level=e.querySelector("h1,h2,h3,h4,h5,h6")?parseInt(e.querySelector("h1,h2,h3,h4,h5,h6").tagName.replace(/\D/,"")):1,e.defaultLevel=1,e}return s(i,t.LitElement),o(i,[{key:"render",value:function(){return this.template}},{key:"template",get:function(){return t.html(b())}}],[{key:"styles",get:function(){return[t.css(y())]}},{key:"properties",get:function(){return r({},h(l(i),"properties",this),{defaultLevel:{type:Number,attribute:"default-level",reflect:!0},id:{type:String,attribute:"id",reflect:!0},parent:{type:String,attribute:"parent",reflect:!0},__level:{type:Number,attribute:"level",reflect:!0}})}},{key:"tag",get:function(){return"relative-heading-lite"}}]),o(i,[{key:"connectedCallback",value:function(){h(l(i.prototype),"connectedCallback",this).call(this),this.manager.addHeading(this),this.observer.observe(this,{childList:!0})}},{key:"checkId",value:function(){this.id=this.id||"heading-".concat(this._generateUUID())}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"defaultLevel"===n&&((!t.defaultLevel||t.defaultLevel<1||t.defaultLevel>6)&&(t.defaultLevel=Math.min(0,Math.max(t.defaultLevel,6))),t.manager.updateDefaultLevel(t,e)),"id"===n&&(t.id||t.checkId(),t.manager.updateId(t,e)),"parent"===n&&t.manager.updateParent(t,e),"__level"===n&&(t.observer.disconnect(),t.updateContents(),t.observer.observe(t,{childList:!0}))})}},{key:"_setLevel",value:function(e){this.__level!==e&&(this.__level=e)}},{key:"updateContents",value:function(){(!this.querySelector("h".concat(this.__level))||this.children>0)&&(this.innerHTML="<h".concat(this.__level,">").concat(this.children&&this.children[0]?this.children[0].innerHTML:this.textContent,"</h").concat(this.__level,">"))}},{key:"_generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,Math.floor(65536*(1+Math.random())).toString(16).substring(1))}},{key:"disconnectedCallback",value:function(){this.observer.disconnect(),this.manager.removeHeading(this),h(l(i.prototype),"disconnectedCallback",this).call(this)}},{key:"observer",get:function(){var e=this;return new MutationObserver(function(){return e.updateContents()})}},{key:"manager",get:function(){return window.RelativeHeadingStateManager.requestAvailability()}}]),i}();function m(){var e=p(['\n          <paper-icon-button\n            controls="relative-heading-toast"\n            .aria-describedby="','"\n            .icon="','"\n            .title="','"\n            ?hidden="','"\n            ?disabled="','"\n            @click="','"\n          >\n          </paper-icon-button>\n        ']);return m=function(){return e},e}function w(){var e=p([""]);return w=function(){return e},e}function L(){var e=p(["\n:host {\n  display: flex;\n  flex-wrap: var(--relative-heading-wrap,wrap);\n  align-items: var(--relative-heading-align,center);\n  justify-content: flex-start;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n::slotted(*) {\n  flex: 0 0 auto;\n}\n\n:host([link-align-right]){\n  justify-content: space-between;\n}\n\n:host([link-align-right]) ::slotted(*) {\n  flex: 1 1 auto;\n}\n\n:host > paper-icon-button:not(:defined) {\n  opacity: 0;\n}\n\n:host > paper-icon-button {\n  flex: 0 0 auto;\n}\n\npaper-icon-button {\n  color: var(--relative-heading-button-color, #666);\n  background: var(--relative-heading-button-bg);\n  border: var(--relative-heading-button-border);\n  outline: var(--relative-heading-button-outline);\n  margin: var(--relative-heading-button-margin,0 0 0 8px);\n  padding: var(--relative-heading-button-padding, 8px);\n  opacity: var(--relative-heading-button-opacity, 0);\n  transition: var(--relative-heading-button-transition, all 0.5s);\n}\n\n:host([link-align-right]) paper-icon-button,\n:host(:not([link-align-right]):focus) paper-icon-button,\n:host(:not([link-align-right]):focus-within) paper-icon-button,\n:host(:not([link-align-right]):hover) paper-icon-button {\n  opacity: var(--relative-heading-button-active-opacity, 1);\n}\n\npaper-icon-button:focus-within,\npaper-icon-button:focus,\npaper-icon-button:hover {\n  color: var(--relative-heading-button-focus-color, #000);\n  background: var(--relative-heading-button-focus-bg);\n  border: var(--relative-heading-button-focus-border);\n  outline: var(--relative-heading-button-focus-outline);\n  opacity: var(--relative-heading-button-focus-opacity, 1);\n}\n      "]);return L=function(){return e},e}function S(){var e=p(["\n\n","\n",""]);return S=function(){return e},e}window.customElements.define(k.tag,k);var H=function(e){function i(){var e;return n(this,i),(e=d(this,l(i).call(this))).linkAlignRight=!1,e.disableLink=!1,e.linkIcon="link",e.linkLabel="Get link",import("@polymer/iron-icons/iron-icons.js"),import("@polymer/paper-icon-button/paper-icon-button.js"),e}return s(i,k),o(i,[{key:"render",value:function(){return t.html(S(),this.template,this.button)}}],[{key:"styles",get:function(){return[t.css(L())]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Relative heading",description:"outputs the correct heading hierarchy based on parent's heading",icon:"icons:android",color:"green",groups:["Heading"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"nikkimk",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{property:"parent",description:"Parent Heading's Resource ID",inputMethod:"textfield",required:!1},{property:"disableLink",description:"Disables link button feature.",inputMethod:"boolean",required:!1},{property:"linkAlignRight",description:"Aligns copy link button to far right of heading.",inputMethod:"boolean",required:!1}],advanced:[{property:"defaultLevel",description:"Heading level if parent is not found.",inputMethod:"number",required:!1},{property:"copyMessage",description:"Overrides default text for copy link's toast message.",inputMethod:"textfield",required:!1},{property:"linkLabel",description:"Overrides default label copy link button.",inputMethod:"textfield",required:!1},{property:"linkIcon",description:"Overrides default icon copy link button.",inputMethod:"iconpicker",required:!1},{property:"closeLabel",description:"Overrides default label for copy link's toast's close button.",inputMethod:"textfield",required:!1},{property:"closeIcon",description:"Overrides default icon for copy link's toast's close button.",inputMethod:"iconpicker",required:!1}]}}}},{key:"properties",get:function(){return r({},h(l(i),"properties",this),{closeIcon:{type:String},closeLabel:{type:String},copyMessage:{type:String},disableLink:{type:Boolean,attribute:"disable-link"},linkAlignRight:{type:Boolean,attribute:"link-align-right",reflect:!0},linkIcon:{type:String},linkLabel:{type:String}})}},{key:"tag",get:function(){return"relative-heading"}}]),o(i,[{key:"connectedCallback",value:function(){h(l(i.prototype),"connectedCallback",this).call(this),this.disableLink||this.manager.useCopyLink()}},{key:"_handleCopyClick",value:function(){!this.disableLink&&this.manager&&this.manager.copyLink&&this.manager.copyLink(this)}},{key:"anchored",get:function(){return!(!window.AnchorBehaviors||!window.AnchorBehaviors.getTarget)&&window.AnchorBehaviors.getTarget(this)}},{key:"button",get:function(){return console.log(this.disableLink),this.disableLink?t.html(w()):t.html(m(),this.id,this.linkIcon,this.linkLabel,this.disableLink,this.disableLink,this._handleCopyClick)}}]),i}();window.customElements.define(H.tag,H),e.RelativeHeading=H,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=relative-heading.umd.js.map
