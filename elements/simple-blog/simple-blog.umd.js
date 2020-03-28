!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js"),require("mobx/lib/mobx.module.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/simple-blog/lib/simple-blog-post.js"),require("@polymer/iron-pages/iron-pages.js"),require("@lrnwebcomponents/anchor-behaviors/anchor-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js","@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js","mobx/lib/mobx.module.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/simple-blog/lib/simple-blog-post.js","@polymer/iron-pages/iron-pages.js","@lrnwebcomponents/anchor-behaviors/anchor-behaviors.js"],t):t((e=e||self).SimpleBlog={},e.litElement_js,e.HAXCMSLitElementTheme_js,e.haxcmsSiteStore_js,e.mobx_module_js,e.simpleColors_js)}(this,function(e,t,n,o,i,r){"use strict";function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(){var e=b(['\n        html,\n        body {\n          background-color: #fafafa;\n        }\n        :host {\n          display: block;\n          font-family: "Roboto", "Noto", sans-serif;\n          -webkit-font-smoothing: antialiased;\n          font-size: 14px;\n          background-color: #fafafa;\n          font-family: "Open Sans", "MundoSans", helvetica neue, Arial,\n            Helvetica, sans-serif;\n          margin: 0;\n          padding: 0;\n          text-rendering: optimizeLegibility;\n          -webkit-font-smoothing: antialiased;\n          -moz-font-feature-settings: "liga=1, dlig=1";\n          -ms-font-feature-settings: "liga", "dlig";\n          -webkit-font-feature-settings: "liga", "dlig";\n          -o-font-feature-settings: "liga", "dlig";\n          font-feature-settings: "liga", "dlig";\n        }\n        #backbutton {\n          position: fixed;\n          top: 0px;\n          left: 0px;\n          padding: 2px;\n          width: 40px;\n          height: 40px;\n          margin: 8px;\n          z-index: 1000;\n          color: black;\n          background-color: rgba(250, 250, 250, 0.5);\n          opacity: 0.5;\n          border-radius: 50%;\n          transition: all 0.6s linear;\n        }\n        #backbutton:focus,\n        #backbutton:hover {\n          opacity: 1;\n          color: white;\n          background-color: var(--haxcms-color, black);\n        }\n        iron-pages,\n        iron-pages section {\n          width: 100vw;\n          height: 100vh;\n        }\n        simple-blog-post {\n          transition: all 0.6s ease-in-out;\n          visibility: hidden;\n        }\n        :host([selected-page="0"]) simple-blog-post {\n          opacity: 0;\n          visibility: hidden;\n        }\n        :host([selected-page="1"]) simple-blog-post {\n          visibility: visible;\n          opacity: 1;\n        }\n        a,\n        a:active,\n        a:hover,\n        a:focus {\n          color: inherit;\n        }\n      ']);return d=function(){return e},e}function g(){var e=b(['\n      <iron-pages .selected="','">\n        <section>\n          <simple-blog-header></simple-blog-header>\n          <simple-blog-listing></simple-blog-listing>\n        </section>\n        <section>\n          <paper-icon-button\n            id="backbutton"\n            icon="icons:arrow-back"\n            @click="','"\n          ></paper-icon-button>\n          <simple-tooltip\n            for="backbutton"\n            position="right"\n            offset="14"\n            animation-delay="0"\n            >Back to listing\n          </simple-tooltip>\n          <simple-blog-post ?edit-mode="','"\n            ><slot></slot\n          ></simple-blog-post>\n          <simple-blog-footer id="footer"></simple-blog-footer>\n        </section>\n      </iron-pages>\n    ']);return g=function(){return e},e}var h=function(e){function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(e=u(this,c(s).call(this))).__disposer=[],e.selectedPage=0,setTimeout(function(){import("@lrnwebcomponents/simple-blog/lib/simple-blog-header.js"),import("@polymer/paper-icon-button/paper-icon-button.js"),import("@lrnwebcomponents/simple-blog/lib/simple-blog-footer.js"),import("@lrnwebcomponents/simple-blog/lib/simple-blog-listing.js")},0),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,r.SimpleColorsSuper(n.HAXCMSLitElementTheme)),l(s,[{key:"render",value:function(){return t.html(g(),this.selectedPage,this._goBack,this.editMode)}}],[{key:"styles",get:function(){return[].concat(m(f(c(s),"styles",this)),[t.css(d())])}},{key:"tag",get:function(){return"simple-blog"}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}({},f(c(s),"properties",this),{selectedPage:{type:Number,reflect:!0,attribute:"selected-page"}})}}]),l(s,[{key:"firstUpdated",value:function(e){var t=this;f(c(s.prototype),"firstUpdated",this)&&f(c(s.prototype),"firstUpdated",this).call(this,e),setTimeout(function(){t.contentContainer=t.shadowRoot.querySelector("simple-blog-post").shadowRoot.querySelector("#contentcontainer")},0)}},{key:"connectedCallback",value:function(){var e=this;f(c(s.prototype),"connectedCallback",this).call(this),i.autorun(function(t){e.activeId=i.toJS(o.store.activeId),e.__disposer.push(t)}),i.autorun(function(t){var n=i.toJS(o.store.location);e._locationChanged(n),e.__disposer.push(t)})}},{key:"disconnectedCallback",value:function(){for(var e in this.__disposer)this.__disposer[e].dispose();f(c(s.prototype),"disconnectedCallback",this).call(this)}},{key:"_locationChanged",value:function(e){if(e&&void 0!==e.route){var t=e.route.name;"home"===t||"404"===t?this.selectedPage=0:(window.scrollTo({top:0,left:0}),this.selectedPage=1,setTimeout(function(){window.AnchorBehaviors.getTarget(o.store.themeElement)},1e3)),setTimeout(function(){var e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)},50)}}},{key:"_goBack",value:function(e){var t=this,n=o.store.activeId;window.history.pushState(null,null,o.store.location.baseUrl),window.dispatchEvent(new PopStateEvent("popstate")),n?setTimeout(function(){var e=t.shadowRoot.querySelector("simple-blog-listing").shadowRoot.querySelector('simple-blog-overview[item-id="'+n+'"]');e&&(e.scrollIntoView(!0),e.focus())},100):window.scrollTo({top:0,left:0});var i=new CustomEvent("json-outline-schema-active-item-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:{}});this.dispatchEvent(i),this.selectedPage=0}}]),s}();window.customElements.define(h.tag,h),e.SimpleBlog=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-blog.umd.js.map
