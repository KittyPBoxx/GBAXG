import '../button-group/button-group.js';
import '../button/button.js';
import '../dropdown/dropdown.js';
import '../icon/icon.js';
import '../input/input.js';
import '../visually-hidden/visually-hidden.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
import type { ShoelaceFormControl } from '../../internal/shoelace-element.js';
import type SlDropdown from '../dropdown/dropdown.js';
import type SlInput from '../input/input.js';
export default class SlColorPicker extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    private isSafeValue;
    private readonly localize;
    base: HTMLElement;
    input: SlInput;
    dropdown: SlDropdown;
    previewButton: HTMLButtonElement;
    trigger: HTMLButtonElement;
    private hasFocus;
    private isDraggingGridHandle;
    private isEmpty;
    private inputValue;
    private hue;
    private saturation;
    private brightness;
    private alpha;
    value: string;
    defaultValue: string;
    label: string;
    format: 'hex' | 'rgb' | 'hsl' | 'hsv';
    inline: boolean;
    size: 'small' | 'medium' | 'large';
    noFormatToggle: boolean;
    name: string;
    disabled: boolean;
    hoist: boolean;
    opacity: boolean;
    uppercase: boolean;
    swatches: string | string[];
    form: string;
    required: boolean;
    get validity(): ValidityState;
    get validationMessage(): string;
    constructor();
    firstUpdated(): void;
    private handleCopy;
    private handleFocusIn;
    private handleFocusOut;
    private handleFormatToggle;
    private handleAlphaDrag;
    private handleHueDrag;
    private handleGridDrag;
    private handleAlphaKeyDown;
    private handleHueKeyDown;
    private handleGridKeyDown;
    private handleInputChange;
    private handleInputInput;
    private handleInputKeyDown;
    private handleInputInvalid;
    private handleTouchMove;
    private parseColor;
    private setColor;
    private setLetterCase;
    private syncValues;
    private handleAfterHide;
    private handleEyeDropper;
    private selectSwatch;
    private getHexString;
    private stopNestedEventPropagation;
    handleFormatChange(): void;
    handleOpacityChange(): void;
    handleValueChange(oldValue: string | undefined, newValue: string): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    getFormattedValue(format?: 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsv' | 'hsva'): string;
    checkValidity(): boolean;
    getForm(): HTMLFormElement | null;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-color-picker': SlColorPicker;
    }
}
