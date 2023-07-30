import {
  SlAlert
} from "./chunk.2JUFVW7V.js";

// src/react/alert/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var alert_default = createComponent({
  tagName: "sl-alert",
  elementClass: SlAlert,
  react: React,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  }
});

export {
  alert_default
};
