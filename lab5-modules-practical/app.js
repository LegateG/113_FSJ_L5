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
console.log("\n--- Final Challenge ---");
// 1. Find the maximum number in an array.
const challengeArray = [5, 12, 8, 20, 15];
const maxNumber = findMax(challengeArray);
console.log(`Max number in [${challengeArray}] is: ${maxNumber}`);

// 2. Multiply it by a value.
const product = multiply(maxNumber, 10);
console.log(`Result of multiplying by 10 is: ${product}`);

// 3. Convert the result to uppercase.
const finalResult = toUpperCase(product.toString());
console.log(`Final uppercase result is: ${finalResult}`);
