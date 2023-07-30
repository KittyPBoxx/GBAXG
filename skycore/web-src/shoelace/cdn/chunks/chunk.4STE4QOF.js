import {
  SlInclude
} from "./chunk.MBHS3D7L.js";

// src/react/include/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var include_default = createComponent({
  tagName: "sl-include",
  elementClass: SlInclude,
  react: React,
  events: {
    onSlLoad: "sl-load",
    onSlError: "sl-error"
  }
});

export {
  include_default
};
