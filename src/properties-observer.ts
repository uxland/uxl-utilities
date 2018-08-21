import { dedupingMixin } from "@polymer/polymer/lib/utils/mixin";
import {PropertiesMixin, PropertiesMixinConstructor} from "@polymer/polymer/lib/mixins/properties-mixin";
export const propertiesObserver = dedupingMixin(parent =>{
   class mixin extends PropertiesMixin(parent){
       _shouldPropertiesChange(currentProps: any, changedProps: any, oldProps: any){
           Object.keys(changedProps || {}).filter(k => this[`${k}Changed`]).forEach(k => this[`${k}Changed`](changedProps[k], oldProps ? oldProps[k] : undefined));
           return true;
       }
   }
   return (<any>mixin) as PropertiesMixinConstructor;
});