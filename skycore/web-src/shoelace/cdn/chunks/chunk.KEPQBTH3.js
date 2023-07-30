import {
  SlAnimation
} from "./chunk.VGYDPENE.js";

// src/react/animation/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var animation_default = createComponent({
  tagName: "sl-animation",
  elementClass: SlAnimation,
  react: React,
  events: {
    onSlCancel: "sl-cancel",
    onSlFinish: "sl-finish",
    onSlStart: "sl-start"
  }
});

export {
  animation_default
};
