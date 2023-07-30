import '../icon/icon.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlOption extends ShoelaceElement {
    static styles: CSSResultGroup;
    private cachedTextLabel;
    private readonly localize;
    defaultSlot: HTMLSlotElement;
    current: boolean;
    selected: boolean;
    hasHover: boolean;
    value: string;
    disabled: boolean;
    connectedCallback(): void;
    private handleDefaultSlotChange;
    private handleMouseEnter;
    private handleMouseLeave;
    handleDisabledChange(): void;
    handleSelectedChange(): void;
    handleValueChange(): void;
    getTextLabel(): string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-option': SlOption;
    }
}
