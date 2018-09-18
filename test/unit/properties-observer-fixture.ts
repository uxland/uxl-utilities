import {assert} from 'chai';
import {propertiesObserver} from "../../src/properties-observer";
import * as sinon from 'sinon';
class A extends propertiesObserver(Object){
    p1: string;
    p2: string;
    p1Changed(){

    }
    p2Changed(){

    }
}

suite('Given an instance of PropertiesObserver mixin', () =>{
    test('it should invoke all xxxChanged when changes', () =>{
        let a = new A();
        a.p1 = 'hello';
        let p1Spy = sinon.spy(a, 'p1Changed');

        a._requestPropertyUpdate('p1', undefined);
        assert.isTrue(p1Spy.calledOnceWith('hello',undefined));
    });
    test('should invoke only changed properties callbacks', () =>{
        let a = new A();
        a.p1 = 'hello';
        a.p2 = 'bye';

        let p1Spy = sinon.spy(a, 'p1Changed');
        let p2Spy = sinon.spy(a, 'p2Changed');
        //a._shouldPropertiesChange(a, {p1:'hello'}, null);
        a._requestPropertyUpdate('p1', 'old hello');
        a._requestPropertyUpdate('p2', 'bye');
        assert.isTrue(p1Spy.calledOnceWith('hello', 'old hello'));
        assert.isFalse(p2Spy.called);
        p1Spy.resetHistory();
        p2Spy.resetHistory();
        a._requestPropertyUpdate('p1', 'hello');
        a._requestPropertyUpdate('p2', 'old bye');
        assert.isTrue(p2Spy.calledOnceWith('bye', 'old bye'));
        assert.isFalse(p1Spy.called);

    });
});