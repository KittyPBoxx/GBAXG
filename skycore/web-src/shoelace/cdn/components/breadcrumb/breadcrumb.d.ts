import '../icon/icon.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlBreadcrumb extends ShoelaceElement {
    static styles: CSSResultGroup;
    private readonly localize;
    private separatorDir;
    defaultSlot: HTMLSlotElement;
    separatorSlot: HTMLSlotElement;
    label: string;
    private getSeparator;
    private handleSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-breadcrumb': SlBreadcrumb;
    }
}
