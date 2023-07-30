import '../icon/icon.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlDetails extends ShoelaceElement {
    static styles: CSSResultGroup;
    private readonly localize;
    details: HTMLElement;
    header: HTMLElement;
    body: HTMLElement;
    expandIconSlot: HTMLSlotElement;
    open: boolean;
    summary: string;
    disabled: boolean;
    firstUpdated(): void;
    private handleSummaryClick;
    private handleSummaryKeyDown;
    handleOpenChange(): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-details': SlDetails;
    }
}
