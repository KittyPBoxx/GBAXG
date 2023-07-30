import '../icon/icon.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import type { CSSResultGroup } from 'lit';
export default class SlCarousel extends ShoelaceElement {
    static styles: CSSResultGroup;
    loop: boolean;
    navigation: boolean;
    pagination: boolean;
    autoplay: boolean;
    autoplayInterval: number;
    slidesPerPage: number;
    slidesPerMove: number;
    orientation: 'horizontal' | 'vertical';
    mouseDragging: boolean;
    defaultSlot: HTMLSlotElement;
    scrollContainer: HTMLElement;
    paginationContainer: HTMLElement;
    activeSlide: number;
    private autoplayController;
    private scrollController;
    private readonly slides;
    private intersectionObserver;
    private readonly intersectionObserverEntries;
    private readonly localize;
    private mutationObserver;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    private getPageCount;
    private getCurrentPage;
    private getSlides;
    private handleKeyDown;
    private handleScrollEnd;
    private handleSlotChange;
    initializeSlides(): void;
    handelSlideChange(): void;
    handleSlidesPerMoveChange(): void;
    handleAutoplayChange(): void;
    handleMouseDraggingChange(): void;
    previous(behavior?: ScrollBehavior): void;
    next(behavior?: ScrollBehavior): void;
    goToSlide(index: number, behavior?: ScrollBehavior): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-carousel': SlCarousel;
    }
}
