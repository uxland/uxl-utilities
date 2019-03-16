import {isEmpty, complement} from 'ramda';
export const isNotEmpty = complement(isEmpty);
export default isNotEmpty;