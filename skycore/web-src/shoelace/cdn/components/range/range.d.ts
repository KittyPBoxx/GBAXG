import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
import type { ShoelaceFormControl } from '../../internal/shoelace-element.js';
export default class SlRange extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    private readonly hasSlotController;
    private readonly localize;
    private resizeObserver;
    input: HTMLInputElement;
    output: HTMLOutputElement | null;
    private hasFocus;
    private hasTooltip;
    title: string;
    name: string;
    value: number;
    label: string;
    helpText: string;
    disabled: boolean;
    min: number;
    max: number;
    step: number;
    tooltip: 'top' | 'bottom' | 'none';
    tooltipFormatter: (value: number) => string;
    form: string;
    defaultValue: number;
    get validity(): ValidityState;
    get validationMessage(): string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleChange;
    private handleInput;
    private handleBlur;
    private handleFocus;
    private handleThumbDragStart;
    private handleThumbDragEnd;
    private syncProgress;
    private syncTooltip;
    handleValueChange(): void;
    handleDisabledChange(): void;
    syncRange(): void;
    private handleInvalid;
    focus(options?: FocusOptions): void;
    blur(): void;
    stepUp(): void;
    stepDown(): void;
    checkValidity(): boolean;
    getForm(): HTMLFormElement | null;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-range': SlRange;
    }
}
