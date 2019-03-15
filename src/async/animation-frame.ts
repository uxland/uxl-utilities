import {AsyncInterface} from "./async-interface";
export const animationFrame: AsyncInterface = {
    run: callback => window.requestAnimationFrame(<FrameRequestCallback>callback),
    cancel: handle => window.cancelAnimationFrame(handle)
};
