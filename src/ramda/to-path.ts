import {split,when, is, Path} from 'ramda';
const pathSplit = split('.');
export const toPath: (path: string | Path) => Path = when(is(String), pathSplit);
