import { dedupingMixin } from "@polymer/polymer/lib/utils/mixin";
import {notEqual, PropertyDeclaration} from "@polymer/lit-element";

export const propertiesObserver = dedupingMixin(parent =>{
   class mixin extends parent{

       _requestPropertyUpdate(name: string, oldValue : any, options?: PropertyDeclaration){
           if(this[`${name}Changed`]){
               let current = this[name];
               let comparer = (options ? options.hasChanged : notEqual) || notEqual;
               if(comparer(current, oldValue))
                   this[`${name}Changed`](current, oldValue);
           }
           if(super._requestPropertyUpdate)
               super._requestPropertyUpdate(name, oldValue, options);
       }
       requestUpdate(properties: {name:string, old: any}[] = []){
           if(super.requestUpdate)
               return super.requestUpdate();
           properties.forEach(p => this._requestPropertyUpdate(p.name, p.old));
       }
   }
   return (<any>mixin);
});