import { dedupingMixin } from "@polymer/polymer/lib/utils/mixin";
import {notEqual, PropertyDeclaration} from "@polymer/lit-element";

export const propertiesObserver = dedupingMixin(parent =>{
   class mixin extends parent{

       _requestPropertyUpdate(name: string, oldValue : any, options: PropertyDeclaration){
           if(this[`${name}Changed`]){
               let current = this[name];
               let comparer = (options ? options.hasChanged : notEqual) || notEqual;
               if(comparer(current, oldValue))
                   this[`${name}Changed`](current, oldValue);
           }
       }
   }
   return (<any>mixin);
});