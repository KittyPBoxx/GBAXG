import {
  component_styles_default
} from "./chunk.PUTE7EHI.js";
import {
  i
} from "./chunk.MK2GV4O3.js";

// src/components/menu/menu.styles.ts
var menu_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;

export {
  menu_styles_default
};
