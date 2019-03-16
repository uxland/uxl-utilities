import {constantBuilder} from "../../src/constant-builder";
describe('constant builder fixture', () =>{
   it('build', () =>{
       expect(constantBuilder('pre', 'suf', '-')('constant')).toBe('pre-constant-suf');
       expect(constantBuilder('pre2', 'suf2', '-')('constant2')).toBe( 'pre2-constant2-suf2');
   }) ;
   it('use : as default separator', () =>{
       expect(constantBuilder('pre', 'suf')('constant')).toBe('pre:constant:suf');
       expect(constantBuilder('pre2', 'suf2')('constant2')).toBe('pre2:constant2:suf2');
   });
   it('not supplied suffix skips last separator', () =>{
       expect(constantBuilder('pre')('constant')).toBe('pre:constant');
       expect(constantBuilder('pre2')('constant2')).toBe('pre2:constant2');
   });
});