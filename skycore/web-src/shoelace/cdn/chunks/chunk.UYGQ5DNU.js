import {
  SlButton
} from "./chunk.WEYTB5UW.js";

// src/react/button/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var button_default = createComponent({
  tagName: "sl-button",
  elementClass: SlButton,
  react: React,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus",
    onSlInvalid: "sl-invalid"
  }
});

export {
  button_default
};
