let tsNode = require('ts-node');
tsNode.register({all: true});
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><head><script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script></head><html><body></body></html>', {
    url: 'http://localhost'
});
const { window } = jsdom;

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce((result, prop) => ({
            ...result,
            [prop]: Object.getOwnPropertyDescriptor(src, prop),
        }), {});
    Object.defineProperties(target, props);
}
window.customElements = {define: name => {}, whenDefined: () => Promise.resolve()};

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
copyProps(window, global);
console.log('jsdom set up');
const mo = require('mutation-observer/index.js');
window.MutationObserver = mo;
global.MutationObserver = mo;
const raf = require('raf');
window.requestAnimationFrame = raf;
global.requestAnimationFrame = raf;
require('@webcomponents/custom-elements/custom-elements.min.js');
global.customElements = window.customElements;
global.JSCompiler_renameProperty = a => a;
//const esm = require('esm');
//esm(module, {cjs: true, esm: 'ts'});
