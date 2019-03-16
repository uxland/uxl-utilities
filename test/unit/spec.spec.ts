import {spec} from '../../src/spec';
interface Item{
    p1: number,
    p2: number;
}
describe('spec fixture', () =>{

   it('spec test', () =>{

       let stub = jest.fn().mockReturnValueOnce(true).mockReturnValueOnce(false);
       let mySpec = spec(stub);
       let result = mySpec(2);
       expect(result).toBe(true);
       expect(stub).toHaveBeenCalledTimes(1)
       result = mySpec(3);
       expect(result).toBe(false);
       expect(stub).toHaveBeenCalledTimes(2);
   });
    it('filter test', () =>{
       const array = [];
       for (let i = 0; i <= 20; i ++)
           array.push(i);

       const predicate = (t) => t % 2 === 0;
       let mySpec = spec(predicate)
       let filtered = array.filter(mySpec);
       const expected = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18  , 20];
       expect(filtered).toEqual(expected);
   });
    it('not test', () =>{
      let item1 = {myProperty: 1};
      const sp = spec<Item>(x => true);
      expect(sp.not).toBeDefined();
      const notSp = sp.not();
      expect(sp(item1)).toBe(true);
      expect(notSp(item1)).toBe(false);
   });
    it('or test', () =>{
       let item1 = {p1: 10, p2: 15};
       let item2 = {p1: 11, p2: 17};
       let item3 = {p1: 5, p2: 34};
       const sp1 = spec<Item>(x => x.p1 === 10);
       const sp2 = spec<Item>(x => x.p2 === 17);
       const orSpec = sp1.or(sp2);
        expect(sp1.or).toBeDefined();
       expect(orSpec(item1)).toBe(true);
       expect(orSpec(item2)).toBe(true);
       expect(orSpec(item3)).toBe(false);
   });
    it('or test is commutative', () =>{
       let item1 = {p1: 10, p2: 15};
       let item2 = {p1: 11, p2: 17};
       let item3 = {p1: 5, p2: 34};
       const sp1 = spec<Item>(x => x.p1 === 10);
       const sp2 = spec<Item>(x => x.p2 === 17);
       let orSpec = sp1.or(sp2);
        expect(orSpec(item1)).toBe(true);
        expect(orSpec(item2)).toBe(true);
        expect(orSpec(item3)).toBe(false);
       orSpec =sp2.or(sp1);
        expect(orSpec(item1)).toBe(true);
        expect(orSpec(item2)).toBe(true);
        expect(orSpec(item3)).toBe(false);
   });
    it('and test', () =>{
       let item1 = {p1: 10, p2: 15};
       let item2 = {p1: 11, p2: 17};
       let item3 = {p1: 5, p2: 34};
       const sp1 = spec(x => x.p1 === 10);
       expect(sp1).toBeDefined();
       const sp2 = spec(x => x.p2 === 15);
       let andSpec = sp1.and(sp2);
       expect(andSpec(item1)).toBe(true);
       expect(andSpec(item2)).toBe(false);
       expect(andSpec(item3));
       //commutative
       andSpec = sp2.or(sp1);
       expect(andSpec(item1)).toBe(true);
        expect(andSpec(item2)).toBe(false);
        expect(andSpec(item3)).toBe(false);
   });
    it('miscellaneous', () =>{

      const item1 = {p1: 10, p2: 20};
       const item2 = {p1: 20, p2: 30};
       const item3 = {p1: 50, p2: 40};
       const spec1 = spec(i => i.p1 >= 20);
       const spec2 = spec1.not();
       const spec3 = spec(i => i.p2 > 30);
       const spec4 = spec1.not();
       const spec5 = spec2.and(spec4);
       expect(spec5(item1)).toBe(true);
       expect(spec5(item2)).toBe(false);
       expect(spec5(item3)).toBe(false);
   });

});