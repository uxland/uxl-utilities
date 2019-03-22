import isNotNil from "./is-not-nil";
import isNotEmpty from "./is-not-empty";
import {allPass} from 'ramda';
export const isNotNullNeitherEmpty = allPass([isNotNil, isNotEmpty]);
