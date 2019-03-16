import {Constructor, PropertyDeclaration} from "lit-element";
import {PropertiesObserverMixinFunction} from "./types";
import {dedupingMixin} from "./deduping-mixin";
import {HasChanged} from "lit-element/src/lib/updating-element";
const notEqual: HasChanged = (value: unknown, old: unknown): boolean => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
export const propertiesObserver: PropertiesObserverMixinFunction = dedupingMixin((superClass: Constructor<any>) => {
    class PropertiesObserverMixin extends superClass{
        _requestPropertyUpdate(name: PropertyKey, oldValue : any, options: PropertyDeclaration = {}){
            if(this[`${String(name)}Changed`]){
                let current = (<any>this)[name];
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
