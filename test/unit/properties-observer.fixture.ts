/*
import { assert } from 'chai';
import { propertiesObserver } from "../../src/properties-observer";
import * as sinon from 'sinon';
class A extends propertiesObserver(Object) {
    p1Changed(newValue, oldValue) {
    }
    p2Changed(newValue, oldValue) {
    }
}
let a = new A();
let p1Spy = sinon.spy(a, 'p1Changed');
let p2Spy = sinon.spy(a, 'p2Changed');
suite('Given an instance of PropertiesObserver mixin', () => {
    test('it should invoke all xxxChanged when changes', () => {
        let a = new A();
        let p1Spy = sinon.spy(a, 'p1Changed');
        let p2Spy = sinon.spy(a, 'p2Changed');
        a._shouldPropertiesChange(a, { p1: 'hello', p2: 'bye' }, null);
        assert.isTrue(p1Spy.calledOnceWith('hello', undefined));
        assert.isTrue(p2Spy.calledOnceWith('bye', undefined));
    });
    test('should invoke only changed properties callbacks', () => {
        let a = new A();
        let p1Spy = sinon.spy(a, 'p1Changed');
        let p2Spy = sinon.spy(a, 'p2Changed');
        a._shouldPropertiesChange(a, { p1: 'hello' }, null);
        assert.isTrue(p1Spy.calledOnceWith('hello', undefined));
        assert.isFalse(p2Spy.called);
        p1Spy.resetHistory();
        p2Spy.resetHistory();
        a._shouldPropertiesChange(a, { p2: 'bye' }, null);
        assert.isTrue(p2Spy.calledOnceWith('bye', undefined));
        assert.isFalse(p1Spy.called);
    });
    test('should pass old value a second arg', () => {
        let a = new A();
        let p1Spy = sinon.spy(a, 'p1Changed');
        let p2Spy = sinon.spy(a, 'p2Changed');
        a._shouldPropertiesChange(a, { p1: 'hello', p2: 'bye' }, { p1: 'old hello', p2: 'old bye' });
        assert.isTrue(p1Spy.calledOnceWith('hello', 'old hello'));
        assert.isTrue(p2Spy.calledOnceWith('bye', 'old bye'));
    });
});
//# sourceMappingURL=properties-observer-fixture.js.map*/
