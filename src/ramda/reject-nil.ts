import reject from 'ramda/es/reject';
import isNil from 'ramda/es/isNil';
export const rejectNil = reject(isNil);