/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { pathFromUrl } from "@polymer/polymer/lib/utils/resolve-url.js";
import "@lrnwebcomponents/jwt-login/jwt-login.js";
/**
 * `haxcms-backend-demo`
 * `a simple element to check for and fetch JWTs`
 *
 * @demo demo/index.html
 *
 * @microcopy - the mental model for this element
 * - jwt - a json web token which is an encrypted security token to talk
 */
class HAXCMSBackendDemo extends PolymerElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "haxcms-backend-demo";
  }
  // render function
  static get template() {
    return html`
      <jwt-login
        id="jwt"
        url="[[jwtLoginLocation]]"
        url-logout="[[jwtLogoutLocation]]"
        jwt="{{jwt}}"
      ></jwt-login>
    `;
  }
  static get properties() {
    return {
      /**
       * Location of what endpoint to hit for
       */
      jwtLoginLocation: {
        type: String,
        value: window.appSettings.login
      },
      /**
       * Location of what endpoint to hit for logging out
       */
      jwtLogoutLocation: {
        type: String,
        value: window.appSettings.logout
      },
      /**
       * JSON Web token, it'll come from a global call if it's available
       */
      jwt: {
        type: String
      }
    };
  }
  /**
   * created life cycle
   */
  constructor() {
    super();
    document.body.addEventListener("jwt-token", this._jwtTokenFired.bind(this));
  }
  /**
   * detached life cycle
   */
  disconnectedCallback() {
    document.body.removeEventListener(
      "jwt-token",
      this._jwtTokenFired.bind(this)
    );
    super.disconnectedCallback();
  }
  /**
   * JWT token fired, let's capture it
   */
  _jwtTokenFired(e) {
    this.jwt = e.detail;
  }
  /**
   * Attached life cycle
   */
  connectedCallback() {
    super.connectedCallback();
    if (true) {
      // attempt to dynamically import the hax cms site editor
      // which will appear to be injecting into the node
      // but because of this approach it should be non-blocking
      try {
        import(pathFromUrl(decodeURIComponent(import.meta.url)) +
          "../haxcms-site-editor.js").then(
          e => {
            let haxCmsSiteEditorElement = document.createElement(
              "haxcms-site-editor"
            );
            haxCmsSiteEditorElement.jwt = this.jwt;
            haxCmsSiteEditorElement.method = "GET";
            haxCmsSiteEditorElement.saveNodePath =
              window.appSettings.saveNodePath;
            haxCmsSiteEditorElement.saveManifestPath =
              window.appSettings.saveManifestPath;
            haxCmsSiteEditorElement.saveOutlinePath =
              window.appSettings.saveOutlinePath;
            haxCmsSiteEditorElement.getNodeFieldsPath =
              window.appSettings.getNodeFieldsPath;
            haxCmsSiteEditorElement.createNodePath =
              window.appSettings.createNodePath;
            haxCmsSiteEditorElement.deleteNodePath =
              window.appSettings.deleteNodePath;
            haxCmsSiteEditorElement.publishSitePath =
              window.appSettings.publishSitePath;
            haxCmsSiteEditorElement.appStore = window.appSettings.appStore;
            window.cmsSiteEditor.instance.haxCmsSiteEditorElement = haxCmsSiteEditorElement;
            window.cmsSiteEditor.instance.appendTarget.appendChild(
              haxCmsSiteEditorElement
            );
          },
          e => {
            //import failed
          }
        );
      } catch (err) {
        // error in the event this is a double registration
      }
    }
  }
}
window.customElements.define(HAXCMSBackendDemo.tag, HAXCMSBackendDemo);
export { HAXCMSBackendDemo };