import {collect} from "../../src/collect";

describe('When invoking collect method', () =>{

    it('it should return an Object withe the result', () =>{
        class Component{
            static get props(){
                return {
                    p1:{

                    },
                    p2: 'hello'
                }
            }
        }

        let result = collect(Component, 'props');
        expect(result).toEqual({p1: {}, p2: 'hello'});
    });
    it('it should return all properties in prototype chain', () =>{
        class A {
            static get props(): any{
                return {
                    p1:{

                    },
                    p2: 'hello'
                }
            }
        }

        class B extends A{
            static get props(): any{
                return{
                    p3:{

                    },
                    p4: 'bye'
                }
            }
        }

        class C extends B{
            static get props(){
                return {
                    p5:{

                    },
                    p6: 'bye bye'
                }
            }
        }
        let result = collect(C, 'props');
        expect(result).toEqual({p1: {}, p2: 'hello', p3: {}, p4: 'bye', p5: {}, p6:'bye bye'});
    })
})