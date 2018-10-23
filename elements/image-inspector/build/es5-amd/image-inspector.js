define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.ImageInspector = void 0;
  function _templateObject_57a54a00d6f211e8a7b5a34c613e312a() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_57a54a00d6f211e8a7b5a34c613e312a = function() {
      return data;
    };
    return data;
  }
  var ImageInspector = (function(_PolymerElement) {
    babelHelpers.inherits(ImageInspector, _PolymerElement);
    function ImageInspector() {
      babelHelpers.classCallCheck(this, ImageInspector);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          ImageInspector.__proto__ || Object.getPrototypeOf(ImageInspector)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      ImageInspector,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                ImageInspector.prototype.__proto__ ||
                  Object.getPrototypeOf(ImageInspector.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              ImageInspector.haxProperties,
              ImageInspector.tag,
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
              _templateObject_57a54a00d6f211e8a7b5a34c613e312a()
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
                title: "Image inspector",
                description: "Automated conversion of image-inspector/",
                icon: "icons:android",
                color: "green",
                groups: ["Inspector"],
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
            return "image-inspector";
          }
        }
      ]
    );
    return ImageInspector;
  })(_polymerElement.PolymerElement);
  _exports.ImageInspector = ImageInspector;
  window.customElements.define(ImageInspector.tag, ImageInspector);
});