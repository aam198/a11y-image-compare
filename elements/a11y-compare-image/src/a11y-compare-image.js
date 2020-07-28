import { LitElement, html, css } from "lit-element/lit-element.js";
/**
 * `a11y-compare-image`
 * Layers images over each other with a slider interface to compare them
 * @demo demo/index.html
 * @element a11y-compare-image
 */
class a11yCompareImage extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: inline-flex;
          margin: 15px 0;
        }
        :host([hidden]) {
          display: none !important;
        }
        figure {
          margin: 0;
        }
        #container,
        #container > div {
          margin: 0;
          padding: 0;
        }
        #container > div {
          position: relative;
        }
        #top {
          top: 0;
          left: 0;
          position: absolute;
          opacity: var(--a11y-compare-image-opacity, 1);
          width: var(--a11y-compare-image-width, 50%);
          overflow: hidden;
        }
        ::slotted([slot="top"]) {
          top: 0;
          left: 0;
          opacity: var(--a11y-compare-image-opacity, 1);
          position: absolute;
          width: var(--a11y-compare-image-image-width);
        }
        ::slotted([slot="top"]),
        #bottom {
          display: block;
        }
        #bottom {
          width: 100%;
        }
        #slider {
          width: calc(100% + 32px);
          margin: -15px 0 0 -16px;
        }
        ::slotted([slot="bottom"]) {
          max-width: 100%;
        }
      `
    ];
  }
  constructor() {
    super();
    this.opacity = false;
    import("@polymer/iron-image/iron-image.js");
    import("@polymer/paper-slider/paper-slider.js");
    let layers = this.querySelectorAll("[slot=top]");
    let total = layers.length;
    let section = 100 / total;
    this.snap = section;
    this.maxMarkers = total;
  }
  render() {
    return html`
      <figure>
        <figcaption>
          <slot name="heading"></slot>
          <div id="description"><slot name="description"></slot></div>
        </figcaption>
        <div id="container">
          <div>
            <slot id="bottom" name="bottom"></slot>
            <div id="top">
              <slot name="top"></slot>
            </div>
          </div>
        </div>
        <paper-slider
          id="slider"
          snaps
          markers="[33,66]"
          max-markers="${this.maxMarkers}"
          value="0"
        ></paper-slider>
      </figure>
    `;
  }

  static get tag() {
    return "a11y-compare-image";
  }

  static get properties() {
    return {
      ...super.properties,

      /**
       * Number of snap/dots on the slider bar
       */
      maxMarkers: {
        type: Number,
        attribute: "max-marker"
      },
      /**
       * dots on the slider bar
       */
      snap: {
        type: Number,
        attribute: "snap"
      },
      /**
       * text for button that displays longdesc
       */
      longdescText: {
        type: String,
        attribute: "summary-text"
      },
      /**
       * mode for the slider: wipe
       */
      opacity: {
        type: Boolean
      },
      /**
       * @deprecated Use `slot=heading`
       */
      title: {
        type: String
      },
      /**
       * src for top image
       */
      topAlt: {
        type: String,
        attribute: "top-alt"
      },
      /**
       * aria-describedby for top image
       */
      topDescriptionId: {
        type: String,
        attribute: "top-description-id"
      },
      /**
       * src for top image
       */
      topSrc: {
        type: String,
        attribute: "top-src"
      }
    };
  }
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (["topSrc"].includes(propName)) {
        this._slide();
      }
    });
  }
  firstUpdated() {
    this._slide();
    this.shadowRoot
      .querySelector("#slider")
      .addEventListener("immediate-value-changed", e => {
        this._slide();
      });
  }
  /**
   * updates the slider
   */
  _slide() {
    let top = this.shadowRoot.querySelector("#top");
    let layers = this.querySelectorAll("[slot=top]");
    let total = layers.length;
    let section = 100 / total;
    let slider = this.shadowRoot.querySelector("#slider");
    let activeLayer = Math.floor(slider.immediateValue / section);
    let position = slider.immediateValue - (section * activeLayer) / section;
    console.log(top, layers, section, activeLayer, position, total);
    slider.step = section;
    layers.forEach((layer, index) => {
      layer.hidden = index != activeLayer && index + 1 != activeLayer;
    });
    if (this.opacity === false) {
      top.style.setProperty("--a11y-compare-image-width", position + "%");
      top.style.setProperty(
        "--a11y-compare-image-image-width",
        10000 / position + "%"
      );
      top.style.setProperty("--a11y-compare-image-opacity", 1);
    } else {
      top.style.setProperty("--a11y-compare-image-width", "100%");
      top.style.setProperty("--a11y-compare-image-image-width", "100%");
      top.style.setProperty("--a11y-compare-image-opacity", position / 100);
    }
  }
}
window.customElements.define(a11yCompareImage.tag, a11yCompareImage);
export { a11yCompareImage };
