import {AsyncInterface} from "./async-interface";

const run = (fn: Function, delay: number) => setTimeout(fn, delay);
const cancel = (handle: number) => window.clearTimeout(handle);
const after: (delay: number) => AsyncInterface = delay => <AsyncInterface>{run: (callback: Function) => run(callback, delay), cancel};
export const timeOut={
    after,
    cancel,
    run
};