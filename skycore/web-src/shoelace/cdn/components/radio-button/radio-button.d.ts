import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlRadioButton extends ShoelaceElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    input: HTMLInputElement;
    hiddenInput: HTMLInputElement;
    protected hasFocus: boolean;
    checked: boolean;
    value: string;
    disabled: boolean;
    size: 'small' | 'medium' | 'large';
    pill: boolean;
    connectedCallback(): void;
    private handleBlur;
    private handleClick;
    private handleFocus;
    handleDisabledChange(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-radio-button': SlRadioButton;
    }
}
