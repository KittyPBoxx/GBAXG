import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlInclude extends ShoelaceElement {
    static styles: CSSResultGroup;
    src: string;
    mode: 'cors' | 'no-cors' | 'same-origin';
    allowScripts: boolean;
    private executeScript;
    handleSrcChange(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-include': SlInclude;
    }
}
