import {spec, Predicate} from '../../src/spec';
import * as sinon from 'sinon';
import {assert} from 'chai';

suite('spec fixture', () =>{

   test('spec test', () =>{
       let stub = sinon.stub().onFirstCall().returns(true).onSecondCall().returns(false);
       let mySpec = spec(stub);
       let result = mySpec(2);
       assert.isTrue(result);
       assert.isTrue(stub.calledOnce);
       result = mySpec(3);
       assert.isFalse(result);
       assert.isTrue(stub.calledTwice);
   });
   test('filter test', () =>{
       const array = [];
       for (let i = 0; i <= 20; i ++)
           array.push(i);

       const predicate: Predicate = (t: any) => t % 2 === 0;
       let mySpec = spec(predicate)
       let filtered = array.filter(mySpec);
       const expected = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18  , 20];
       assert.deepEqual(filtered, expected);
   });
   test('not test', () =>{
      let item1 = {myProperty: 1};
      const sp = spec(x => true);
      assert.exists(sp.not);
      const notSp: any = sp.not();
      assert.isTrue(sp(item1));
      assert.isFalse(notSp(item1));
   });
   test('or test', () =>{
       interface MyInterface{
           p1: number;
           p2: number;
       }
       let item1: MyInterface = {p1: 10, p2: 15};
       let item2: MyInterface = {p1: 11, p2: 17};
       let item3: MyInterface = {p1: 5, p2: 34};
       const sp1 = spec<MyInterface>(x => x.p1 === 10);
       const sp2 = spec<MyInterface>(x => x.p2 === 17);
       const orSpec = sp1.or(sp2);
       assert.exists(sp1.or);
       assert.isTrue(orSpec(item1));
       assert.isTrue(orSpec(item2));
       assert.isFalse(orSpec(item3));
   });
   test('or test is commutative', () =>{
       interface MyInterface{
           p1: number;
           p2: number;
       }
       let item1: MyInterface = {p1: 10, p2: 15};
       let item2: MyInterface = {p1: 11, p2: 17};
       let item3: MyInterface = {p1: 5, p2: 34};
       const sp1 = spec<MyInterface>(x => x.p1 === 10);
       const sp2 = spec<MyInterface>(x => x.p2 === 17);
       let orSpec = sp1.or(sp2);
       assert.isTrue(orSpec(item1));
       assert.isTrue(orSpec(item2));
       assert.isFalse(orSpec(item3));
       orSpec =sp2.or(sp1);
       assert.isTrue(orSpec(item1));
       assert.isTrue(orSpec(item2));
       assert.isFalse(orSpec(item3));
   });
   test('and test', () =>{
       interface MyInterface{
           p1: number;
           p2: number;
       }
       let item1: MyInterface = {p1: 10, p2: 15};
       let item2: MyInterface = {p1: 11, p2: 17};
       let item3: MyInterface = {p1: 5, p2: 34};
       const sp1 = spec<MyInterface>(x => x.p1 === 10);
       assert.exists(sp1.and);
       const sp2 = spec<MyInterface>(x => x.p2 === 15);
       let andSpec = sp1.and(sp2);
       assert.isTrue(andSpec(item1));
       assert.isFalse(andSpec(item2));
       assert.isFalse(andSpec(item3));
       //commutative
       andSpec = sp2.or(sp1);
       assert.isTrue(andSpec(item1));
       assert.isFalse(andSpec(item2));
       assert.isFalse(andSpec(item3));
   });
   test('miscellaneous', () =>{
      interface MyInterface{
          p1: number;
          p2: number;
      }
      const item1: MyInterface = {p1: 10, p2: 20};
       const item2: MyInterface = {p1: 20, p2: 30};
       const item3: MyInterface = {p1: 50, p2: 40};
       const spec1 = spec<MyInterface>(i => i.p1 >= 20);
       const spec2 = spec1.not();
       const spec3 = spec<MyInterface>(i => i.p2 > 30);
       const spec4 = spec1.not();
       const spec5 = spec2.and(spec4);
       assert.isTrue(spec5(item1));
       assert.isFalse(spec5(item2));
       assert.isFalse(spec5(item3));
   });

});