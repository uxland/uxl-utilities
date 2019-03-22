import {AsyncInterface} from "./async-interface";
import {timeOut} from "./time-out";
export class Debouncer {
    constructor(private asyncModule: AsyncInterface = null, private callback: Function = null, private handle: number = null) {
    }
    /**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */
    setConfig(asyncModule: AsyncInterface, callback: Function) {
        this.asyncModule = asyncModule;
        this.callback = callback;
        this.handle = this.asyncModule.run(() => {
            this.handle = null;
            this.callback();
        });
    }
    /**
     * Cancels an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */
    cancel() {
        if (this.isActive()) {
            this.asyncModule.cancel(this.handle);
            this.handle = null;
        }
    }
    /**
     * Flushes an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */
    flush() {
        if (this.isActive()) {
            this.cancel();
            this.callback();
        }
    }
    /**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */
    isActive() {
        return this.handle != null;
    }
    /**
     * Creates a debouncer if no debouncer is passed as a parameter
     * or it cancels an active debouncer otherwise. The following
     * example shows how a debouncer can be called multiple times within a
     * microtask and "debounced" such that the provided callback function is
     * called once. Add this method to a custom element:
     *
     * ```js
     * import {microTask} from '@polymer/polymer/lib/utils/async.js';
     * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
     * // ...
     *
     * _debounceWork() {
     *   this._debounceJob = Debouncer.debounce(this._debounceJob,
     *       microTask, () => this._doWork());
     * }
     * ```
     *
     * If the `_debounceWork` method is called multiple times within the same
     * microtask, the `_doWork` function will be called only once at the next
     * microtask checkpoint.
     *
     * Note: In testing it is often convenient to avoid asynchrony. To accomplish
     * this with a debouncer, you can use `enqueueDebouncer` and
     * `flush`. For example, extend the above example by adding
     * `enqueueDebouncer(this._debounceJob)` at the end of the
     * `_debounceWork` method. Then in a test, call `flush` to ensure
     * the debouncer has completed.
     *
     * @param {Debouncer?} debouncer Debouncer object.
     * @param {!AsyncInterface} asyncModule Object with Async interface
     * @param {function()} callback Callback to run.
     * @return {!Debouncer} Returns a debouncer object.
     */
    static debounce(debouncer: Debouncer, asyncModule: AsyncInterface, callback: Function) {
        if (debouncer instanceof Debouncer) {
            debouncer.cancel();
        } else {
            debouncer = new Debouncer();
        }
        debouncer.setConfig(asyncModule, callback);
        return debouncer;
    }
}
export const debounce: (delay: number) => MethodDecorator = delay => (target, propertyKey, descriptor) => {
    let desc = descriptor as any;
    let originalCall: Function = desc.value;
    desc.value = (...args: any[]) => this.debouncer = Debouncer.debounce(this.debouncer, timeOut.after(delay), originalCall.apply(args));
};