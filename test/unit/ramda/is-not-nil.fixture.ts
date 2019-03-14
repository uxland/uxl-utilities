import {assert} from 'chai';
import isNotNil from "../../../src/ramda/is-not-nil";
suite('is not nil fixture', () =>{
    test('null should return false', () =>{
        assert.isFalse(isNotNil(null));
    });
    test('undefined should return false', () =>{
        assert.isFalse(isNotNil(undefined));
    });
    test('empty string should return true', () =>{
        assert.isTrue(isNotNil(''))
    });
    test('non empty string should return true', () =>{
        assert.isTrue(isNotNil('hello'));
    });
    test('number should retrun true', () =>{
        assert.isTrue(isNotNil(3));
    });
    test('0 should retrun true', () =>{
        assert.isTrue(isNotNil(0));
    });
    test('empty array should return true', () =>{
        assert.isTrue(isNotNil([]));
    });
    test('array should return true', () =>{
        assert.isTrue(isNotNil([1, 2, 3]));
    });
    test('empty object should return true', () =>{
        assert.isTrue(isNotNil({}));
    });
    test('object should return true', () =>{
        assert.isTrue(isNotNil({hello: 0}));
    });
    test('NaN should return true', () =>{
        assert.isTrue(isNotNil(NaN));
    });

});