import multiply,{ add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
 
// Calling the functions and logging results
console.log('Multiply:',multiply(5,6)); // Testing the default export
console.log('Add: ', add(5, 3));  // Testing add function
console.log('Uppercase: ', toUpperCase('hello'));  // Testing string manipulation
console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Testind findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Testing reverseArray

import { addAndLogUpper } from './mathModule.js';
 
addAndLogUpper(10, 20);  // Testing the new function
