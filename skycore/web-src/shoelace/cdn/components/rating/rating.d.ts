import '../icon/icon.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlRating extends ShoelaceElement {
    static styles: CSSResultGroup;
    private readonly localize;
    rating: HTMLElement;
    private hoverValue;
    private isHovering;
    label: string;
    value: number;
    max: number;
    precision: number;
    readonly: boolean;
    disabled: boolean;
    getSymbol: (value: number) => string;
    private getValueFromMousePosition;
    private getValueFromTouchPosition;
    private getValueFromXCoordinate;
    private handleClick;
    private setValue;
    private handleKeyDown;
    private handleMouseEnter;
    private handleMouseMove;
    private handleMouseLeave;
    private handleTouchStart;
    private handleTouchMove;
    private handleTouchEnd;
    private roundToPrecision;
    handleHoverValueChange(): void;
    handleIsHoveringChange(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-rating': SlRating;
    }
}
