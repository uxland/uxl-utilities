import {AsyncInterface} from "./async-interface";
import {timeOut} from "@polymer/polymer/lib/utils/async";
type RequestIdleCallbackHandle = any;
type RequestIdleCallbackOptions = {
    timeout: number;
};
type RequestIdleCallbackDeadline = {
    readonly didTimeout: boolean;
    timeRemaining: (() => number);
};

declare global {
    interface Window {
        requestIdleCallback: ((
            callback: ((deadline: RequestIdleCallbackDeadline) => void),
            opts?: RequestIdleCallbackOptions,
        ) => RequestIdleCallbackHandle);
        cancelIdleCallback: ((handle: RequestIdleCallbackHandle) => void);
    }
}
const idlePeriodImpl: AsyncInterface = {
    cancel: handle => window.cancelIdleCallback(handle),
    run: fn => window.requestIdleCallback(<any>fn)
};
const fakeImpl: AsyncInterface = {
    run: callback => timeOut.run(callback, 16),
    cancel: handle => timeOut.cancel(handle)
};
export const idlePeriod: AsyncInterface =  window && window.requestIdleCallback  && window.cancelIdleCallback ? idlePeriodImpl : fakeImpl;