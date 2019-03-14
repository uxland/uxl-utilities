import isNotNil from "./is-not-nil";
import isNotEmpty from "./is-not-empty";
import anyPass from 'ramda/es/anyPass'
export const isNullOrEmpty = anyPass([isNotNil, isNotEmpty]);
export default isNullOrEmpty;