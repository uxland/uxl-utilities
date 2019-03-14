import {assert} from 'chai';
import isNotEmpty from "../../../src/ramda/is-not-empty";
suite('is not empty fixture', () =>{
    test('null should return true', () =>{
        assert.isTrue(isNotEmpty(null));
    });
    test('undefined should return true', () =>{
        assert.isTrue(isNotEmpty(undefined));
    });
    test('empty string should return false', () =>{
        assert.isFalse(isNotEmpty(''))
    });
    test('non empty string should return true', () =>{
        assert.isTrue(isNotEmpty('hello'));
    });
    test('number should return true', () =>{
        assert.isTrue(isNotEmpty(3));
    });
    test('0 should return true', () =>{
        assert.isTrue(isNotEmpty(0));
    });
    test('empty array should return false', () =>{
        assert.isFalse(isNotEmpty([]));
    });
    test('array should return true', () =>{
        assert.isTrue(isNotEmpty([1, 2, 3]));
    });
    test('empty object should return false', () =>{
        assert.isFalse(isNotEmpty({}));
    });
    test('object should return true', () =>{
        assert.isTrue(isNotEmpty({hello: 0}));
    });
    test('NaN should return true', () =>{
        assert.isTrue(isNotEmpty(NaN));
    });

});