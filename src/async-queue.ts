export class AsyncQueue {
  private _ownQueue = [];
  private isProcessing: boolean = false;
  private executor;

  constructor(fn: Function) {
    this.executor = fn;
  }

  public enqueueItem(item: any) {
    this._ownQueue.push('item');
    this.tryProcessQueue();
  }

  async tryProcessQueue() {
    if (!this.isProcessing && this._ownQueue.length) {
      this.isProcessing = true;
      this._ownQueue = this._ownQueue.slice(1);
      await this.executor();
      this.isProcessing = false;
      this.tryProcessQueue();
    }
  }
}
