import {
  image_comparer_styles_default
} from "./chunk.G6L52F2C.js";
import {
  drag
} from "./chunk.A4SOQOK5.js";
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
  ShoelaceElement,
  e,
  e2,
  i
} from "./chunk.7FMMWSAC.js";
import {
  x
} from "./chunk.MK2GV4O3.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/image-comparer/image-comparer.ts
var SlImageComparer = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.position = 50;
  }
  handleDrag(event) {
    const { width } = this.base.getBoundingClientRect();
    const isRtl = this.localize.dir() === "rtl";
    event.preventDefault();
    drag(this.base, {
      onMove: (x2) => {
        this.position = parseFloat(clamp(x2 / width * 100, 0, 100).toFixed(2));
        if (isRtl)
          this.position = 100 - this.position;
      },
      initialEvent: event
    });
  }
  handleKeyDown(event) {
    const isLtr = this.localize.dir() === "ltr";
    const isRtl = this.localize.dir() === "rtl";
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      const incr = event.shiftKey ? 10 : 1;
      let newPosition = this.position;
      event.preventDefault();
      if (isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
        newPosition -= incr;
      }
      if (isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
        newPosition += incr;
      }
      if (event.key === "Home") {
        newPosition = 0;
      }
      if (event.key === "End") {
        newPosition = 100;
      }
      newPosition = clamp(newPosition, 0, 100);
      this.position = newPosition;
    }
  }
  handlePositionChange() {
    this.emit("sl-change");
  }
  render() {
    const isRtl = this.localize.dir() === "rtl";
    return x`
      <div
        part="base"
        id="image-comparer"
        class=${o({
      "image-comparer": true,
      "image-comparer--rtl": isRtl
    })}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <slot name="before" part="before" class="image-comparer__before"></slot>

          <slot
            name="after"
            part="after"
            class="image-comparer__after"
            style=${o2({
      clipPath: isRtl ? `inset(0 0 0 ${100 - this.position}%)` : `inset(0 ${100 - this.position}% 0 0)`
    })}
          ></slot>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${o2({
      left: isRtl ? `${100 - this.position}%` : `${this.position}%`
    })}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <slot
            name="handle"
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <sl-icon library="system" name="grip-vertical"></sl-icon>
          </slot>
        </div>
      </div>
    `;
  }
};
SlImageComparer.styles = image_comparer_styles_default;
__decorateClass([
  i(".image-comparer")
], SlImageComparer.prototype, "base", 2);
__decorateClass([
  i(".image-comparer__handle")
], SlImageComparer.prototype, "handle", 2);
__decorateClass([
  e2({ type: Number, reflect: true })
], SlImageComparer.prototype, "position", 2);
__decorateClass([
  watch("position", { waitUntilFirstUpdate: true })
], SlImageComparer.prototype, "handlePositionChange", 1);
SlImageComparer = __decorateClass([
  e("sl-image-comparer")
], SlImageComparer);

export {
  SlImageComparer
};
