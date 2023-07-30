import '../button-group/button-group.js';
import { FormControlController } from '../../internal/form.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
import type { ShoelaceFormControl } from '../../internal/shoelace-element.js';
export default class SlRadioGroup extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    protected readonly formControlController: FormControlController;
    private readonly hasSlotController;
    private customValidityMessage;
    private validationTimeout;
    defaultSlot: HTMLSlotElement;
    validationInput: HTMLInputElement;
    private hasButtonGroup;
    private errorMessage;
    defaultValue: string;
    label: string;
    helpText: string;
    name: string;
    value: string;
    size: 'small' | 'medium' | 'large';
    form: string;
    required: boolean;
    get validity(): ValidityState;
    get validationMessage(): string;
    connectedCallback(): void;
    firstUpdated(): void;
    private getAllRadios;
    private handleRadioClick;
    private handleKeyDown;
    private handleLabelClick;
    private handleInvalid;
    private syncRadioElements;
    private syncRadios;
    private updateCheckedRadio;
    handleSizeChange(): void;
    handleValueChange(): void;
    checkValidity(): boolean;
    getForm(): HTMLFormElement | null;
    reportValidity(): boolean;
    setCustomValidity(message?: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-radio-group': SlRadioGroup;
    }
}
