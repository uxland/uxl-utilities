export  const constantBuilder = (prefix: string, suffix?: string, separator: string = ':') => (name: string) => suffix ? `${prefix}${separator}${name}${separator}${suffix}` : `${prefix}${separator}${name}`;
export default constantBuilder;
