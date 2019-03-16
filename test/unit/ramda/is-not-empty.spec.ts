import isNotEmpty from "../../../src/ramda/is-not-empty";
describe('is not empty fixture', () =>{
    it('null should return true', () =>{
        expect(isNotEmpty(null)).toBe(true);
    });
    test('undefined should return true', () =>{
        expect(isNotEmpty(undefined)).toBe(true);
    });
    test('empty string should return false', () =>{
       expect(isNotEmpty('')).toBe(false)
    });
    test('non empty string should return true', () =>{
        expect(isNotEmpty('hello')).toBe(true);
    });
    test('number should return true', () =>{
        expect(isNotEmpty(3)).toBe(true);
    });
    test('0 should return true', () =>{
        expect(isNotEmpty(0)).toBe(true);
    });
    test('empty array should return false', () =>{
        expect(isNotEmpty([])).toBe(false);
    });
    test('array should return true', () =>{
        expect(isNotEmpty([1, 2, 3])).toBe(true);
    });
    test('empty object should return false', () =>{
        expect(isNotEmpty({})).toBe(false);
    });
    test('object should return true', () =>{
        expect(isNotEmpty({hello: 0})).toBe(true);
    });
    test('NaN should return true', () =>{
        expect(isNotEmpty(NaN)).toBe(true);
    });

});