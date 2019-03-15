import {AsyncInterface} from "./async-interface";

let microtaskCurrHandle = 0;
let microtaskLastHandle = 0;
let microtaskCallbacks = [];
let microtaskNodeContent = 0;
let microtaskNode = document.createTextNode('');
if(MutationObserver)
    new MutationObserver(microtaskFlush).observe(microtaskNode, {characterData: true});
function microtaskFlush() {
    const len = microtaskCallbacks.length;
    for (let i = 0; i < len; i++) {
        let cb = microtaskCallbacks[i];
        if (cb) {
            try {
                cb();
            } catch (e) {
                setTimeout(() => { throw e; });
            }
        }
    }
    microtaskCallbacks.splice(0, len);
    microtaskLastHandle += len;
}

export const microTask: AsyncInterface = {

    /**
     * Enqueues a function called at microtask timing.
     *
     * @memberof microTask
     * @param {!Function=} callback Callback to run
     * @return {number} Handle used for canceling task
     */
    run(callback) {
        microtaskNode.textContent = (microtaskNodeContent++).toString();
        microtaskCallbacks.push(callback);
        return microtaskCurrHandle++;
    },

    /**
     * Cancels a previously enqueued `microTask` callback.
     *
     * @memberof microTask
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel(handle) {
        const idx = handle - microtaskLastHandle;
        if (idx >= 0) {
            if (!microtaskCallbacks[idx]) {
                throw new Error('invalid async handle: ' + handle);
            }
            microtaskCallbacks[idx] = null;
        }
    }

};
