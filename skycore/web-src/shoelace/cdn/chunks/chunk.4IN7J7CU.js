import {
  SlDetails
} from "./chunk.WEMVIQTG.js";

// src/react/details/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var details_default = createComponent({
  tagName: "sl-details",
  elementClass: SlDetails,
  react: React,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  }
});

export {
  details_default
};
