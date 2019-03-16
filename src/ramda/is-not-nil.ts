import {isNil,complement} from 'ramda';
export const isNotNil = complement(isNil);
export default isNotNil;