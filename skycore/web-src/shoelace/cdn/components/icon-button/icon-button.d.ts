import '../icon/icon.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlIconButton extends ShoelaceElement {
    static styles: CSSResultGroup;
    button: HTMLButtonElement | HTMLLinkElement;
    private hasFocus;
    name?: string;
    library?: string;
    src?: string;
    href?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    download?: string;
    label: string;
    disabled: boolean;
    private handleBlur;
    private handleFocus;
    private handleClick;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-icon-button': SlIconButton;
    }
}
