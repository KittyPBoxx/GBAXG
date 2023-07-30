import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlCarouselItem extends ShoelaceElement {
    static styles: CSSResultGroup;
    static isCarouselItem(node: Node): boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-carousel-item': SlCarouselItem;
    }
}
