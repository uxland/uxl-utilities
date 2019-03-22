import {reject} from 'ramda';
import isNullOrEmpty from "./is-null-or-empty";
export const rejectNilOrEmpty = reject(isNullOrEmpty);
