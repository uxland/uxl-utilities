import isNotNil from "./is-not-nil";
import isNotEmpty from "./is-not-empty";
import {anyPass} from 'ramda'
export const isNullOrEmpty = anyPass([isNotNil, isNotEmpty]);
