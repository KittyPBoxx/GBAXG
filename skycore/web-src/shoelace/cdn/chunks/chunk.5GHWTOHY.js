import {
  icon_button_styles_default
} from "./chunk.6JWH5NQW.js";
import {
  i as i2,
  n
} from "./chunk.WLPF2RC4.js";
import {
  l
} from "./chunk.II3LSVDO.js";
import {
  o
} from "./chunk.EKCRI76E.js";
import {
  ShoelaceElement,
  e,
  e2,
  i,
  t
} from "./chunk.7FMMWSAC.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/icon-button/icon-button.ts
var SlIconButton = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this.label = "";
    this.disabled = false;
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? i2`a` : i2`button`;
    return n`
      <${tag}
        part="base"
        class=${o({
      "icon-button": true,
      "icon-button--disabled": !isLink && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${l(isLink ? void 0 : this.disabled)}
        type=${l(isLink ? void 0 : "button")}
        href=${l(isLink ? this.href : void 0)}
        target=${l(isLink ? this.target : void 0)}
        download=${l(isLink ? this.download : void 0)}
        rel=${l(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${l(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${l(this.name)}
          library=${l(this.library)}
          src=${l(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${tag}>
    `;
  }
};
SlIconButton.styles = icon_button_styles_default;
__decorateClass([
  i(".icon-button")
], SlIconButton.prototype, "button", 2);
__decorateClass([
  t()
], SlIconButton.prototype, "hasFocus", 2);
__decorateClass([
  e2()
], SlIconButton.prototype, "name", 2);
__decorateClass([
  e2()
], SlIconButton.prototype, "library", 2);
__decorateClass([
  e2()
], SlIconButton.prototype, "src", 2);
__decorateClass([
  e2()
], SlIconButton.prototype, "href", 2);
__decorateClass([
  e2()
], SlIconButton.prototype, "target", 2);
__decorateClass([
  e2()
], SlIconButton.prototype, "download", 2);
__decorateClass([
  e2()
], SlIconButton.prototype, "label", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlIconButton.prototype, "disabled", 2);
SlIconButton = __decorateClass([
  e("sl-icon-button")
], SlIconButton);

export {
  SlIconButton
};
