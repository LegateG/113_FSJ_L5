import {toUpperCase} from './stringModule.js';
export function addAndLogUpper(a,b) {
    const result = add(a,b);
    console.log(toUpperCase(result.toString()));
}
export function add(x,y) {
    return x + y;
}
export function subtract(x,y) {
    return x - y;
}
export default function multiply(a, b) {
    return a * b;
}
