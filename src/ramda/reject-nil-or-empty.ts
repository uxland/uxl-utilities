import reject from 'ramda/es/reject';
import isNullOrEmpty from "./is-null-or-empty";
export const rejectNilOrEmpty = reject(isNullOrEmpty);
export default rejectNilOrEmpty;