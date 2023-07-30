import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlButtonGroup extends ShoelaceElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    disableRole: boolean;
    label: string;
    private handleFocus;
    private handleBlur;
    private handleMouseOver;
    private handleMouseOut;
    private handleSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-button-group': SlButtonGroup;
    }
}
