import isFunction from './node_modules/lodash.isfunction/index.js';

export function html(strings, ...args) {
    let str = strings[0];
    for (let i = 0; i < args.length; i++) {
        if (isFunction(args[i])) {
            str += args[i]();
        } else if (Array.isArray(args[i])) {
            str += args[i].join('');
        } else {
            str += args[i]
        }
        str += strings[i + 1];
    }

    return str.trimEnd().trimStart();
}