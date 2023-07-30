import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup, HTMLTemplateResult } from 'lit';
export default class SlIcon extends ShoelaceElement {
    static styles: CSSResultGroup;
    private initialRender;
    private resolveIcon;
    private svg;
    name?: string;
    src?: string;
    label: string;
    library: string;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private getUrl;
    handleLabelChange(): void;
    setIcon(): Promise<void>;
    render(): SVGElement | HTMLTemplateResult | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-icon': SlIcon;
    }
}
