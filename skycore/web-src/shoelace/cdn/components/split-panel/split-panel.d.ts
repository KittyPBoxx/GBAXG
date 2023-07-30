import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlSplitPanel extends ShoelaceElement {
    static styles: CSSResultGroup;
    private cachedPositionInPixels;
    private readonly localize;
    private resizeObserver;
    private size;
    divider: HTMLElement;
    position: number;
    positionInPixels: number;
    vertical: boolean;
    disabled: boolean;
    primary?: 'start' | 'end';
    snap?: string;
    snapThreshold: number;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private detectSize;
    private percentageToPixels;
    private pixelsToPercentage;
    private handleDrag;
    private handleKeyDown;
    private handleResize;
    handlePositionChange(): void;
    handlePositionInPixelsChange(): void;
    handleVerticalChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-split-panel': SlSplitPanel;
    }
}
