!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],t):t((e=e||self).AframePlayer={},e.litElement_js,e.schemaBehaviors_js)}(this,function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){var e=p(["\n        :host {\n          display: block;\n          position: relative;\n        }\n        .a-hidden {\n          display: hidden;\n        }\n      "]);return f=function(){return e},e}function d(){var e=p(['\n      <a-scene\n        id="scene"\n        class="embedded"\n        embedded\n        ?arjs="','"\n        style="height:',";width:",';"\n      >\n        <a-sky color="','"></a-sky>\n        <a-marker-camera preset="hiro"></a-marker-camera>\n      </a-scene>\n    ']);return d=function(){return e},e}var y=function(e){function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=s(this,a(o).call(this))).course="",e.height="480px",e.width="640px",e.skyColor="#DCDCDC",e.ar=!1,e.x="0",e.y="0",e.z="0",e.position={},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(o,n.SchemaBehaviors(t.LitElement)),r(o,[{key:"render",value:function(){return t.html(d(),this.ar,this.height,this.width,this.skyColor)}}],[{key:"styles",get:function(){return[t.css(f())]}},{key:"tag",get:function(){return"aframe-player"}}]),r(o,[{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){["x","y","z","width","height"].includes(n)&&(t.position=t._computePosition(t.x,t.y,t.z,t.width,t.height)),"position"==n&&t._positionChanged(t[n])})}},{key:"createRenderRoot",value:function(){return this}},{key:"disconnectedCallback",value:function(){window.removeEventListener("es-bridge-aframePlayer-loaded",this._aframeLoaded.bind(this)),u(a(o.prototype),"disconnectedCallback",this).call(this)}},{key:"connectedCallback",value:function(){u(a(o.prototype),"connectedCallback",this).call(this);"object"===("undefined"==typeof TWEEN?"undefined":i(TWEEN))&&this._aframeLoaded.bind(this),window.addEventListener("es-bridge-aframePlayer-loaded",this._aframeLoaded.bind(this)),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("aframePlayer","https://aframe.io/releases/0.9.2/aframe.min.js")}},{key:"_aframeLoaded",value:function(e){this.querySelector("#scene").removeFullScreenStyles(),this.__entity=document.createElement("a-entity"),this.__entity.setAttribute("gltf-model","url("+this.source+")"),this._positionChanged(this.position),this.querySelector("#scene").appendChild(this.__entity)}},{key:"_computePosition",value:function(e,t,n,i,o){return{x:e,y:t,z:n}}},{key:"_positionChanged",value:function(e){void 0!==this.__entity&&this.__entity.setAttribute("position",e)}}],[{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){c(e,t,n[t])})}return e}({},u(a(o),"properties",this),{source:{type:String},height:{type:String},width:{type:String},skyColor:{type:String,attribute:"sky-color"},ar:{type:Boolean},x:{type:String},y:{type:String},z:{type:String},position:{type:Object}})}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"3D player",description:"A 3D file / augmented reality player.",icon:"av:play-circle-filled",color:"amber",groups:["3D","Augmented reality"],handles:[{type:"3d",source:"source"}],meta:{author:"ELMS:LN"}},settings:{quick:[{property:"height",title:"height",description:"height of the object",inputMethod:"textfield",type:"bar",icon:"image:photo-size-select-small",required:!0},{property:"width",title:"Width",description:"Width of the object",inputMethod:"textfield",type:"bar",icon:"image:straighten",required:!0}],configure:[{property:"source",title:"Source",description:"The URL for this AR file.",inputMethod:"textfield",type:"bar",icon:"link",required:!0},{property:"x",title:"X",description:"X position of the element in AR.",inputMethod:"textfield",type:"bar",icon:"communication:location-on",required:!0},{property:"y",title:"Y",description:"Y position of the element in AR.",inputMethod:"textfield",type:"bar",icon:"communication:location-on",required:!0},{property:"z",title:"Z",description:"Z position of the element in AR.",inputMethod:"textfield",type:"bar",icon:"communication:location-on",required:!0},{property:"skyColor",title:"Sky color",description:"Select the color of the sky in the scene.",inputMethod:"colorpicker",type:"bar",icon:"editor:format-color-fill"}],advanced:[]}}}}]),o}();window.customElements.define(y.tag,y),e.AframePlayer=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=aframe-player.umd.js.map
