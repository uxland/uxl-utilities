const { JSDOM } = require('jsdom');


const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
//@ts-ignore
const { window } = jsdom;

function copyProps(src, target) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target),
    });
}
//@ts-ignore
global.window = window;
//@ts-ignore
global.document = window.document;
//@ts-ignore
global.navigator = {
    userAgent: 'node.js',
};

//@ts-ignore
global.requestAnimationFrame = function (callback) {
    return setTimeout(callback, 0);
};
//@ts-ignore
global.cancelAnimationFrame = function (id) {
    clearTimeout(id);
};
copyProps(window, global);


const mo = require('mutation-observer');
window['MutationObserver'] = mo;
//@ts-ignore
global.MutationObserver = mo;