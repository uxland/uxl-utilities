import {Path, when, is, split} from "ramda";
export const toRamdaPath = (path: string | Path) => when(is(String), split('.'))(path);