import '../checkbox/checkbox.js';
import '../icon/icon.js';
import '../spinner/spinner.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup, PropertyValueMap } from 'lit';
export default class SlTreeItem extends ShoelaceElement {
    static styles: CSSResultGroup;
    static isTreeItem(node: Node): boolean;
    private readonly localize;
    indeterminate: boolean;
    isLeaf: boolean;
    loading: boolean;
    selectable: boolean;
    expanded: boolean;
    selected: boolean;
    disabled: boolean;
    lazy: boolean;
    defaultSlot: HTMLSlotElement;
    childrenSlot: HTMLSlotElement;
    itemElement: HTMLDivElement;
    childrenContainer: HTMLDivElement;
    expandButtonSlot: HTMLSlotElement;
    connectedCallback(): void;
    firstUpdated(): void;
    private animateCollapse;
    private isNestedItem;
    private handleChildrenSlotChange;
    protected willUpdate(changedProperties: PropertyValueMap<SlTreeItem> | Map<PropertyKey, unknown>): void;
    private animateExpand;
    handleLoadingChange(): void;
    handleDisabledChange(): void;
    handleSelectedChange(): void;
    handleExpandedChange(): void;
    handleExpandAnimation(): void;
    handleLazyChange(): void;
    getChildrenItems({ includeDisabled }?: {
        includeDisabled?: boolean;
    }): SlTreeItem[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-tree-item': SlTreeItem;
    }
}
