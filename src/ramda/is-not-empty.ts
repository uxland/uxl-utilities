import isEmpty from 'ramda/es/isEmpty';
import complement from 'ramda/es/complement';
export const isNotEmpty = complement(isEmpty);
export default isNotEmpty;