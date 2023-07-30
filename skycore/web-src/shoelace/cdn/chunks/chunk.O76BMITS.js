import {
    i as i2
  } from "./chunk.WLPF2RC4.js";
  import {
    autocomplete_styles_default
  } from "./chunk.BYLULGCI.js";
  import {
    HasSlotController
  } from "./chunk.3IYPB6RR.js";
  import {
    e,
    e2,
    i,
    t
  } from "./chunk.FNQ57WPJ.js";
  import {
    s,
    y
  } from "./chunk.TL6KDKGI.js";
  import {
    __decorateClass
  } from "./chunk.LKA3TPUC.js";;
  
  // src/components/autocomplete/autocomplete.ts
  var escapeRegExp = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  var SlAutocomplete = class extends s {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "loading-text", "empty-text");
      this.value = "";
      this.hasFocus = false;
      this.loading = false;
      this.autofilter = false;
      this.highlight = false;
      this.threshold = 1;
    }
    handleSlInput(event) {
      const { value } = event.target;
      if (this.autofilter) {
        this.options.forEach((option) => {
          const shouldDisplay = new RegExp(`(${escapeRegExp(value != null ? value : "")})`, "ig").test(option.getTextLabel());
          if (shouldDisplay) {
            option.style.display = "block";
            option.disabled = false;
            option.ariaHidden = "false";
          } else {
            option.style.display = "none";
            option.disabled = true;
            option.ariaHidden = "true";
          }
        });
      }
      this.hasFocus = true;
      this.value = value;
    }
    handleKeydown(event) {
      if (!this.shouldDisplayAutoComplete || event.ctrlKey || event.metaKey) {
        return;
      }
      const options = this.visibleOptions;
      if (options.length === 0) {
        return;
      }
      const firstItem = options[0];
      const lastItem = options[options.length - 1];
      switch (event.key) {
        case "Tab":
        case "Escape":
          this.hasFocus = false;
          break;
        case "ArrowDown":
          event.preventDefault();
          this.menu.setCurrentItem(firstItem);
          firstItem.focus();
          break;
        case "ArrowUp":
          event.preventDefault();
          this.menu.setCurrentItem(lastItem);
          lastItem.focus();
          break;
      }
    }
    handleSlFocus() {
      if (this.value.length >= this.threshold) {
        this.hasFocus = true;
        this.show();
      }
    }
    handleSlAfterHide() {
      this.hasFocus = false;
    }
    show() {
      var _a;
      (_a = this.dropdown) == null ? void 0 : _a.show();
    }
    hide() {
      var _a;
      (_a = this.dropdown) == null ? void 0 : _a.hide();
    }
    reset() {
      this.value = "";
    }
    get options() {
      var _a;
      return ((_a = this.defaultSlot) == null ? void 0 : _a.assignedElements()) || [];
    }
    get visibleOptions() {
      return this.options.filter((option) => option.style.display !== "none");
    }
    get hasResults() {
      return this.visibleOptions.length > 0;
    }
    get shouldDisplayLoadingText() {
      return this.loading && (this.loadingText || this.hasSlotController.test("loading-text"));
    }
    get shouldDisplayEmptyText() {
      return !this.shouldDisplayLoadingText && !this.hasResults && (this.emptyText || this.hasSlotController.test("empty-text"));
    }
    get shouldDisplayAutoComplete() {
      return this.hasFocus && (this.value.length >= this.threshold && this.hasResults || this.shouldDisplayLoadingText || this.shouldDisplayEmptyText);
    }
    render() {
      const { shouldDisplayLoadingText } = this;
      return y`
        <div part="base">
          <div
            part="trigger"
            @sl-focus=${this.handleSlFocus}
            @sl-input=${this.handleSlInput}
            @keydown=${this.handleKeydown}
          >
            <slot name="trigger"></slot>
          </div>
  
          <sl-dropdown ?open=${this.shouldDisplayAutoComplete} @sl-after-hide=${this.handleSlAfterHide}>
            <sl-menu>
              <slot
                aria-hidden=${shouldDisplayLoadingText ? "true" : "false"}
                style="${i2({ display: shouldDisplayLoadingText ? "none" : "block" })}"
              >
              </slot>
  
              <div
                part="loading-text"
                id="loading-text"
                class="loading-text"
                aria-hidden=${shouldDisplayLoadingText ? "false" : "true"}
                style="${i2({ display: shouldDisplayLoadingText ? "block" : "none" })}"
              >
                <slot name="loading-text">${this.loadingText}</slot>
              </div>
  
              <div
                part="empty-text"
                id="empty-text"
                class="empty-text"
                aria-hidden=${this.shouldDisplayEmptyText ? "false" : "true"}
                style="${i2({ display: this.shouldDisplayEmptyText ? "block" : "none" })}"
              >
                <slot name="empty-text">${this.emptyText}</slot>
              </div>
  
              <div aria-hidden="true" style=${i2({ width: `${this.clientWidth}px` })}></div>
            </sl-menu>
          </sl-dropdown>
        </div>
      `;
    }
  };
  SlAutocomplete.styles = autocomplete_styles_default;
  __decorateClass([
    i("sl-menu")
  ], SlAutocomplete.prototype, "menu", 2);
  __decorateClass([
    i("sl-dropdown")
  ], SlAutocomplete.prototype, "dropdown", 2);
  __decorateClass([
    i("slot:not([name])")
  ], SlAutocomplete.prototype, "defaultSlot", 2);
  __decorateClass([
    t()
  ], SlAutocomplete.prototype, "value", 2);
  __decorateClass([
    t()
  ], SlAutocomplete.prototype, "hasFocus", 2);
  __decorateClass([
    e2({ type: String, reflect: true })
  ], SlAutocomplete.prototype, "emptyText", 2);
  __decorateClass([
    e2({ type: Boolean, reflect: true })
  ], SlAutocomplete.prototype, "loading", 2);
  __decorateClass([
    e2({ type: String, reflect: true })
  ], SlAutocomplete.prototype, "loadingText", 2);
  __decorateClass([
    e2({ type: Boolean, reflect: true })
  ], SlAutocomplete.prototype, "autofilter", 2);
  __decorateClass([
    e2({ type: Boolean, reflect: true })
  ], SlAutocomplete.prototype, "highlight", 2);
  __decorateClass([
    e2({ type: Number, reflect: true })
  ], SlAutocomplete.prototype, "threshold", 2);
  SlAutocomplete = __decorateClass([
    e("sl-autocomplete")
  ], SlAutocomplete);
  
  export {
    SlAutocomplete
  };
  