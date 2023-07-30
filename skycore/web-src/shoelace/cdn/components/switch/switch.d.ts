import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
import type { ShoelaceFormControl } from '../../internal/shoelace-element.js';
export default class SlSwitch extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    input: HTMLInputElement;
    private hasFocus;
    title: string;
    name: string;
    value: string;
    size: 'small' | 'medium' | 'large';
    disabled: boolean;
    checked: boolean;
    defaultChecked: boolean;
    form: string;
    required: boolean;
    get validity(): ValidityState;
    get validationMessage(): string;
    firstUpdated(): void;
    private handleBlur;
    private handleInput;
    private handleInvalid;
    private handleClick;
    private handleFocus;
    private handleKeyDown;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    checkValidity(): boolean;
    getForm(): HTMLFormElement | null;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-switch': SlSwitch;
    }
}
