import {
  breadcrumb_item_styles_default
} from "./chunk.7BDQULVX.js";
import {
  l
} from "./chunk.II3LSVDO.js";
import {
  HasSlotController
} from "./chunk.3IYPB6RR.js";
import {
  o
} from "./chunk.EKCRI76E.js";
import {
  ShoelaceElement,
  e,
  e2
} from "./chunk.7FMMWSAC.js";
import {
  x
} from "./chunk.MK2GV4O3.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/breadcrumb-item/breadcrumb-item.ts
var SlBreadcrumbItem = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.rel = "noreferrer noopener";
  }
  render() {
    const isLink = this.href ? true : false;
    return x`
      <div
        part="base"
        class=${o({
      "breadcrumb-item": true,
      "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"),
      "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix")
    })}
      >
        <slot name="prefix" part="prefix" class="breadcrumb-item__prefix"></slot>

        ${isLink ? x`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${l(this.target ? this.target : void 0)}"
                rel=${l(this.target ? this.rel : void 0)}
              >
                <slot></slot>
              </a>
            ` : x`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <slot name="suffix" part="suffix" class="breadcrumb-item__suffix"></slot>

        <slot name="separator" part="separator" class="breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `;
  }
};
SlBreadcrumbItem.styles = breadcrumb_item_styles_default;
__decorateClass([
  e2()
], SlBreadcrumbItem.prototype, "href", 2);
__decorateClass([
  e2()
], SlBreadcrumbItem.prototype, "target", 2);
__decorateClass([
  e2()
], SlBreadcrumbItem.prototype, "rel", 2);
SlBreadcrumbItem = __decorateClass([
  e("sl-breadcrumb-item")
], SlBreadcrumbItem);

export {
  SlBreadcrumbItem
};
