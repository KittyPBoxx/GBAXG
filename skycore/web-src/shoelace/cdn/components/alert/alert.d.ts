import '../icon-button/icon-button.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlAlert extends ShoelaceElement {
    static styles: CSSResultGroup;
    private autoHideTimeout;
    private readonly hasSlotController;
    private readonly localize;
    base: HTMLElement;
    open: boolean;
    closable: boolean;
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    duration: number;
    firstUpdated(): void;
    private restartAutoHide;
    private handleCloseClick;
    private handleMouseMove;
    handleOpenChange(): Promise<void>;
    handleDurationChange(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    toast(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-alert': SlAlert;
    }
}
