import '../icon/icon.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlImageComparer extends ShoelaceElement {
    static styles: CSSResultGroup;
    private readonly localize;
    base: HTMLElement;
    handle: HTMLElement;
    position: number;
    private handleDrag;
    private handleKeyDown;
    handlePositionChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-image-comparer': SlImageComparer;
    }
}
