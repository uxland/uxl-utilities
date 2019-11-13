export class AsyncQueue {
  private _ownQueue = [];
  private isProcessing: boolean = false;
  private executor: Function;

  constructor(fn: Function) {
    this.executor = fn;
  }

  public enqueueItem(...args: any[]) {
    this._ownQueue.push([...args]);
    this.tryProcessQueue();
  }

  async tryProcessQueue() {
    if (!this.isProcessing && this._ownQueue.length) {
      this.isProcessing = true;
      let args = this._ownQueue.pop();
      await this.executor.apply(undefined, [...args]);
      this.isProcessing = false;
      this.tryProcessQueue();
    }
  }
}
