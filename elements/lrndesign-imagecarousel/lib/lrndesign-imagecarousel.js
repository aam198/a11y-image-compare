import "@polymer/polymer/polymer.js";
import "fancy-carousel/fancy-carousel.js";
/**
`lrndesign-imagecarousel`
A LRN element

@demo demo/index.html
*/
Polymer({
  _template: `
    <style>
      :host {
        display: block;
      }
    </style>
    <fancy-carousel>
  <img src="https://app-layout-assets.appspot.com/assets/bg1.jpg">
  <img src="https://app-layout-assets.appspot.com/assets/bg2.jpg">
  <img src="https://app-layout-assets.appspot.com/assets/bg3.jpg">
  <img src="https://app-layout-assets.appspot.com/assets/bg4.jpg">
</fancy-carousel>
`,

  is: "lrndesign-imagecarousel",

  properties: {
    title: {
      type: String,
      value: "lrndesign-imagecarousel"
    }
  }
});