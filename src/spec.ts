import {Spec} from "./types";
export const spec = <T>(predicate: (i: T) => boolean) => {
    const sp: any = (p) => predicate(p);
    sp.not = () => spec(i => !sp(i));
    sp.and = (other: Spec<T>) => spec(i => sp(i) && other(i));
    sp.or = (other: Spec<T>) => spec(i => sp(i) || other(i));
    return sp as Spec<T>;
};
