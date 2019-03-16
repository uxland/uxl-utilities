export interface AsyncInterface {
    cancel: (handle: number) => void;
    run: (callback: () => any, delay?: number) => number;
}