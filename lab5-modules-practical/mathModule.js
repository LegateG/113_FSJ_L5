import {toUpperCase} from './stringModule.js';
export function add(x,y) {
    return x + y;
}
export function subtract(x,y) {
    return x - y;
}
export default function multiply(x, y) {
    return x * y;
}
export function addAndLogUpper(x,y) {
    const result = add(x,y);
    console.log(`Uppercase result of addAndLogUpper: ${toUpperCase(result.toString())}`);
}
