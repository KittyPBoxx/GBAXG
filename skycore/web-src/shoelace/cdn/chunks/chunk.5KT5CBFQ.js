import {
  SlMenu
} from "./chunk.OBYEYU4S.js";

// src/react/menu/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var menu_default = createComponent({
  tagName: "sl-menu",
  elementClass: SlMenu,
  react: React,
  events: {
    onSlSelect: "sl-select"
  }
});

export {
  menu_default
};
