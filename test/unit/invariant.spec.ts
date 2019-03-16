import {invariant} from '../../src/invariant';

describe('when invoking `invariant` method', () => {
    describe('and a value is passed as first argument', () => {
        it('should return undefined if first argument is truthy', () => {
            expect(invariant(true)).toBeUndefined();
            expect(invariant(1)).toBeUndefined();
            expect(invariant({})).toBeUndefined();
        });
        it('should raise exception if first argument is falsy', () => {
            expect(() => invariant(false)).toThrow();
            expect(() => invariant(0));
            expect(() => invariant('')).toThrow;
            expect(() => invariant(null)).toThrow;
            expect(() => invariant(undefined)).toThrow;
            expect(() => invariant(NaN)).toThrow;
        });
        it('should set exception message if first argument is false if second argument is supplied', () => {
            expect(() => invariant(false, 'condition false')).toThrow('condition false');
            expect(() => invariant(0, 'condition 0')).toThrow('condition 0');
            expect(() => invariant('', 'condition empty string')).toThrow('condition empty string');
            expect(() => invariant(null, 'condition null')).toThrow('condition null');
            expect(() => invariant(undefined, 'condition undefined')).toThrow('condition undefined');
            expect(() => invariant(NaN, 'condition NaN')).toThrow('condition NaN');
        });
    });
    describe('and a function is passed as first argument', () => {
        it('should invoke function', () => {
            let stub = jest.fn();
            try {
                invariant(stub);
            } catch (e) {

            }
            expect(stub).toHaveBeenCalledTimes(1);
        });
        it('should raise error if function returns falsy', () => {
            let stub = jest.fn().mockReturnValueOnce(false).mockReturnValueOnce(0).mockReturnValueOnce('')
                .mockReturnValueOnce(null).mockReturnValueOnce(undefined).mockReturnValueOnce(NaN);
            expect(() => invariant(stub)).toThrow();
            expect(() => invariant(stub)).toThrow();
            expect(() => invariant(stub)).toThrow();
            expect(() => invariant(stub)).toThrow();
            expect(() => invariant(stub)).toThrow();
            expect(() => invariant(stub)).toThrow();
            expect(stub).toHaveBeenCalledTimes(6);
        });
        it('should set exception message if function returns falsy and a second parameter is supplied', () => {
            expect(() => invariant(() => false, 'condition false')).toThrow('condition false');
            expect(() => invariant(() => 0, 'condition 0')).toThrow('condition 0');
            expect(() => invariant(() => '', 'condition empty string')).toThrow('condition empty string');
            expect(() => invariant(() => null, 'condition null')).toThrow('condition null');
            expect(() => invariant(()=> undefined, 'condition undefined')).toThrow('condition undefined');
            expect(() => invariant(() => NaN, 'condition NaN')).toThrow('condition NaN');
        });
        it('should return undefined is function returns truthy', () => {
            const obj = {};
            const func = function(){};
            expect(invariant(() => true)).toBeUndefined();
            expect(invariant(() => 1));
            expect(invariant(() => 'a'));
            expect(invariant(() => obj));
            expect(invariant(() => []));
            expect(invariant(() => func));
        });
    });
});