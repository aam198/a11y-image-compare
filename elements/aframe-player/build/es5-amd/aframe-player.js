define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.AframePlayer = void 0;
  function _templateObject_42892430d6ec11e8bb95e35a8413cd3c() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_42892430d6ec11e8bb95e35a8413cd3c = function() {
      return data;
    };
    return data;
  }
  var AframePlayer = (function(_PolymerElement) {
    babelHelpers.inherits(AframePlayer, _PolymerElement);
    function AframePlayer() {
      babelHelpers.classCallCheck(this, AframePlayer);
      return babelHelpers.possibleConstructorReturn(
        this,
        (AframePlayer.__proto__ || Object.getPrototypeOf(AframePlayer)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      AframePlayer,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                AframePlayer.prototype.__proto__ ||
                  Object.getPrototypeOf(AframePlayer.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              AframePlayer.haxProperties,
              AframePlayer.tag,
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
              _templateObject_42892430d6ec11e8bb95e35a8413cd3c()
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
                title: "Aframe player",
                description: "Automated conversion of aframe-player/",
                icon: "icons:android",
                color: "green",
                groups: ["Player"],
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
            return "aframe-player";
          }
        }
      ]
    );
    return AframePlayer;
  })(_polymerElement.PolymerElement);
  _exports.AframePlayer = AframePlayer;
  window.customElements.define(AframePlayer.tag, AframePlayer);
});
