define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/neon-animation/neon-animation-behavior.js"
], function(_polymerLegacy, _neonAnimationBehavior) {
  "use strict";
  (0, _polymerLegacy.Polymer)({
    is: "datepicker-slide-from-left-animation",
    behaviors: [_neonAnimationBehavior.NeonAnimationBehavior],
    configure: function configure(config) {
      var node = config.node;
      if (config.transformOrigin) {
        this.setPrefixedProperty(
          node,
          "transformOrigin",
          config.transformOrigin
        );
      } else {
        this.setPrefixedProperty(node, "transformOrigin", "0 50%");
      }
      this._effect = new KeyframeEffect(
        node,
        [
          { offset: 0, transform: "translateX(-100%)", opacity: 0 },
          { offset: 0.5, transform: "translateX(-40%)", opacity: 0 },
          { offset: 0.8, transform: "translateX(-20%)", opacity: 0.6 },
          { offset: 1, transform: "none", opacity: 1 }
        ],
        this.timingFromConfig(config)
      );
      return this._effect;
    }
  });
  (0, _polymerLegacy.Polymer)({
    is: "datepicker-slide-from-right-animation",
    behaviors: [_neonAnimationBehavior.NeonAnimationBehavior],
    configure: function configure(config) {
      var node = config.node;
      if (config.transformOrigin) {
        this.setPrefixedProperty(
          node,
          "transformOrigin",
          config.transformOrigin
        );
      } else {
        this.setPrefixedProperty(node, "transformOrigin", "0 50%");
      }
      this._effect = new KeyframeEffect(
        node,
        [
          { offset: 0, transform: "translateX(100%)", opacity: 0 },
          { offset: 0.5, transform: "translateX(40%)", opacity: 0 },
          { offset: 0.8, transform: "translateX(20%)", opacity: 0.6 },
          { offset: 1, transform: "none", opacity: 1 }
        ],
        this.timingFromConfig(config)
      );
      return this._effect;
    }
  });
});