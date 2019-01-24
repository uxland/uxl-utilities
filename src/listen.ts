interface EventHandler {
    node: EventTarget;
    handler: (e) => void;
    eventName: string;
}
function addReadyHandler(proto: any) {
    if (proto.__readyHandlerAdded)
        return;
    const disconnectCallback = proto.disconnectCallback;
    const updated = proto.updated;
    proto.__unsubscribeFromListeners = function(){
        let handlers: EventHandler[] = this.__listenersEventHandlers || [];
        handlers.forEach(handler => handler.node.removeEventListener(handler.eventName, handler.handler));
        this.__listenersEventHandlers = [];
    };
    proto.__subscribeToListeners = function(){
        this.__unsubscribeFromListeners();
        let handlers = [];
        (proto.__listeners || []).forEach(v => {
            let nodes = [];
            if (typeof v.target === 'string') {
                let queryResult = this.shadowRoot.querySelectorAll(v.target);
                queryResult.forEach(n => nodes.push(n));
                queryResult = this.querySelectorAll(v.target);
                queryResult.forEach(n => nodes.push(n));
            }
            else
                nodes.push(v.target);
            nodes.forEach(node => {
                let handler = { eventName: v.eventName, node, handler: ((e) => this[v.functionKey](e)).bind(this) };
                node.addEventListener(v.eventName, handler.handler);
                handlers.push(handler);
            });
        });
        this.__listenersEventHandlers = handlers;
    };
    proto.updated = function(changedProperties){
        if(updated)
            updated.call(this, changedProperties);
        this.__subscribeToListeners();
    };
    proto.disconnectCallback = function(){
        if(disconnectCallback)
            disconnectCallback.call(this);
        this.__unsubscribeFromListeners();
    };

    proto.__readyHandlerAdded = true;
}

export function listen(eventName: string, target?: string | EventTarget) {
    return (proto: any, functionKey: any) => {
        addReadyHandler(proto);
        if (proto.__listeners) {
            proto.__listeners.push({ target, functionKey, eventName });
            return;
        }

        proto.__listeners = [{ target, functionKey, eventName }];
    };
}