import {
  radio_group_styles_default
} from "./chunk.R6TBC2KB.js";
import {
  FormControlController,
  customErrorValidityState,
  validValidityState,
  valueMissingValidityState
} from "./chunk.HDTNU4PB.js";
import {
  HasSlotController
} from "./chunk.3IYPB6RR.js";
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
  i,
  t
} from "./chunk.7FMMWSAC.js";
import {
  x
} from "./chunk.MK2GV4O3.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/radio-group/radio-group.ts
var SlRadioGroup = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this);
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.customValidityMessage = "";
    this.hasButtonGroup = false;
    this.errorMessage = "";
    this.defaultValue = "";
    this.label = "";
    this.helpText = "";
    this.name = "option";
    this.value = "";
    this.size = "medium";
    this.form = "";
    this.required = false;
  }
  /** Gets the validity state object */
  get validity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";
    if (hasCustomValidityMessage) {
      return customErrorValidityState;
    } else if (isRequiredAndEmpty) {
      return valueMissingValidityState;
    }
    return validValidityState;
  }
  /** Gets the validation message */
  get validationMessage() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";
    if (hasCustomValidityMessage) {
      return this.customValidityMessage;
    } else if (isRequiredAndEmpty) {
      return this.validationInput.validationMessage;
    }
    return "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.defaultValue = this.value;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  getAllRadios() {
    return [...this.querySelectorAll("sl-radio, sl-radio-button")];
  }
  handleRadioClick(event) {
    const target = event.target.closest("sl-radio, sl-radio-button");
    const radios = this.getAllRadios();
    const oldValue = this.value;
    if (target.disabled) {
      return;
    }
    this.value = target.value;
    radios.forEach((radio) => radio.checked = radio === target);
    if (this.value !== oldValue) {
      this.emit("sl-change");
      this.emit("sl-input");
    }
  }
  handleKeyDown(event) {
    var _a;
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
      return;
    }
    const radios = this.getAllRadios().filter((radio) => !radio.disabled);
    const checkedRadio = (_a = radios.find((radio) => radio.checked)) != null ? _a : radios[0];
    const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
    const oldValue = this.value;
    let index = radios.indexOf(checkedRadio) + incr;
    if (index < 0) {
      index = radios.length - 1;
    }
    if (index > radios.length - 1) {
      index = 0;
    }
    this.getAllRadios().forEach((radio) => {
      radio.checked = false;
      if (!this.hasButtonGroup) {
        radio.tabIndex = -1;
      }
    });
    this.value = radios[index].value;
    radios[index].checked = true;
    if (!this.hasButtonGroup) {
      radios[index].tabIndex = 0;
      radios[index].focus();
    } else {
      radios[index].shadowRoot.querySelector("button").focus();
    }
    if (this.value !== oldValue) {
      this.emit("sl-change");
      this.emit("sl-input");
    }
    event.preventDefault();
  }
  handleLabelClick() {
    const radios = this.getAllRadios();
    const checked = radios.find((radio) => radio.checked);
    const radioToFocus = checked || radios[0];
    if (radioToFocus) {
      radioToFocus.focus();
    }
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  async syncRadioElements() {
    var _a, _b;
    const radios = this.getAllRadios();
    await Promise.all(
      // Sync the checked state and size
      radios.map(async (radio) => {
        await radio.updateComplete;
        radio.checked = radio.value === this.value;
        radio.size = this.size;
      })
    );
    this.hasButtonGroup = radios.some((radio) => radio.tagName.toLowerCase() === "sl-radio-button");
    if (!radios.some((radio) => radio.checked)) {
      if (this.hasButtonGroup) {
        const buttonRadio = (_a = radios[0].shadowRoot) == null ? void 0 : _a.querySelector("button");
        if (buttonRadio) {
          buttonRadio.tabIndex = 0;
        }
      } else {
        radios[0].tabIndex = 0;
      }
    }
    if (this.hasButtonGroup) {
      const buttonGroup = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector("sl-button-group");
      if (buttonGroup) {
        buttonGroup.disableRole = true;
      }
    }
  }
  syncRadios() {
    if (customElements.get("sl-radio") && customElements.get("sl-radio-button")) {
      this.syncRadioElements();
      return;
    }
    if (customElements.get("sl-radio")) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined("sl-radio").then(() => this.syncRadios());
    }
    if (customElements.get("sl-radio-button")) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined("sl-radio-button").then(() => this.syncRadios());
    }
  }
  updateCheckedRadio() {
    const radios = this.getAllRadios();
    radios.forEach((radio) => radio.checked = radio.value === this.value);
    this.formControlController.setValidity(this.validity.valid);
  }
  handleSizeChange() {
    this.syncRadios();
  }
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckedRadio();
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";
    if (isRequiredAndEmpty || hasCustomValidityMessage) {
      this.formControlController.emitInvalidEvent();
      return false;
    }
    return true;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    const isValid = this.validity.valid;
    this.errorMessage = this.customValidityMessage || isValid ? "" : this.validationInput.validationMessage;
    this.formControlController.setValidity(isValid);
    this.validationInput.hidden = true;
    clearTimeout(this.validationTimeout);
    if (!isValid) {
      this.validationInput.hidden = false;
      this.validationInput.reportValidity();
      this.validationTimeout = setTimeout(() => this.validationInput.hidden = true, 1e4);
    }
    return isValid;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message = "") {
    this.customValidityMessage = message;
    this.errorMessage = message;
    this.validationInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const defaultSlot = x`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.syncRadios}
        role="presentation"
      ></slot>
    `;
    return x`
      <fieldset
        part="form-control"
        class=${o({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--radio-group": true,
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup ? x`
                <sl-button-group part="button-group" exportparts="base:button-group__base">
                  ${defaultSlot}
                </sl-button-group>
              ` : defaultSlot}
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          ${this.helpText}
        </slot>
      </fieldset>
    `;
  }
};
SlRadioGroup.styles = radio_group_styles_default;
__decorateClass([
  i("slot:not([name])")
], SlRadioGroup.prototype, "defaultSlot", 2);
__decorateClass([
  i(".radio-group__validation-input")
], SlRadioGroup.prototype, "validationInput", 2);
__decorateClass([
  t()
], SlRadioGroup.prototype, "hasButtonGroup", 2);
__decorateClass([
  t()
], SlRadioGroup.prototype, "errorMessage", 2);
__decorateClass([
  t()
], SlRadioGroup.prototype, "defaultValue", 2);
__decorateClass([
  e2()
], SlRadioGroup.prototype, "label", 2);
__decorateClass([
  e2({ attribute: "help-text" })
], SlRadioGroup.prototype, "helpText", 2);
__decorateClass([
  e2()
], SlRadioGroup.prototype, "name", 2);
__decorateClass([
  e2({ reflect: true })
], SlRadioGroup.prototype, "value", 2);
__decorateClass([
  e2({ reflect: true })
], SlRadioGroup.prototype, "size", 2);
__decorateClass([
  e2({ reflect: true })
], SlRadioGroup.prototype, "form", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlRadioGroup.prototype, "required", 2);
__decorateClass([
  watch("size", { waitUntilFirstUpdate: true })
], SlRadioGroup.prototype, "handleSizeChange", 1);
__decorateClass([
  watch("value")
], SlRadioGroup.prototype, "handleValueChange", 1);
SlRadioGroup = __decorateClass([
  e("sl-radio-group")
], SlRadioGroup);

export {
  SlRadioGroup
};
