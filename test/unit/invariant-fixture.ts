import {invariant} from '../../src/invariant';
import {assert, expect} from 'chai';
import * as sinon from 'sinon';

suite('when invoking `invariant` method', () => {
    suite('and a value is passed as first argument', () => {
        test('should return undefined if first argument is truthy', () => {
            assert.isUndefined(invariant(true));
            assert.isUndefined(invariant(1));
            assert.isUndefined(invariant({}));
        });
        test('should raise exception if first argument is falsy', () => {
            assert.throws(() => invariant(false));
            assert.throws(() => invariant(0));
            assert.throws(() => invariant(''));
            assert.throws(() => invariant(null));
            assert.throws(() => invariant(undefined));
            assert.throws(() => invariant(NaN));
        });
        test('should set exception message if first argument is false if second argument is supplied', () => {
            expect(() => invariant(false, 'condition false')).to.throw(Error).that.has.property('message').eq('condition false');
            expect(() => invariant(0, 'condition 0')).to.throw(Error).that.has.property('message').eq('condition 0');
            expect(() => invariant('', 'condition empty string')).to.throw(Error).that.has.property('message').eq('condition empty string');
            expect(() => invariant(null, 'condition null')).to.throw(Error).that.has.property('message').eq('condition null');
            expect(() => invariant(undefined, 'condition undefined')).to.throw(Error).that.has.property('message').eq('condition undefined');
            expect(() => invariant(NaN, 'condition NaN')).to.throw(Error).that.has.property('message').eq('condition NaN');
        });
    });
    suite('and a function is passed as first argument', () => {
        test('should invoke function', () => {
            let stub = sinon.stub();
            try {
                invariant(stub);
            } catch (e) {

            }
            assert.isTrue(stub.calledOnceWith());
        });
        test('should raise error if function returns falsy', () => {
            let stub = sinon.stub().onFirstCall().returns(false).onSecondCall().returns(0).onThirdCall().returns('')
                .onCall(4).returns(null).onCall(5).returns(undefined).onCall(6).returns(NaN);
            assert.throws(() => invariant(stub));
            assert.throws(() => invariant(stub));
            assert.throws(() => invariant(stub));
            assert.throws(() => invariant(stub));
            assert.throws(() => invariant(stub));
            assert.throws(() => invariant(stub));
            assert.equal(stub.callCount, 6);
        });
        test('should set exception message if function returns falsy and a second parameter is supplied', () => {
            expect(() => invariant(() => false, 'condition false')).to.throw(Error).that.has.property('message').eq('condition false');
            expect(() => invariant(() => 0, 'condition 0')).to.throw(Error).that.has.property('message').eq('condition 0');
            expect(() => invariant(() => '', 'condition empty string')).to.throw(Error).that.has.property('message').eq('condition empty string');
            expect(() => invariant(() => null, 'condition null')).to.throw(Error).that.has.property('message').eq('condition null');
            expect(() => invariant(()=> undefined, 'condition undefined')).to.throw(Error).that.has.property('message').eq('condition undefined');
            expect(() => invariant(() => NaN, 'condition NaN')).to.throw(Error).that.has.property('message').eq('condition NaN');
        });
        test('should return undefined is function returns truthy', () => {
            const obj = {};
            const func = function(){};
            assert.isUndefined(invariant(() => true));
            assert.isUndefined(invariant(() => 1));
            assert.isUndefined(invariant(() => 'a'));
            assert.isUndefined(invariant(() => obj));
            assert.isUndefined(invariant(() => []));
            assert.isUndefined(invariant(() => func));
        });
    });
});