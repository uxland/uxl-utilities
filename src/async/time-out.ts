import {AsyncInterface} from "./async-interface";

export const run = (fn: Function, delay: number) => setTimeout(fn, delay);
export const cancel = (handle: number) => window.clearTimeout(handle);
export const after: (delay: number) => AsyncInterface = delay => <AsyncInterface>{run: (callback: Function) => run(callback, delay), cancel};