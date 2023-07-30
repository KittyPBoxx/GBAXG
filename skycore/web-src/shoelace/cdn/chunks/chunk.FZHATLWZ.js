import {
  SlTreeItem
} from "./chunk.K7IYIODS.js";

// src/react/tree-item/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var tree_item_default = createComponent({
  tagName: "sl-tree-item",
  elementClass: SlTreeItem,
  react: React,
  events: {
    onSlExpand: "sl-expand",
    onSlAfterExpand: "sl-after-expand",
    onSlCollapse: "sl-collapse",
    onSlAfterCollapse: "sl-after-collapse",
    onSlLazyChange: "sl-lazy-change",
    onSlLazyLoad: "sl-lazy-load"
  }
});

export {
  tree_item_default
};
