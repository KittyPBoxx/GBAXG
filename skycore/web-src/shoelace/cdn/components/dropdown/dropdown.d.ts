import '../popup/popup.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
import type SlMenu from '../menu/menu.js';
import type SlPopup from '../popup/popup.js';
export default class SlDropdown extends ShoelaceElement {
    static styles: CSSResultGroup;
    popup: SlPopup;
    trigger: HTMLSlotElement;
    panel: HTMLSlotElement;
    private readonly localize;
    open: boolean;
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    disabled: boolean;
    stayOpenOnSelect: boolean;
    containingElement?: HTMLElement;
    distance: number;
    skidding: number;
    hoist: boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    focusOnTrigger(): void;
    getMenu(): SlMenu | undefined;
    private handleKeyDown;
    private handleDocumentKeyDown;
    private handleDocumentMouseDown;
    private handlePanelSelect;
    handleTriggerClick(): void;
    handleTriggerKeyDown(event: KeyboardEvent): void;
    handleTriggerKeyUp(event: KeyboardEvent): void;
    handleTriggerSlotChange(): void;
    updateAccessibleTrigger(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    reposition(): void;
    addOpenListeners(): void;
    removeOpenListeners(): void;
    handleOpenChange(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-dropdown': SlDropdown;
    }
}
