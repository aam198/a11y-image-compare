import { LitElement, html, css } from "lit-element/lit-element.js";
import "@lrnwebcomponents/es-global-bridge/es-global-bridge.js";
import * as md5 from "./lib/md5.min.js";
/**
`paper-avatar`
User avatar in material style

### Styling

To change the background color:

    paper-avatar {
      --paper-avatar-color: red;
    }
	
To change the size of the avatar:

    paper-avatar {
      --paper-avatar-width: 60px;
    }

Custom property | Description | Default
----------------|-------------|----------
`--paper-avatar-width` | Size (width and height) of the avatar image | `40px`
`--paper-avatar-color` | Background color of the avatar image | 


* @demo demo/index.html 
*/
class PaperAvatar extends LitElement {
  /**
   * LitElement style method
   */
  static get styles() {
    return [
      css`
        :host {
          --paper-avatar-width: 40px;
          display: inline-block;
          box-sizing: border-box;
          position: relative;
          width: var(--paper-avatar-width);
          height: var(--paper-avatar-width);
          border-radius: 50%;
          cursor: default;
          background-color: var(
            --paper-avatar-color,
            var(--paper-avatar-bgcolor)
          );
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        :host > * {
          pointer-events: none;
        }

        #label,
        #img,
        #jdenticon {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        #label {
          overflow: hidden;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
        }
        #label span {
          display: block;
          width: 100%;
          font-weight: 400;
          color: var(--paper-avatar-text-color, rgba(255, 255, 255, 0.8));
          text-transform: capitalize;
          font-family: "Roboto", "Noto", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-align: center;
          font-size: calc(var(--paper-avatar-width) / 1.65);
        }
        #jdenticon {
          width: var(--paper-avatar-width);
          height: var(--paper-avatar-width);
        }
        #jdenticon * {
          fill: var(
            --paper-avatar-text-color,
            rgba(255, 255, 255, 0.8)
          ) !important;
        }
      `
    ];
  }
  /**
   * A convention our team uses
   */
  static get tag() {
    return "paper-avatar";
  }
  /**
   * LitElement render method
   */
  render() {
    return html`
      <div id="label" title="${this.label}">
        <span>${this._label(this.label)}</span>
      </div>
      <svg id="jdenticon" width="40" height="40"><slot></slot></svg>
      ${this.src
        ? html`
            <img
              id="img"
              loading="lazy"
              src="${this.src}"
              title="${this.label}"
              @load="${this._onImgLoad}"
              @error="${this._onImgError}"
              title="${this.color}"
            />
          `
        : ""}
    `;
  }
  /**
   * HTMLElement specification
   */
  constructor() {
    super();
    this.src = null;
    this.jdenticonExists = false;
    this.twoChars = false;
    this.jdenticon = false;
  }
  /**
   * LitElement specific property update life cycle
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "label") {
        this._observerLabel(this[propName]);
      }
    });
  }
  /**
   * LitElement / popular library convention
   */
  static get properties() {
    return {
      /**
       * Image address or base64
       */
      src: {
        type: String
      },
      /**
       *	Label with username
       */
      label: {
        type: String
      },
      /**
       * Ensure we can support jdenticon before invoking it
       */
      jdenticonExists: {
        type: Boolean
      },
      /**
       * Show two chars in avatar
       */
      twoChars: {
        type: Boolean,
        attribute: "two-chars"
      },

      /**
       * Array of colors for avatar background
       */
      colors: {
        type: Array
      },

      /**
       * Set true if you want use a jdenticon avatar
       */
      jdenticon: {
        type: Boolean
      }
    };
  }
  /**
   * Generate the correct label from change with optional jdenticon md5 hash
   */
  _observerLabel(label) {
    if (label) {
      if (this.jdenticonExists && this.jdenticon) {
        this.shadowRoot.querySelector("#label").hidden = true;

        window.jdenticon.config = {
          lightness: {
            color: [1, 1],
            grayscale: [1, 1]
          },
          saturation: 1
        };
        window.jdenticon.update(
          this.shadowRoot.querySelector("#jdenticon"),
          window.md5(label)
        );
      }
      this.style.backgroundColor = this._parseColor(label);
    }
  }
  // simple path from a url modifier
  pathFromUrl(url) {
    return url.substring(0, url.lastIndexOf("/") + 1);
  }
  /**
   * LitElement life cycle - shadowDom / properties mapped
   */
  firstUpdated(changedProperties) {
    const basePath = this.pathFromUrl(decodeURIComponent(import.meta.url));
    const location = `${basePath}lib/jdenticon-1.4.0.min.js`;
    window.addEventListener(
      "es-bridge-jdenticon-loaded",
      this._jdenticonLoaded.bind(this)
    );
    window.ESGlobalBridge.requestAvailability();
    window.ESGlobalBridge.instance.load("jdenticon", location);
  }
  /**
   * HTMLElement life cycle
   */
  disconnectedCallback() {
    window.removeEventListener(
      "es-bridge-jdenticon-loaded",
      this._jdenticonLoaded.bind(this)
    );
    super.disconnectedCallback();
  }
  /**
   * Callback once we know that the jdenticon library is globally loaded.
   */
  _jdenticonLoaded(e) {
    this.jdenticonExists = true;
    this._observerLabel(this.label);
  }
  /**
   * convert label in context
   */
  _label(label) {
    if (!label) return "";

    if (this.twoChars) {
      if (this.label.indexOf(" ") > -1) {
        var matches = this.label.match(/\b(\w)/g);
        return matches[0] + matches[1];
      } else {
        return label.substring(0, 2);
      }
    }

    return label.charAt(0);
  }
  _onImgLoad(e) {
    e.currentTarget.hidden = false;
  }
  _onImgError(e) {
    e.currentTarget.hidden = true;
  }
  _parseColor(label) {
    var colors = this.colors
      ? this.colors
      : [
          "#F44336",
          "#E91E63",
          "#9C27B0",
          "#673AB7",
          "#3F51B5",
          "#2196F3",
          "#03A9F4",
          "#00BCD4",
          "#795548",
          "#009688",
          "#4CAF50",
          "#8BC34A",
          "#CDDC39",
          "#FFEB3B",
          "#FFC107",
          "#FF9800",
          "#FF5722",
          "#9E9E9E",
          "#607D8B"
        ];

    var hash = 0;

    for (var a = 0; a < label.length; a++) hash += label.charCodeAt(a) << 5;

    if (hash >= colors.length) return colors[hash % colors.length];

    return colors[hash];
  }
}
window.customElements.define(PaperAvatar.tag, PaperAvatar);
export { PaperAvatar };
