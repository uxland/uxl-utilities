
export type Predicate<T = any> = <T>(item: T) => boolean;
export interface Spec<T = any> extends Predicate<T>{
    not(): Spec<T>;
    and(other: Spec<T>): Spec<T>;
    or(orher: Spec<T> ): Spec<T>
}

export const spec = <T>(predicate: (i: T) => boolean) => {
    const sp: any = (p) => predicate(p);
    sp.not = () => spec(i => !sp(i));
    sp.and = (other: Spec<T>) => spec(i => sp(i) && other(i));
    sp.or = (other: Spec<T>) => spec(i => sp(i) || other(i));
    return sp as Spec<T>;
};
