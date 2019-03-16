import {AsyncInterface} from "./async-interface";
export const animationFrame: AsyncInterface = {
    cancel: (handle) => window.cancelAnimationFrame(handle),
    run: (callback) => window.requestAnimationFrame(callback as FrameRequestCallback)
};
