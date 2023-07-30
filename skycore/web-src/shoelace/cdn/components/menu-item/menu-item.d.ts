import '../icon/icon.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlMenuItem extends ShoelaceElement {
    static styles: CSSResultGroup;
    private cachedTextLabel;
    defaultSlot: HTMLSlotElement;
    menuItem: HTMLElement;
    type: 'normal' | 'checkbox';
    checked: boolean;
    value: string;
    disabled: boolean;
    constructor();
    private handleDefaultSlotChange;
    private handleHostClick;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
    handleTypeChange(): void;
    getTextLabel(): string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-menu-item': SlMenuItem;
    }
}
