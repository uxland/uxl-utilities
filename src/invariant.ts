export type ConditionFactory = () => any;
export const invariant = (condition: any | ConditionFactory, message?: string) =>{
    condition = typeof condition === 'function' ? condition() : condition;
   if(!condition)
       throw new Error(message);
};
