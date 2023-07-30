import {
  skeleton_styles_default
} from "./chunk.XOIHSKIQ.js";
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

// src/components/skeleton/skeleton.ts
var SlSkeleton = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.effect = "none";
  }
  render() {
    return x`
      <div
        part="base"
        class=${o({
      skeleton: true,
      "skeleton--pulse": this.effect === "pulse",
      "skeleton--sheen": this.effect === "sheen"
    })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
};
SlSkeleton.styles = skeleton_styles_default;
__decorateClass([
  e2()
], SlSkeleton.prototype, "effect", 2);
SlSkeleton = __decorateClass([
  e("sl-skeleton")
], SlSkeleton);

export {
  SlSkeleton
};
