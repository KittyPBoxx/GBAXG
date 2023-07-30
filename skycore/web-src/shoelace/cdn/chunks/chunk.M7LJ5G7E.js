import {
  SlCheckbox
} from "./chunk.HNXSQUGO.js";

// src/react/checkbox/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var checkbox_default = createComponent({
  tagName: "sl-checkbox",
  elementClass: SlCheckbox,
  react: React,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  }
});

export {
  checkbox_default
};
