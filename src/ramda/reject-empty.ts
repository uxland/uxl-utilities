import isEmpty from 'ramda/es/isEmpty';
import reject from 'ramda/es/reject';
export const rejectEmpty = reject(isEmpty);
export default rejectEmpty;