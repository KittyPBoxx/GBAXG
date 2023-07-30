import {
  SlIcon
} from "./chunk.RBNIZVNI.js";

// src/react/icon/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var icon_default = createComponent({
  tagName: "sl-icon",
  elementClass: SlIcon,
  react: React,
  events: {
    onSlLoad: "sl-load",
    onSlError: "sl-error"
  }
});

export {
  icon_default
};
