import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlBadge extends ShoelaceElement {
    static styles: CSSResultGroup;
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    pill: boolean;
    pulse: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-badge': SlBadge;
    }
}
