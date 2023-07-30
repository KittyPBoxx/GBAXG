import {
  SlRadio
} from "./chunk.7OAN2SVN.js";

// src/react/radio/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var radio_default = createComponent({
  tagName: "sl-radio",
  elementClass: SlRadio,
  react: React,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus"
  }
});

export {
  radio_default
};
