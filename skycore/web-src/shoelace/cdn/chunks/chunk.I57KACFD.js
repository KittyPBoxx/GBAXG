import {
  SlAnimatedImage
} from "./chunk.XEG4BIXL.js";

// src/react/animated-image/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var animated_image_default = createComponent({
  tagName: "sl-animated-image",
  elementClass: SlAnimatedImage,
  react: React,
  events: {
    onSlLoad: "sl-load",
    onSlError: "sl-error"
  }
});

export {
  animated_image_default
};
