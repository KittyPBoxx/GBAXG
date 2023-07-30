import {
  rating_styles_default
} from "./chunk.S5M4V726.js";
import {
  o as o2
} from "./chunk.5KP5MZYU.js";
import {
  clamp
} from "./chunk.HF7GESMZ.js";
import {
  LocalizeController
} from "./chunk.BWLRNN6E.js";
import {
  watch
} from "./chunk.VQ3XOPCT.js";
import {
  o
} from "./chunk.EKCRI76E.js";
import {
  e as e4,
  i as i2,
  t as t2
} from "./chunk.UP75L23G.js";
import {
  ShoelaceElement,
  e,
  e2,
  e3,
  i,
  t
} from "./chunk.7FMMWSAC.js";
import {
  A,
  T,
  x
} from "./chunk.MK2GV4O3.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// node_modules/lit-html/directives/unsafe-html.js
var e5 = class extends i2 {
  constructor(i3) {
    if (super(i3), this.et = A, i3.type !== t2.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r) {
    if (r === A || null == r)
      return this.ft = void 0, this.et = r;
    if (r === T)
      return r;
    if ("string" != typeof r)
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r === this.et)
      return this.ft;
    this.et = r;
    const s = [r];
    return s.raw = s, this.ft = { _$litType$: this.constructor.resultType, strings: s, values: [] };
  }
};
e5.directiveName = "unsafeHTML", e5.resultType = 1;
var o3 = e4(e5);

// src/components/rating/rating.ts
var SlRating = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.hoverValue = 0;
    this.isHovering = false;
    this.label = "";
    this.value = 0;
    this.max = 5;
    this.precision = 1;
    this.readonly = false;
    this.disabled = false;
    this.getSymbol = () => '<sl-icon name="star-fill" library="system"></sl-icon>';
  }
  getValueFromMousePosition(event) {
    return this.getValueFromXCoordinate(event.clientX);
  }
  getValueFromTouchPosition(event) {
    return this.getValueFromXCoordinate(event.touches[0].clientX);
  }
  getValueFromXCoordinate(coordinate) {
    const isRtl = this.localize.dir() === "rtl";
    const { left, right, width } = this.rating.getBoundingClientRect();
    const value = isRtl ? this.roundToPrecision((right - coordinate) / width * this.max, this.precision) : this.roundToPrecision((coordinate - left) / width * this.max, this.precision);
    return clamp(value, 0, this.max);
  }
  handleClick(event) {
    if (this.disabled) {
      return;
    }
    this.setValue(this.getValueFromMousePosition(event));
    this.emit("sl-change");
  }
  setValue(newValue) {
    if (this.disabled || this.readonly) {
      return;
    }
    this.value = newValue === this.value ? 0 : newValue;
    this.isHovering = false;
  }
  handleKeyDown(event) {
    const isLtr = this.localize.dir() === "ltr";
    const isRtl = this.localize.dir() === "rtl";
    const oldValue = this.value;
    if (this.disabled || this.readonly) {
      return;
    }
    if (event.key === "ArrowDown" || isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
      const decrement = event.shiftKey ? 1 : this.precision;
      this.value = Math.max(0, this.value - decrement);
      event.preventDefault();
    }
    if (event.key === "ArrowUp" || isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
      const increment = event.shiftKey ? 1 : this.precision;
      this.value = Math.min(this.max, this.value + increment);
      event.preventDefault();
    }
    if (event.key === "Home") {
      this.value = 0;
      event.preventDefault();
    }
    if (event.key === "End") {
      this.value = this.max;
      event.preventDefault();
    }
    if (this.value !== oldValue) {
      this.emit("sl-change");
    }
  }
  handleMouseEnter(event) {
    this.isHovering = true;
    this.hoverValue = this.getValueFromMousePosition(event);
  }
  handleMouseMove(event) {
    this.hoverValue = this.getValueFromMousePosition(event);
  }
  handleMouseLeave() {
    this.isHovering = false;
  }
  handleTouchStart(event) {
    this.isHovering = true;
    this.hoverValue = this.getValueFromTouchPosition(event);
    event.preventDefault();
  }
  handleTouchMove(event) {
    this.hoverValue = this.getValueFromTouchPosition(event);
  }
  handleTouchEnd(event) {
    this.isHovering = false;
    this.setValue(this.hoverValue);
    this.emit("sl-change");
    event.preventDefault();
  }
  roundToPrecision(numberToRound, precision = 0.5) {
    const multiplier = 1 / precision;
    return Math.ceil(numberToRound * multiplier) / multiplier;
  }
  handleHoverValueChange() {
    this.emit("sl-hover", {
      detail: {
        phase: "move",
        value: this.hoverValue
      }
    });
  }
  handleIsHoveringChange() {
    this.emit("sl-hover", {
      detail: {
        phase: this.isHovering ? "start" : "end",
        value: this.hoverValue
      }
    });
  }
  /** Sets focus on the rating. */
  focus(options) {
    this.rating.focus(options);
  }
  /** Removes focus from the rating. */
  blur() {
    this.rating.blur();
  }
  render() {
    const isRtl = this.localize.dir() === "rtl";
    const counter = Array.from(Array(this.max).keys());
    let displayValue = 0;
    if (this.disabled || this.readonly) {
      displayValue = this.value;
    } else {
      displayValue = this.isHovering ? this.hoverValue : this.value;
    }
    return x`
      <div
        part="base"
        class=${o({
      rating: true,
      "rating--readonly": this.readonly,
      "rating--disabled": this.disabled,
      "rating--rtl": isRtl
    })}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-readonly=${this.readonly ? "true" : "false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled ? "-1" : "0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${counter.map((index) => {
      if (displayValue > index && displayValue < index + 1) {
        return x`
                <span
                  class=${o({
          rating__symbol: true,
          "rating__partial-symbol-container": true,
          "rating__symbol--hover": this.isHovering && Math.ceil(displayValue) === index + 1
        })}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${o2({
          clipPath: isRtl ? `inset(0 ${(displayValue - index) * 100}% 0 0)` : `inset(0 0 0 ${(displayValue - index) * 100}%)`
        })}
                  >
                    ${o3(this.getSymbol(index + 1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${o2({
          clipPath: isRtl ? `inset(0 0 0 ${100 - (displayValue - index) * 100}%)` : `inset(0 ${100 - (displayValue - index) * 100}% 0 0)`
        })}
                  >
                    ${o3(this.getSymbol(index + 1))}
                  </div>
                </span>
              `;
      }
      return x`
              <span
                class=${o({
        rating__symbol: true,
        "rating__symbol--hover": this.isHovering && Math.ceil(displayValue) === index + 1,
        "rating__symbol--active": displayValue >= index + 1
      })}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${o3(this.getSymbol(index + 1))}
              </span>
            `;
    })}
        </span>
      </div>
    `;
  }
};
SlRating.styles = rating_styles_default;
__decorateClass([
  i(".rating")
], SlRating.prototype, "rating", 2);
__decorateClass([
  t()
], SlRating.prototype, "hoverValue", 2);
__decorateClass([
  t()
], SlRating.prototype, "isHovering", 2);
__decorateClass([
  e2()
], SlRating.prototype, "label", 2);
__decorateClass([
  e2({ type: Number })
], SlRating.prototype, "value", 2);
__decorateClass([
  e2({ type: Number })
], SlRating.prototype, "max", 2);
__decorateClass([
  e2({ type: Number })
], SlRating.prototype, "precision", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlRating.prototype, "readonly", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlRating.prototype, "disabled", 2);
__decorateClass([
  e2()
], SlRating.prototype, "getSymbol", 2);
__decorateClass([
  e3({ passive: true })
], SlRating.prototype, "handleTouchMove", 1);
__decorateClass([
  watch("hoverValue")
], SlRating.prototype, "handleHoverValueChange", 1);
__decorateClass([
  watch("isHovering")
], SlRating.prototype, "handleIsHoveringChange", 1);
SlRating = __decorateClass([
  e("sl-rating")
], SlRating);

export {
  SlRating
};
/*! Bundled license information:

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
