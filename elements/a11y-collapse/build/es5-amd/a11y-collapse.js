define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js",
  "./node_modules/@polymer/paper-icon-button/paper-icon-button.js",
  "./lib/a11y-collapse-accordion-button.js",
  "./lib/a11y-collapse-icon-button.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_10c8f2e0db3311e8a3553537f2370c6b() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n        border: var(--a11y-collapse-border, 1px solid);\n        margin: 15px 0;\n        transition: all 0.5s;\n        @apply --a11y-collapse;\n      }\n      :host #content {\n        max-height: 0;\n        overflow: hidden;\n        padding: 0em var(--a11y-collapse-horizontal-padding, 1em);\n        border-top: 0px solid rgba(255,255,255,0);\n        transition: all 0.5s ease-in-out;\n        @apply --a11y-collapse-content;\n      }\n      :host[disabled] {\n        opacity: 0.5;\n        @apply --a11y-collapse-disabled;\n      }\n      :host[disabled]:not([accordion]) #expand,\n      :host[disabled][accordion] #heading {\n        cursor: not-allowed;\n      }\n      :host[expanded] {\n        @apply --a11y-collapse-expanded;\n      }\n      :host[expanded] #content {\n        max-height: unset;\n        overflow: visibility: hidden;;\n        padding: var(--a11y-collapse-vertical-padding, 1em) var(--a11y-collapse-horizontal-padding, 1em);\n        border-top: var(--a11y-collapse-border, 0px solid);\n        @apply --a11y-collapse-content-expanded;\n      }\n      :host:not([expanded]) #content-inner {\n        overflow: hidden;\n      }\n    </style>\n    <template is="dom-if" if="[[!accordion]]">\n      <a11y-collapse-icon-button id="iconbutton" disabled$="[[disabled]]" expanded$="[[_setAriaExpanded(expanded)]]" label$="[[_getExpandCollapse(expanded,label,labelExpanded)]]" icon$="[[_getExpandCollapse(expanded,icon,iconExpanded)]]" rotated$="[[__rotateIcon]]" tooltip$="[[_getExpandCollapse(expanded,tooltip,tooltipExpanded)]]">\n        <slot name="heading"></slot>\n      </a11y-collapse-icon-button>\n    </template>\n    <template is="dom-if" if="[[accordion]]">\n      <a11y-collapse-accordion-button id="accordionbutton" disabled$="[[disabled]]" expanded$="[[_setAriaExpanded(expanded)]]" label$="[[_getExpandCollapse(expanded,label,labelExpanded)]]" icon$="[[_getExpandCollapse(expanded,icon,iconExpanded)]]" rotated$="[[__rotateIcon]]" tooltip$="[[_getExpandCollapse(expanded,tooltip,tooltipExpanded)]]">\n        <slot name="heading"></slot>\n      </a11y-collapse-accordion-button>\n    </template>\n    <div id="content" aria-hidden$="{{!expanded}}" aria-labelledby="heading" aria-live="polite">\n      <div id="content-inner"><slot></slot></div>\n    </div>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n        border: var(--a11y-collapse-border, 1px solid);\n        margin: 15px 0;\n        transition: all 0.5s;\n        @apply --a11y-collapse;\n      }\n      :host #content {\n        max-height: 0;\n        overflow: hidden;\n        padding: 0em var(--a11y-collapse-horizontal-padding, 1em);\n        border-top: 0px solid rgba(255,255,255,0);\n        transition: all 0.5s ease-in-out;\n        @apply --a11y-collapse-content;\n      }\n      :host[disabled] {\n        opacity: 0.5;\n        @apply --a11y-collapse-disabled;\n      }\n      :host[disabled]:not([accordion]) #expand,\n      :host[disabled][accordion] #heading {\n        cursor: not-allowed;\n      }\n      :host[expanded] {\n        @apply --a11y-collapse-expanded;\n      }\n      :host[expanded] #content {\n        max-height: unset;\n        overflow: visibility: hidden;;\n        padding: var(--a11y-collapse-vertical-padding, 1em) var(--a11y-collapse-horizontal-padding, 1em);\n        border-top: var(--a11y-collapse-border, 0px solid);\n        @apply --a11y-collapse-content-expanded;\n      }\n      :host:not([expanded]) #content-inner {\n        overflow: hidden;\n      }\n    </style>\n    <template is="dom-if" if="[[!accordion]]">\n      <a11y-collapse-icon-button id="iconbutton" disabled\\$="[[disabled]]" expanded\\$="[[_setAriaExpanded(expanded)]]" label\\$="[[_getExpandCollapse(expanded,label,labelExpanded)]]" icon\\$="[[_getExpandCollapse(expanded,icon,iconExpanded)]]" rotated\\$="[[__rotateIcon]]" tooltip\\$="[[_getExpandCollapse(expanded,tooltip,tooltipExpanded)]]">\n        <slot name="heading"></slot>\n      </a11y-collapse-icon-button>\n    </template>\n    <template is="dom-if" if="[[accordion]]">\n      <a11y-collapse-accordion-button id="accordionbutton" disabled\\$="[[disabled]]" expanded\\$="[[_setAriaExpanded(expanded)]]" label\\$="[[_getExpandCollapse(expanded,label,labelExpanded)]]" icon\\$="[[_getExpandCollapse(expanded,icon,iconExpanded)]]" rotated\\$="[[__rotateIcon]]" tooltip\\$="[[_getExpandCollapse(expanded,tooltip,tooltipExpanded)]]">\n        <slot name="heading"></slot>\n      </a11y-collapse-accordion-button>\n    </template>\n    <div id="content" aria-hidden\\$="{{!expanded}}" aria-labelledby="heading" aria-live="polite">\n      <div id="content-inner"><slot></slot></div>\n    </div>\n'
      ]
    );
    _templateObject_10c8f2e0db3311e8a3553537f2370c6b = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_10c8f2e0db3311e8a3553537f2370c6b()
    ),
    is: "a11y-collapse",
    behaviors: [HAXBehaviors.PropertiesBehaviors, SchemaBehaviors.Schema],
    listeners: { "a11y-collapse-tap": "_onTap" },
    properties: {
      accordion: { type: Boolean, value: !1, reflectToAttribute: !0 },
      disabled: { type: Boolean, value: !1, reflectToAttribute: !0 },
      expanded: { type: Boolean, value: !1, reflectToAttribute: !0 },
      icon: { type: String, value: "icons:expand-more" },
      iconExpanded: { type: String, value: null },
      label: { type: String, value: "expand/collapse" },
      labelExpanded: { type: String, value: null },
      tooltip: { type: String, value: "toggle expand/collapse" },
      tooltipExpanded: { type: String, value: null },
      __rotateIcon: {
        type: Boolean,
        computed: "_isRotated(expanded,iconExpanded)"
      }
    },
    attached: function attached() {
      this.fire("a11y-collapse-attached", this);
      this.setHaxProperties({
        canScale: !1,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Single Expand Collapse",
          description: "A single instance of an expand collapse.",
          icon: "view-day",
          color: "grey",
          groups: ["Text"],
          meta: { author: "Your organization on github" }
        },
        settings: {
          quick: [],
          configure: [
            {
              property: "expanded",
              title: "Expanded",
              description: "Expand by default",
              inputMethod: "boolean"
            },
            {
              property: "label",
              title: "Label",
              description: "The label of the toggle expand/collapse button",
              inputMethod: "textfield",
              icon: "editor:title"
            },
            {
              property: "tooltip",
              title: "Tooltip",
              description: "The tooltip for the toggle expand/collapse button",
              inputMethod: "textfield",
              icon: "editor:title"
            },
            {
              property: "icon",
              title: "Icon",
              description: "The icon for the toggle expand/collapse button",
              inputMethod: "textfield",
              icon: "editor:title"
            },
            {
              property: "iconExpanded",
              title: "Expanded Icon",
              description:
                "Optional: The icon for the toggle expand/collapse button when expanded",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          advanced: []
        }
      });
    },
    detached: function detached() {
      this.fire("a11y-collapse-detached", this);
    },
    toggle: function toggle(mode) {
      this.expanded = mode !== void 0 ? mode : !this.expanded;
      this.fire("a11y-collapse-toggle", this);
    },
    _overrideProp: function _overrideProp(prop, val) {
      this[prop] = val;
    },
    _getExpandCollapse: function _getExpandCollapse(expanded, ifFalse, ifTrue) {
      return expanded && null !== ifTrue ? ifTrue : ifFalse;
    },
    _isRotated: function _isRotated(expanded, iconExpanded) {
      return !expanded && null === iconExpanded;
    },
    _onTap: function _onTap() {
      if (!this.disabled) {
        this.toggle();
        this.fire("a11y-collapse-click", this);
      }
    },
    _setAriaExpanded: function _setAriaExpanded(expanded) {
      return "" + expanded;
    }
  });
});