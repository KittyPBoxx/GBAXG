import {
  visually_hidden_styles_default
} from "./chunk.IPEDNLG5.js";
import {
  ShoelaceElement,
  e
} from "./chunk.7FMMWSAC.js";
import {
  x
} from "./chunk.MK2GV4O3.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/visually-hidden/visually-hidden.ts
var SlVisuallyHidden = class extends ShoelaceElement {
  render() {
    return x` <slot></slot> `;
  }
};
SlVisuallyHidden.styles = visually_hidden_styles_default;
SlVisuallyHidden = __decorateClass([
  e("sl-visually-hidden")
], SlVisuallyHidden);

export {
  SlVisuallyHidden
};
