import {reduce} from 'ramda';

export const toDictionaryBy: <T = any>(key: string) => (items: T[]) => {[key: string]: T} = key =>  reduce((acc, elem) => acc[elem[key]] = elem, {});
export default toDictionaryBy;