import isNotNil from "./is-not-nil";
import isNotEmpty from "./is-not-empty";
import allPass from 'ramda/es/allPass';
export const isNotNullNeitherEmpty = allPass([isNotNil, isNotEmpty]);
export default isNotNullNeitherEmpty;