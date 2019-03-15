export interface AsyncInterface {
    run: (callback: Function, delay?: number) => number;
    cancel: (handle: number) => void;
}