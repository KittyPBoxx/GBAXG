import {
  carousel_item_styles_default
} from "./chunk.J2RUWON4.js";
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

// src/components/carousel-item/carousel-item.ts
var SlCarouselItem = class extends ShoelaceElement {
  static isCarouselItem(node) {
    return node instanceof Element && node.getAttribute("aria-roledescription") === "slide";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "group");
  }
  render() {
    return x` <slot></slot> `;
  }
};
SlCarouselItem.styles = carousel_item_styles_default;
SlCarouselItem = __decorateClass([
  e("sl-carousel-item")
], SlCarouselItem);

export {
  SlCarouselItem
};
