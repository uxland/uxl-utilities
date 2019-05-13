import { Constructor, notEqual } from 'lit-element';
import defaultTo from 'ramda/es/defaultTo';
import pipe from 'ramda/es/pipe';
import { dedupingMixin } from './deduping-mixin';
import { PropertiesObserverMixinFunction } from './types';
const getPropertyComponentComparer = (name: PropertyKey, component: any) =>
  component.constructor._classProperties ? component.constructor._classProperties.get(name).hasChanged : undefined;
const comparer = pipe(
  getPropertyComponentComparer,
  defaultTo(notEqual)
);
export const propertiesObserver: PropertiesObserverMixinFunction = dedupingMixin((superClass: Constructor<any>) => {
  class PropertiesObserverMixin extends superClass {
    _requestUpdate(name?: PropertyKey, oldValue?: any) {
      super._requestUpdate ? super._requestUpdate(name, oldValue) : null;
      if (this[`${String(name)}Changed`]) {
        let current = (<any>this)[name];
        if (comparer(name, this)(current, oldValue)) this[`${String(name)}Changed`](current, oldValue);
      }
    }
    requestUpdate(name?: PropertyKey, oldValue?: any): Promise<unknown> {
      let result = super.requestUpdate ? super.requestUpdate(name, oldValue) : Promise.resolve(null);
      if (!super._requestUpdate) this._requestUpdate(name, oldValue);
      return result;
    }
  }
  return PropertiesObserverMixin;
});
