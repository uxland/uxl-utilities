import {toPath} from "../../../src";
import {is} from  'ramda';
describe('toPath test suite', () =>{
    it('should return an array of paths when argument is an string path', () =>{
        let aux = is(String, 'foo.bar.baz');
        expect(toPath('foo.bar.baz')).toEqual(['foo', 'bar', 'baz']);
    });
    it('should return same input if an array is passed as argument', () =>{
        const path = ['foo', 'bar', 'baz'];
        expect(toPath(path)).toBe(path);
    });

});