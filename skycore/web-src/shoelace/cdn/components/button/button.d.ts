import '../icon/icon.js';
import '../spinner/spinner.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
import type { ShoelaceFormControl } from '../../internal/shoelace-element.js';
export default class SlButton extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    private readonly hasSlotController;
    private readonly localize;
    button: HTMLButtonElement | HTMLLinkElement;
    private hasFocus;
    invalid: boolean;
    title: string;
    variant: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text';
    size: 'small' | 'medium' | 'large';
    caret: boolean;
    disabled: boolean;
    loading: boolean;
    outline: boolean;
    pill: boolean;
    circle: boolean;
    type: 'button' | 'submit' | 'reset';
    name: string;
    value: string;
    href: string;
    target: '_blank' | '_parent' | '_self' | '_top';
    rel: string;
    download?: string;
    form: string;
    formAction: string;
    formEnctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
    formMethod: 'post' | 'get';
    formNoValidate: boolean;
    formTarget: '_self' | '_blank' | '_parent' | '_top' | string;
    get validity(): ValidityState;
    get validationMessage(): string;
    constructor();
    firstUpdated(): void;
    private handleBlur;
    private handleFocus;
    private handleClick;
    private handleHostClick;
    private handleInvalid;
    private isButton;
    private isLink;
    handleDisabledChange(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    checkValidity(): boolean;
    getForm(): HTMLFormElement | null;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-button': SlButton;
    }
}
