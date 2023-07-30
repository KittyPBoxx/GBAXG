export declare function clickOnElement(el: Element, position?: 'top' | 'right' | 'bottom' | 'left' | 'center', offsetX?: number, offsetY?: number): Promise<void>;
export declare function moveMouseOnElement(el: Element, position?: 'top' | 'right' | 'bottom' | 'left' | 'center', offsetX?: number, offsetY?: number): Promise<void>;
export declare function dragElement(el: Element, deltaX?: number, deltaY?: number): Promise<void>;
