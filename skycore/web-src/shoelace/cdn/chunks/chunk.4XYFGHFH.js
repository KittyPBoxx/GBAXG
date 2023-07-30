import {
  SlDialog
} from "./chunk.QJW7WFQ4.js";

// src/react/dialog/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var dialog_default = createComponent({
  tagName: "sl-dialog",
  elementClass: SlDialog,
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
  dialog_default
};
