import {
  SlSwitch
} from "./chunk.73SZQ7SV.js";

// src/react/switch/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var switch_default = createComponent({
  tagName: "sl-switch",
  elementClass: SlSwitch,
  react: React,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlInput: "sl-input",
    onSlFocus: "sl-focus",
    onSlInvalid: "sl-invalid"
  }
});

export {
  switch_default
};
