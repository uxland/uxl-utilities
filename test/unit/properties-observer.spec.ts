import { propertiesObserver } from "../../src/properties-observer";
class A extends propertiesObserver(<any>Object) {
    constructor(private _p1?: string, private _p2?: string){
        super();
    }
    p1Changed(newValue, oldValue) {
    }
    p2Changed(newValue, oldValue) {
    }

    get p1(): string{
        return this._p1;
    }
    set p1(value: string){
        let old = this._p1;
        this._p1 = value;
        this['requestUpdate']('p1', old);
    }
    get p2(): string{
        return this._p2;
    }
    set p2(value: string){
        let old = this._p2;
        this._p2 = value;
        this['requestUpdate']('p2', old);
    }
}

describe('Given an instance of PropertiesObserver mixin', () => {
    it('it should invoke all xxxChanged when changes', () => {
        let a = new A();
        let p1Spy = jest.spyOn(a, 'p1Changed');
        let p2Spy = jest.spyOn(a, 'p2Changed');
        a.p1 = 'hello';
        a.p2 = 'bye';
        expect(p1Spy).toBeCalledWith('hello', undefined);
        expect(p2Spy).toBeCalledWith('bye', undefined)
    });
    it('should invoke only changed properties callbacks', () => {
        let a = new A();
        let p1Spy = jest.spyOn(a, 'p1Changed');
        let p2Spy = jest.spyOn(a, 'p2Changed');
        a.p1 = 'hello';
        expect(p1Spy).toBeCalledWith('hello', undefined);
        expect(p2Spy).not.toBeCalled();
        p1Spy.mockReset();
        p2Spy.mockReset();
        a.p2 = 'bye';
        expect(p2Spy).toBeCalledWith('bye', undefined);
        expect(p1Spy).not.toBeCalled();

    });
    it('should pass old value a second arg', () => {
        let a = new A('old hello', 'old bye');
        let p1Spy = jest.spyOn(a, 'p1Changed');
        let p2Spy = jest.spyOn(a, 'p2Changed');
        a.p1 = 'hello';
        a.p2 = 'bye';
        expect(p1Spy).toBeCalledWith('hello', 'old hello');
        expect(p2Spy).toBeCalledWith('bye', 'old bye');
    });
});
