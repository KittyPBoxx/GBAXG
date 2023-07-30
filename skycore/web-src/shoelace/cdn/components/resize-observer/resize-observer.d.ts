import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlResizeObserver extends ShoelaceElement {
    static styles: CSSResultGroup;
    private resizeObserver;
    private observedElements;
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleSlotChange;
    private startObserver;
    private stopObserver;
    handleDisabledChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-resize-observer': SlResizeObserver;
    }
}
