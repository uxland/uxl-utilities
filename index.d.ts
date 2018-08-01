declare module 'uxl-utilities/constant-builder' {
	export const constantBuilder: (prefix: string, suffix?: string, separator?: string) => (name: string) => string;

}
declare module 'uxl-utilities/import-href' {
	export const importHref: <T = any>(href: string) => Promise<T>;

}
declare module 'uxl-utilities/invariant' {
	export type ConditionFactory = () => any;
	export const invariant: (condition: any, message?: string) => void;

}
declare module 'uxl-utilities/spec' {
	export type Predicate<T = any> = <T>(item: T) => boolean;
	export interface Spec<T = any> extends Predicate<T> {
	    not(): Spec<T>;
	    and(other: Spec<T>): Spec<T>;
	    or(orher: Spec<T>): Spec<T>;
	}
	export const spec: <T>(predicate: (i: T) => boolean) => Spec<T>;

}
declare module 'uxl-utilities' {
	export * from 'uxl-utilities/constant-builder';
	export * from 'uxl-utilities/import-href';
	export * from 'uxl-utilities/invariant';
	export * from 'uxl-utilities/spec';

}
