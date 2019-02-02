import {Constructor, LitElement} from "lit-element";

export type Predicate<T = any> = <T>(item: T) => boolean;

export interface Spec<T = any> extends Predicate<T>{
    not(): Spec<T>;
    and(other: Spec<T>): Spec<T>;
    or(orher: Spec<T> ): Spec<T>
}
export type MixinFunction<T1 extends Constructor<any> = Constructor<any>, T2 extends Constructor<LitElement> = Constructor<LitElement>>  = (superClass: T2)=> Constructor<T1 & T2>;
export type PropertiesObserverMixinFunction = MixinFunction<any>;