import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
const uglifyOptions = {
    compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
    }
};
const input = 'src/index.ts';
const plugins = process.env.NODE_ENV === 'prod' ? [typescript(), uglify(uglifyOptions)] : [typescript()]
const config = {
    input,
    output:{
        format: 'umd',
        name: 'UxlUtilities',
        exports: 'named'
    }
};
module.exports = config;