import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlVisuallyHidden extends ShoelaceElement {
    static styles: CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-visually-hidden': SlVisuallyHidden;
    }
}
