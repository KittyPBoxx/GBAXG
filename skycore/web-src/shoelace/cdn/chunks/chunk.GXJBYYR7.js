import {
  SlDrawer
} from "./chunk.LPLBONGT.js";

// src/react/drawer/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var drawer_default = createComponent({
  tagName: "sl-drawer",
  elementClass: SlDrawer,
  react: React,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide",
    onSlInitialFocus: "sl-initial-focus",
    onSlRequestClose: "sl-request-close"
  }
});

export {
  drawer_default
};
