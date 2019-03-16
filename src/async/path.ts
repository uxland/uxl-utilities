import {Path, path as rPath} from 'ramda'
import {toRamdaPath} from "./to-ramda-path";
export const path = (path: string | Path) => rPath(toRamdaPath(path));