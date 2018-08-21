import { dedupingMixin } from "@polymer/polymer/lib/utils/mixin";
import {PropertiesMixin} from "@polymer/polymer/lib/mixins/properties-mixin";
import {collect} from "./collect";
export const propertiesObserver = dedupingMixin(parent =>{
   class mixin extends PropertiesMixin(parent){
       _initializeProperties(){
           super._initializeProperties();
       }
       _shouldPropertiesChange(currentProps: any, changedProps: any, oldProps: any){
           Object.keys(changedProps).filter(k => this[`${k}Changed`]).forEach(k => this[`${k}Changed`](changedProps[k], oldProps[k]));
           return true;
       }
   }
   return (<any>mixin) as PropertiesMixin;
});