import {
  menu_styles_default
} from "./chunk.QMXSDUJE.js";
import {
  ShoelaceElement,
  e,
  i
} from "./chunk.7FMMWSAC.js";
import {
  x
} from "./chunk.MK2GV4O3.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/menu/menu.ts
var SlMenu = class extends ShoelaceElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "menu");
  }
  handleClick(event) {
    const target = event.target;
    const item = target.closest("sl-menu-item");
    if (!item || item.disabled || item.inert) {
      return;
    }
    if (item.type === "checkbox") {
      item.checked = !item.checked;
    }
    this.emit("sl-select", { detail: { item } });
  }
  handleKeyDown(event) {
    if (event.key === "Enter") {
      const item = this.getCurrentItem();
      event.preventDefault();
      item == null ? void 0 : item.click();
    }
    if (event.key === " ") {
      event.preventDefault();
    }
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      const items = this.getAllItems();
      const activeItem = this.getCurrentItem();
      let index = activeItem ? items.indexOf(activeItem) : 0;
      if (items.length > 0) {
        event.preventDefault();
        if (event.key === "ArrowDown") {
          index++;
        } else if (event.key === "ArrowUp") {
          index--;
        } else if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = items.length - 1;
        }
        if (index < 0) {
          index = items.length - 1;
        }
        if (index > items.length - 1) {
          index = 0;
        }
        this.setCurrentItem(items[index]);
        items[index].focus();
      }
    }
  }
  handleMouseDown(event) {
    const target = event.target;
    if (this.isMenuItem(target)) {
      this.setCurrentItem(target);
    }
  }
  handleSlotChange() {
    const items = this.getAllItems();
    if (items.length > 0) {
      this.setCurrentItem(items[0]);
    }
  }
  isMenuItem(item) {
    var _a;
    return item.tagName.toLowerCase() === "sl-menu-item" || ["menuitem", "menuitemcheckbox", "menuitemradio"].includes((_a = item.getAttribute("role")) != null ? _a : "");
  }
  /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
  getAllItems() {
    return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
      if (el.inert || !this.isMenuItem(el)) {
        return false;
      }
      return true;
    });
  }
  /**
   * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
   * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
   */
  getCurrentItem() {
    return this.getAllItems().find((i2) => i2.getAttribute("tabindex") === "0");
  }
  /**
   * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
   * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
   */
  setCurrentItem(item) {
    const items = this.getAllItems();
    items.forEach((i2) => {
      i2.setAttribute("tabindex", i2 === item ? "0" : "-1");
    });
  }
  render() {
    return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
  }
};
SlMenu.styles = menu_styles_default;
__decorateClass([
  i("slot")
], SlMenu.prototype, "defaultSlot", 2);
SlMenu = __decorateClass([
  e("sl-menu")
], SlMenu);

export {
  SlMenu
};
