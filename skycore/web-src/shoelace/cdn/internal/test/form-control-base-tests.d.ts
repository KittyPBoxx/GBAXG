import type { ShoelaceFormControl } from '../shoelace-element.js';
export declare function runFormControlBaseTests<T extends ShoelaceFormControl = ShoelaceFormControl>(tagNameOrConfig: string | {
    tagName: string;
    init?: (control: T) => void;
    variantName: string;
}): void;
