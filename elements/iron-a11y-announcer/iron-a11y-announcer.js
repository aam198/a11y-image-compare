import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import * as async from "@polymer/polymer/lib/utils/async.js";
export const IronA11yAnnouncer = Polymer({
  _template: html`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live\$="[[mode]]">[[_text]]</div>
`,

  is: "iron-a11y-announcer",

  properties: {
    /**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */
    mode: {
      type: String,
      value: "polite"
    },

    _text: {
      type: String,
      value: ""
    }
  },

  created: function() {
    if (!IronA11yAnnouncer.instance) {
      IronA11yAnnouncer.instance = this;
    }

    document.body.addEventListener(
      "iron-announce",
      this._onIronAnnounce.bind(this)
    );
  },

  /**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */
  announce: function(text) {
    this._text = "";
    async.microTask.run(() => {
      this._text = text;
    });
  },

  _onIronAnnounce: function(event) {
    if (event.detail && event.detail.text) {
      this.announce(event.detail.text);
    }
  }
});

IronA11yAnnouncer.instance = null;

IronA11yAnnouncer.requestAvailability = function() {
  document.addEventListener("DOMContentLoaded", function(event) {
    if (!IronA11yAnnouncer.instance) {
      IronA11yAnnouncer.instance = document.createElement(
        "iron-a11y-announcer"
      );
    }

    document.body.appendChild(IronA11yAnnouncer.instance);
  });
};