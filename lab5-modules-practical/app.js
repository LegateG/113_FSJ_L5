import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

// Calling the functions and logging results
console.log('Multiply:', multiply(5, 6)); // Testing the default export
console.log('Add: ', add(5, 3));  // Testing add function
console.log('Uppercase: ', toUpperCase('hello'));  // Testing string manipulation
console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Testing findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Testing reverseArray

addAndLogUpper(10, 20);  // Testing the new function
