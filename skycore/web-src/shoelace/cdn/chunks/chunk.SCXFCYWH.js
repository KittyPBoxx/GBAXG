import {
  menu_label_styles_default
} from "./chunk.ZBMCJ5H4.js";
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

// src/components/menu-label/menu-label.ts
var SlMenuLabel = class extends ShoelaceElement {
  render() {
    return x` <slot part="base" class="menu-label"></slot> `;
  }
};
SlMenuLabel.styles = menu_label_styles_default;
SlMenuLabel = __decorateClass([
  e("sl-menu-label")
], SlMenuLabel);

export {
  SlMenuLabel
};
