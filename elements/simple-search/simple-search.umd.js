!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/paper-input/paper-input.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@polymer/iron-icons/iron-icons.js","@polymer/paper-input/paper-input.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js"],t):t((e=e||self).SimpleSearch={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){var e=h(["\n      <slot></slot>\n    "]);return f=function(){return e},e}var b=function(e){function r(){return n(this,r),u(this,l(r).apply(this,arguments))}return s(r,t.LitElement),o(r,[{key:"enableSearch",value:function(e){var t=this;e.addEventListener("simple-search",function(n){return t._searchContent(e)}),e.addEventListener("goto-result",function(e){return t.focus(e.detail)})}},{key:"_searchContent",value:function(e){var t=this.innerHTML;this.innerHTML=e.findMatches(t)}},{key:"focus",value:function(e){var t=this.querySelector('[match-number="'+e+'"]');null!=t&&t.focus()}},{key:"render",value:function(){return t.html(f())}}],[{key:"tag",get:function(){return"simple-search-content"}}]),r}();function d(){var e=h(["\n        :host {\n          margin-right: 4px;\n          font-family: var(--simple-search-match-font-family, unset);\n          color: var(--simple-search-match-text-color, #000);\n          background-color: var(--simple-search-match-bg-color, #f0f0f0);\n          border: var(--simple-search-match-border, 1px solid);\n          border-color: var(--simple-search-match-border-color, #ddd);\n          padding: var(--simple-search-match-padding, 0.16px 0px 0.16px 4px);\n          border-radius: var(--simple-search-match-border-radius, 0.16px);\n          font-weight: var(--simple-search-match-font-weight, bold);\n        }\n      "]);return d=function(){return e},e}function m(){var e=h(["\n      <slot></slot>\n    "]);return m=function(){return e},e}customElements.define(b.tag,b);var v=function(e){function r(){return n(this,r),u(this,l(r).apply(this,arguments))}return s(r,t.LitElement),o(r,[{key:"render",value:function(){return t.html(m())}}],[{key:"tag",get:function(){return"simple-search-match"}},{key:"properties",get:function(){return a({},p(l(r),"properties",this),{matchNumber:{type:Number,reflect:!0,attribute:"match-number"}})}},{key:"styles",get:function(){return[t.css(d())]}}]),r}();function y(){var e=h(["\n:host {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 100%;\n}\n#input {\n  flex-grow: 2;\n  margin-right: 4px;\n  padding: var(--simple-search-padding, unset);\n  margin: var(--simple-search-margin, unset);\n  --paper-input-container-input-color: var(\n    --simple-search-input-text-color,\n    #000\n  );\n  --paper-input-container-shared-input-style_-_color: var(\n    --simple-search-input-text-color,\n    #000\n  );\n  --paper-input-container-focus-color: var(\n    --simple-search-input-line-color,\n    #000\n  );\n  --paper-input-container-color: var(\n    --simple-search-input-placeholder-color,\n    #222\n  );\n  color: var(--simple-search-input-placeholder-color, #222);\n}\n#xofy {\n  margin: 8px;\n}\nbutton {\n  margin: 8px 0 8px;\n  color: var(--simple-search-button-color, #111);\n  background-color: var(--simple-search-button-bg-color, #eee);\n  border-color: var(--simple-search-button-border-color, #ccc);\n}\nbutton:not([disabled]):focus,\nbutton:not([disabled]):hover {\n  cursor: pointer;\n  color: var(--simple-search-button-hover-color, #000);\n  background-color: var(--simple-search-button-hover-bg-color, #fff);\n  border-color: var(--simple-search-button-hover-border-color, #ddd);\n}\nbutton[disabled] {\n  cursor: not-allowed;\n  color: var(--simple-search-button-disabled-color, #999);\n  background-color: var(--simple-search-button-disabled-bg-color, #eee);\n  border-color: var(--simple-search-button-disabled-border-color, #ccc);\n}\nbutton:not([controls]) {\n  display: none;\n}\n*[shrink-hide] {\n  display: none;\n}\n      "]);return y=function(){return e},e}function g(){var e=h(['\n\n<paper-input\n    id="input"\n    label="','"\n    ?always-float-label="','"\n    ?no-label-float="','"\n    @change="','"\n  >\n    <iron-icon icon="','" slot="prefix"></iron-icon>\n  </paper-input>\n  <div id="xofy" ?shrink-hide="','">\n    ','\n  </div>\n  <div  ?shrink-hide="','">\n    <button\n      id="prev"\n      aria-label="','"\n      aria-role="button"\n      controls="','"\n      tabindex="0"\n      ?disabled="','"\n      @click="','"\n    >\n      <iron-icon icon="','"></iron-icon>\n    </button>\n    <simple-tooltip for="prev">','</simple-tooltip>\n    <button\n      id="next"\n      aria-label="','"\n      aria-role="button"\n      controls="','"\n      tabindex="0"\n      ?disabled="','"\n      @click="','"\n    >\n      <iron-icon icon="','"></iron-icon>\n    </button>\n    <simple-tooltip for="next">',"</simple-tooltip>\n  </div>"]);return g=function(){return e},e}customElements.define(v.tag,v);var _=function(e){function r(){var e;return n(this,r),(e=u(this,l(r).call(this))).alwaysFloatLabel=!1,e.caseSensitive=null,e.controls=null,e.nextButtonIcon="arrow-forward",e.nextButtonLabel="next result",e.noLabelFloat=!1,e.prevButtonIcon="arrow-back",e.prevButtonLabel="previous result",e.resultCount=0,e.resultPointer=0,e.searchInputIcon="search",e.searchInputLabel="search",e.searchTerms=[],e.target=null,e.selector=null,e.__hideNext=!0,e.__hidePrev=!0,e}return s(r,t.LitElement),o(r,[{key:"render",value:function(){return t.html(g(),this.searchInputLabel,this.alwaysFloatLabel,this.noLabelFloat,this._handleChange,this.searchInputIcon,this._hasNoSearch(this.searchTerms),this._getResultsSpan(this.resultPointer,this.resultCount),this._hasNoSearch(this.searchTerms),this.prevButtonLabel,this.controls,this.__hidePrev,this._navigateResults,this.prevButtonIcon,this.prevButtonLabel,this.nextButtonLabel,this.controls,this.__hideNext,this._navigateResults,this.nextButtonIcon,this.nextButtonLabel)}}],[{key:"styles",get:function(){return[t.css(y())]}},{key:"properties",get:function(){return a({},p(l(r),"properties",this),{alwaysFloatLabel:{attribute:"always-float-label",type:Boolean},caseSensitive:{attribute:"case-sensitive",type:Boolean},controls:{attribute:"controls",type:String},nextButtonIcon:{attribute:"next-button-icon",type:String},nextButtonLabel:{attribute:"next-button-label",type:String},noLabelFloat:{attribute:"no-label-float",type:Boolean},prevButtonIcon:{attribute:"prev-button-icon",type:String},prevButtonLabel:{attribute:"prev-button-label",type:String},resultCount:{attribute:"result-count",type:Number},resultPointer:{attribute:"result-pointer",type:Number},selector:{attribute:"selector",type:String},searchInputIcon:{attribute:"search-input-icon",type:String},searchInputLabel:{attribute:"search-input-label",type:String},searchTerms:{attribute:"search-terms",type:Array},target:{type:Object},__hideNext:{type:Boolean},__hidePrev:{type:Boolean}})}},{key:"tag",get:function(){return"simple-search"}}]),o(r,[{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"resultPointer"!==n&&"resultCount"!==n||t._getNavDisabled(t.resultPointer,t.resultCount)})}},{key:"_handleChange",value:function(e){var t=this,n=this.selector?" ".concat(this.selector):"",r=this.controls?this.getRootNode().querySelectorAll("#".concat(this.controls).concat(n)):null;console.log(this.controls,r,this.getRootNode()),this._getSearchText(),this.resultCount=0,this.resultPointer=0,r.forEach(function(e){t._searchSelection(e)}),this.dispatchEvent(new CustomEvent("simple-search",{detail:{search:this,content:e}}))}},{key:"_searchSelection",value:function(e){e&&e.innerHTML&&(e.innerHTML=this.findMatches(e.innerHTML))}},{key:"_hasNoSearch",value:function(e){return e.length<1}},{key:"_getResultsSpan",value:function(e,t){return t>0&&e>0?e+"/"+t:t>0?t:"0"}},{key:"_navigateResults",value:function(e){var t="next"===e.currentTarget.id?1:-1;this.resultPointer+t>0&&this.resultPointer+t<=this.resultCount&&(this.resultPointer+=t,this.dispatchEvent(new CustomEvent("goto-result",{detail:this.resultPointer})))}},{key:"_getNavDisabled",value:function(e,t){this.__hidePrev=this._isNavButtonDisabled(e,t,-1),this.__hideNext=this._isNavButtonDisabled(e,t)}},{key:"_isNavButtonDisabled",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return!t||0===t||e+n<=0||e+n>t}},{key:"_getSearchText",value:function(){var e=this.shadowRoot.querySelector("#input").value,t=new Array;if(null!=e){t=e.split(/[\"\']/gm);for(var n=0;n<t.length;n++)t[n]=t[n].trim(),""===t[n]&&t.splice(n,1)}this.searchTerms=t.slice(0)}},{key:"findMatches",value:function(e){var t=this;return this.resultPointer=0,e=e.replace(/<\/?simple-search-match[^>]*>/g,""),this.searchTerms.forEach(function(n){var r=t.caseSensitive?"gm":"gim",o=new RegExp("\\b("+n+")\\b",r);e=e.replace(o,function(e){return t.resultCount++,'<simple-search-match tabindex="0" match-number="'.concat(t.resultCount,'">').concat(e,"</simple-search-match>")})}),e}}]),r}();customElements.define(_.tag,_),e.SimpleSearch=_,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-search.umd.js.map
