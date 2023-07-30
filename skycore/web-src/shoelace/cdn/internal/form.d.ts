import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { ShoelaceFormControl } from '../internal/shoelace-element.js';
import type SlButton from '../components/button/button.js';
export declare const formCollections: WeakMap<HTMLFormElement, Set<ShoelaceFormControl>>;
export interface FormControlControllerOptions {
    form: (input: ShoelaceFormControl) => HTMLFormElement | null;
    name: (input: ShoelaceFormControl) => string;
    value: (input: ShoelaceFormControl) => unknown | unknown[];
    defaultValue: (input: ShoelaceFormControl) => unknown | unknown[];
    disabled: (input: ShoelaceFormControl) => boolean;
    reportValidity: (input: ShoelaceFormControl) => boolean;
    setValue: (input: ShoelaceFormControl, value: unknown) => void;
    assumeInteractionOn: string[];
}
export declare class FormControlController implements ReactiveController {
    host: ShoelaceFormControl & ReactiveControllerHost;
    form?: HTMLFormElement | null;
    options: FormControlControllerOptions;
    constructor(host: ReactiveControllerHost & ShoelaceFormControl, options?: Partial<FormControlControllerOptions>);
    hostConnected(): void;
    hostDisconnected(): void;
    hostUpdated(): void;
    private attachForm;
    private detachForm;
    private handleFormData;
    private handleFormSubmit;
    private handleFormReset;
    private handleInteraction;
    private reportFormValidity;
    private setUserInteracted;
    private doAction;
    getForm(): HTMLFormElement | null;
    reset(submitter?: HTMLInputElement | SlButton): void;
    submit(submitter?: HTMLInputElement | SlButton): void;
    setValidity(isValid: boolean): void;
    updateValidity(): void;
    emitInvalidEvent(originalInvalidEvent?: Event): void;
}
export declare const validValidityState: ValidityState;
export declare const valueMissingValidityState: ValidityState;
export declare const customErrorValidityState: ValidityState;
