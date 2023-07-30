import '../icon-button/icon-button.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlTab extends ShoelaceElement {
    static styles: CSSResultGroup;
    private readonly localize;
    private readonly attrId;
    private readonly componentId;
    tab: HTMLElement;
    panel: string;
    active: boolean;
    closable: boolean;
    disabled: boolean;
    connectedCallback(): void;
    private handleCloseClick;
    handleActiveChange(): void;
    handleDisabledChange(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-tab': SlTab;
    }
}
