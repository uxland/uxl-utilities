import {reject, isNil} from 'ramda';
export const rejectNil = reject(isNil);