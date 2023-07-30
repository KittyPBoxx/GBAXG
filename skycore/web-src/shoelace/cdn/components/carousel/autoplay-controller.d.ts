import type { ReactiveController, ReactiveElement } from 'lit';
export declare class AutoplayController implements ReactiveController {
    private host;
    private timerId;
    private tickCallback;
    private activeInteractions;
    paused: boolean;
    stopped: boolean;
    constructor(host: ReactiveElement, tickCallback: () => void);
    hostConnected(): void;
    hostDisconnected(): void;
    start(interval: number): void;
    stop(): void;
    pause: () => void;
    resume: () => void;
}
