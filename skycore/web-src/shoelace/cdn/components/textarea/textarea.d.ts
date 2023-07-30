import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
import type { ShoelaceFormControl } from '../../internal/shoelace-element.js';
export default class SlTextarea extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    private readonly hasSlotController;
    private resizeObserver;
    input: HTMLTextAreaElement;
    private hasFocus;
    title: string;
    name: string;
    value: string;
    size: 'small' | 'medium' | 'large';
    filled: boolean;
    label: string;
    helpText: string;
    placeholder: string;
    rows: number;
    resize: 'none' | 'vertical' | 'auto';
    disabled: boolean;
    readonly: boolean;
    form: string;
    required: boolean;
    minlength: number;
    maxlength: number;
    autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    autocorrect: string;
    autocomplete: string;
    autofocus: boolean;
    enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    spellcheck: boolean;
    inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
    defaultValue: string;
    get validity(): ValidityState;
    get validationMessage(): string;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private handleBlur;
    private handleChange;
    private handleFocus;
    private handleInput;
    private handleInvalid;
    private setTextareaHeight;
    handleDisabledChange(): void;
    handleRowsChange(): void;
    handleValueChange(): Promise<void>;
    focus(options?: FocusOptions): void;
    blur(): void;
    select(): void;
    scrollPosition(position?: {
        top?: number;
        left?: number;
    }): {
        top: number;
        left: number;
    } | undefined;
    setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: 'forward' | 'backward' | 'none'): void;
    setRangeText(replacement: string, start?: number, end?: number, selectMode?: 'select' | 'start' | 'end' | 'preserve'): void;
    checkValidity(): boolean;
    getForm(): HTMLFormElement | null;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-textarea': SlTextarea;
    }
}
