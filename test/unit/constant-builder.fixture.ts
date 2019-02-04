import {constantBuilder} from "../../src/constant-builder";
import {assert} from 'chai';
suite('constant builder fixture', () =>{
   test('build', () =>{
       assert.equal(constantBuilder('pre', 'suf', '-')('constant'), 'pre-constant-suf');
       assert.equal(constantBuilder('pre2', 'suf2', '-')('constant2'), 'pre2-constant2-suf2');
   }) ;
   test('use : as default separator', () =>{
       assert.equal(constantBuilder('pre', 'suf')('constant'), 'pre:constant:suf');
       assert.equal(constantBuilder('pre2', 'suf2')('constant2'), 'pre2:constant2:suf2');
   });
   test('not supplied suffix skips last separator', () =>{
       assert.equal(constantBuilder('pre')('constant'), 'pre:constant');
       assert.equal(constantBuilder('pre2')('constant2'), 'pre2:constant2');
   });
});