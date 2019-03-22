import {isNotNil} from "../../../src";
describe('is not nil fixture', () =>{
    test('null should return false', () =>{
        expect(isNotNil(null)).toBe(false);
    });
    test('undefined should return false', () =>{
        expect(isNotNil(undefined)).toBe(false);
    });
    test('empty string should return true', () =>{
        expect(isNotNil('')).toBe(true)
    });
    test('non empty string should return true', () =>{
        expect(isNotNil('hello')).toBe(true);
    });
    test('number should retrun true', () =>{
        expect(isNotNil(3)).toBe(true);
    });
    test('0 should return true', () =>{
        expect(isNotNil(0)).toBe(true);
    });
    test('empty array should return true', () =>{
        expect(isNotNil([])).toBe(true);
    });
    test('array should return true', () =>{
        expect(isNotNil([1, 2, 3])).toBe(true);
    });
    test('empty object should return true', () =>{

        expect(isNotNil({})).toBe(true);
    });
    test('object should return true', () =>{
        expect(isNotNil({hello: 0})).toBe(true);
    });
    test('NaN should return true', () =>{
        expect(isNotNil(NaN)).toBe(true);
    });

});