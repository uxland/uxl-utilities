export const collect = (what: any, which: string) => (what ? {...what[which], ...collect(Object.getPrototypeOf(what), which)} :  {});
