import {
  o
} from "./chunk.EKCRI76E.js";
import {
  ShoelaceElement,
  e,
  e2
} from "./chunk.7FMMWSAC.js";
import {
  badge_styles_default
} from "./chunk.OI2NSHML.js";
import {
  x
} from "./chunk.MK2GV4O3.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/badge/badge.ts
var SlBadge = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.variant = "primary";
    this.pill = false;
    this.pulse = false;
  }
  render() {
    return x`
      <slot
        part="base"
        class=${o({
      badge: true,
      "badge--primary": this.variant === "primary",
      "badge--success": this.variant === "success",
      "badge--neutral": this.variant === "neutral",
      "badge--warning": this.variant === "warning",
      "badge--danger": this.variant === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      ></slot>
    `;
  }
};
SlBadge.styles = badge_styles_default;
__decorateClass([
  e2({ reflect: true })
], SlBadge.prototype, "variant", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlBadge.prototype, "pill", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlBadge.prototype, "pulse", 2);
SlBadge = __decorateClass([
  e("sl-badge")
], SlBadge);

export {
  SlBadge
};
