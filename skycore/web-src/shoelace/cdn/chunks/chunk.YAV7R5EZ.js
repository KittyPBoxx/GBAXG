import {
  component_styles_default
} from "./chunk.PUTE7EHI.js";
import {
  i
} from "./chunk.MK2GV4O3.js";

// src/components/tab-panel/tab-panel.styles.ts
var tab_panel_styles_default = i`
  ${component_styles_default}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;

export {
  tab_panel_styles_default
};
