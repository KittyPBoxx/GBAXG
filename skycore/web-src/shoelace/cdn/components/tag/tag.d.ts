import '../icon-button/icon-button.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlTag extends ShoelaceElement {
    static styles: CSSResultGroup;
    private readonly localize;
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text';
    size: 'small' | 'medium' | 'large';
    pill: boolean;
    removable: boolean;
    private handleRemoveClick;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-tag': SlTag;
    }
}
