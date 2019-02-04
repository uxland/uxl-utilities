import { dedupingMixin } from "@polymer/polymer/lib/utils/mixin";
import {Constructor, LitElement, notEqual, PropertyDeclaration} from "lit-element";
import {PropertiesObserverMixinFunction} from "./types";

export const propertiesObserver: PropertiesObserverMixinFunction = dedupingMixin((superClass: Constructor<LitElement>) => {
    class PropertiesObserverMixin extends superClass{
        _requestPropertyUpdate(name: PropertyKey, oldValue : any, options: PropertyDeclaration = {}){
            if(this[`${String(name)}Changed`]){
                let current = this[name];
                let comparer = options.hasChanged || notEqual;
                if(comparer(current, oldValue))
                    this[`${String(name)}Changed`](current, oldValue);
            }
            // @ts-ignore
            super.__requestPropertyUpdate && super._requestPropertyUpdate(name, oldValue, options);

        }
        requestUpdate(name?: PropertyKey, oldValue?: any): Promise<unknown> {
            let result = super.requestUpdate ? super.requestUpdate(name, oldValue) : Promise.resolve(null);
            this._requestPropertyUpdate(name, oldValue);
            return result;
        }
    }
    return PropertiesObserverMixin;
});
