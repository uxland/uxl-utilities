import {isEmpty, reject} from 'ramda';
export const rejectEmpty = reject(isEmpty);
