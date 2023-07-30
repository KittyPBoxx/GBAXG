import '../popup/popup.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
import type SlPopup from '../popup/popup.js';
export default class SlTooltip extends ShoelaceElement {
    static styles: CSSResultGroup;
    private hoverTimeout;
    private readonly localize;
    defaultSlot: HTMLSlotElement;
    body: HTMLElement;
    popup: SlPopup;
    content: string;
    placement: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
    disabled: boolean;
    distance: number;
    open: boolean;
    skidding: number;
    trigger: string;
    hoist: boolean;
    constructor();
    connectedCallback(): void;
    firstUpdated(): void;
    private handleBlur;
    private handleClick;
    private handleFocus;
    private handleKeyDown;
    private handleMouseOver;
    private handleMouseOut;
    private hasTrigger;
    handleOpenChange(): Promise<void>;
    handleOptionsChange(): Promise<void>;
    handleDisabledChange(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-tooltip': SlTooltip;
    }
}
