import '../icon/icon.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlRadio extends ShoelaceElement {
    static styles: CSSResultGroup;
    checked: boolean;
    protected hasFocus: boolean;
    value: string;
    size: 'small' | 'medium' | 'large';
    disabled: boolean;
    constructor();
    connectedCallback(): void;
    private handleBlur;
    private handleClick;
    private handleFocus;
    private setInitialAttributes;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-radio': SlRadio;
    }
}
