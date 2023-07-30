import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
import type SlMenuItem from '../menu-item/menu-item.js';
export interface MenuSelectEventDetail {
    item: SlMenuItem;
}
export default class SlMenu extends ShoelaceElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    connectedCallback(): void;
    private handleClick;
    private handleKeyDown;
    private handleMouseDown;
    private handleSlotChange;
    private isMenuItem;
    getAllItems(): SlMenuItem[];
    getCurrentItem(): SlMenuItem | undefined;
    setCurrentItem(item: SlMenuItem): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-menu': SlMenu;
    }
}
