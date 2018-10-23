define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnappMediaUpload = void 0;
  function _templateObject_fa9069e0d6f511e8a59cf19743342c96() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_fa9069e0d6f511e8a59cf19743342c96 = function() {
      return data;
    };
    return data;
  }
  var LrnappMediaUpload = (function(_PolymerElement) {
    babelHelpers.inherits(LrnappMediaUpload, _PolymerElement);
    function LrnappMediaUpload() {
      babelHelpers.classCallCheck(this, LrnappMediaUpload);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          LrnappMediaUpload.__proto__ ||
          Object.getPrototypeOf(LrnappMediaUpload)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LrnappMediaUpload,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrnappMediaUpload.prototype.__proto__ ||
                  Object.getPrototypeOf(LrnappMediaUpload.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrnappMediaUpload.haxProperties,
              LrnappMediaUpload.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_fa9069e0d6f511e8a59cf19743342c96()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Lrnapp media-upload",
                description: "Automated conversion of lrnapp-media-upload/",
                icon: "icons:android",
                color: "green",
                groups: ["Media"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrnapp-media-upload";
          }
        }
      ]
    );
    return LrnappMediaUpload;
  })(_polymerElement.PolymerElement);
  _exports.LrnappMediaUpload = LrnappMediaUpload;
  window.customElements.define(LrnappMediaUpload.tag, LrnappMediaUpload);
});
