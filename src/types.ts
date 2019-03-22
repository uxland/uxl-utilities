import {Constructor, LitElement} from "lit-element";

export type MixinFunction<T1 extends Constructor<any> = Constructor<any>, T2 extends Constructor<LitElement> = Constructor<LitElement>>  = (superClass: T2)=> Constructor<T1 & T2>;
export type PropertiesObserverMixinFunction = MixinFunction<any>;