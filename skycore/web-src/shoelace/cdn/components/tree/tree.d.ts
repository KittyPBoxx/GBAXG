import ShoelaceElement from '../../internal/shoelace-element.js';
import SlTreeItem from '../tree-item/tree-item.js';
import type { CSSResultGroup } from 'lit';
export default class SlTree extends ShoelaceElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    expandedIconSlot: HTMLSlotElement;
    collapsedIconSlot: HTMLSlotElement;
    selection: 'single' | 'multiple' | 'leaf';
    private lastFocusedItem;
    private readonly localize;
    private mutationObserver;
    private clickTarget;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    private getExpandButtonIcon;
    private initTreeItem;
    private handleTreeChanged;
    private syncTreeItems;
    private selectItem;
    private getAllTreeItems;
    private focusItem;
    private handleKeyDown;
    private handleClick;
    handleMouseDown(event: MouseEvent): void;
    private handleFocusOut;
    private handleFocusIn;
    private handleSlotChange;
    handleSelectionChange(): Promise<void>;
    get selectedItems(): SlTreeItem[];
    getFocusableItems(): SlTreeItem[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-tree': SlTree;
    }
}
