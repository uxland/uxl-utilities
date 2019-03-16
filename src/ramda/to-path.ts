import {split,when, Path, is} from 'ramda';
const pathSplit = split('.');
export const toPath: (path: string | Path) => Path = when(is(String), pathSplit);
export default toPath;