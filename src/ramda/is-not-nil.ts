import isNil from 'ramda/es/isNil';
import complement from 'ramda/es/complement';
export const isNotNil = complement(isNil);
export default isNotNil;