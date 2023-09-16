let a = 5;
let b = 10;
let c = 15;

// Equality and Inequality
console.log("Equality and Inequality Tests:");
console.log("Test 1: a is equal to b.");
console.log(a === b); // False

console.log("Test 2: b is not equal to c.");
console.log(b !== c); // True

// Greater Than and Less Than
console.log("Greater Than and Less Than Tests:");
console.log("Test 3: b is greater than a.");
console.log(b > a); // True

console.log("Test 4: c is less than b.");
console.log(c < b); // True

// Greater Than or Equal To and Less Than or Equal To
console.log("Greater Than or Equal To and Less Than or Equal To Tests:");
console.log("Test 5: a is greater than or equal to 5.");
console.log(a >= 5); // True

console.log("Test 6: b is less than or equal to 10.");
console.log(b <= 10); // True

// Logical AND and OR
console.log("Logical AND and OR Tests:");
console.log("Test 7: a is greater than 3 and b is less than 15.");
console.log(a > 3 && b < 15); // True

console.log("Test 8: a is greater than 10 or c is less than 10.");
console.log(a > 10 || c < 10); // False

// Boolean Not
console.log("Boolean Not Test:");
console.log("Test 9: c is not equal to 20.");
console.log(!(c === 20)); // True

// String Comparison
let name1 = 'Alice';
let name2 = 'Bob';
console.log("String Comparison Test:");
console.log("Test 10: name1 is 'Alice' and name2 is 'Bob'.");
console.log(name1 === 'Alice' && name2 === 'Bob'); // True




// Tests for equality and inequality with strings



let name1 = 'Alice';
let name2 = 'Bob';
let greeting1 = 'Hello, Alice!';
let greeting2 = 'Hello, Bob!';

// Equality Tests with Strings
console.log("Equality Tests with Strings:");
console.log("Test 1: name1 is equal to 'Alice'.");
console.log(name1 === 'Alice'); // True

console.log("Test 2: name1 is not equal to 'Bob'.");
console.log(name1 !== 'Bob'); // True

console.log("Test 3: greeting1 is equal to 'Hello, Alice!'.");
console.log(greeting1 === 'Hello, Alice!'); // True

// Inequality Tests with Strings
console.log("Inequality Tests with Strings:");
console.log("Test 4: name2 is not equal to 'Alice'.");
console.log(name2 !== 'Alice'); // True

console.log("Test 5: greeting2 is not equal to 'Hello, Alice!'.");
console.log(greeting2 !== 'Hello, Alice!'); // True





// Tests using the lower case function



let name1 = 'Alice';
let name2 = 'bob';

// Case-Insensitive Equality Tests with toLowerCase()
console.log("Case-Insensitive Equality Tests with toLowerCase():");
console.log("Test 1: name1 is equal to 'alice' (case-insensitive).");
console.log(name1.toLowerCase() === 'alice'); // True

console.log("Test 2: name2 is equal to 'bob' (case-insensitive).");
console.log(name2.toLowerCase() === 'bob'); // True

// Case-Insensitive Inequality Tests with toLowerCase()
console.log("Case-Insensitive Inequality Tests with toLowerCase():");
console.log("Test 3: name1 is not equal to 'Bob' (case-insensitive).");
console.log(name1.toLowerCase() !== 'Bob'); // True

console.log("Test 4: name2 is not equal to 'ALICE' (case-insensitive).");
console.log(name2.toLowerCase() !== 'ALICE'); // True



//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to



let x = 5;
let y = 10;
let z = 5;

// Equality Tests
console.log("Equality Tests:");
console.log("Test 1: x is equal to z.");
console.log(x === z); // True

console.log("Test 2: x is not equal to y.");
console.log(x !== y); // True

// Greater Than and Less Than Tests
console.log("Greater Than and Less Than Tests:");
console.log("Test 3: x is less than y.");
console.log(x < y); // True

console.log("Test 4: y is greater than z.");
console.log(y > z); // True

// Greater Than or Equal To and Less Than or Equal To Tests
console.log("Greater Than or Equal To and Less Than or Equal To Tests:");
console.log("Test 5: x is greater than or equal to 5.");
console.log(x >= 5); // True

console.log("Test 6: z is less than or equal to 5.");
console.log(z <= 5); // True

// Inequality Tests
console.log("Inequality Tests:");
console.log("Test 7: y is not equal to 10.");
console.log(y !== 10); // False

console.log("Test 8: x is not less than 3.");
console.log(x < 3); // False



// • Tests using "and" and "or" operators

let age = 25;
let hasDriverLicense = true;
let hasCar = false;

// AND Operator (&&) Tests
console.log("AND Operator (&&) Tests:");
console.log("Test 1: Age is greater than or equal to 18 and has a driver's license.");
console.log(age >= 18 && hasDriverLicense); // True

console.log("Test 2: Age is greater than or equal to 18 and has a car.");
console.log(age >= 18 && hasCar); // False

// OR Operator (||) Tests
console.log("OR Operator (||) Tests:");
console.log("Test 3: Age is greater than or equal to 18 or has a driver's license.");
console.log(age >= 18 || hasDriverLicense); // True

console.log("Test 4: Age is greater than or equal to 18 or has a car.");
console.log(age >= 18 || hasCar); // True

// Combined Tests
console.log("Combined Tests:");
console.log("Test 5: Age is between 20 and 30 (inclusive) and has a driver's license.");
console.log(age >= 20 && age <= 30 && hasDriverLicense); // True

console.log("Test 6: Age is less than 18 or has a car.");
console.log(age < 18 || hasCar); // False



//In these tests:

//Tests 1 and 2 use the "AND" operator (&&) to combine conditions. Test 1 evaluates to True when both conditions are met, while Test 2 evaluates to False because one condition is not met.

//Tests 3 and 4 use the "OR" operator (||) to combine conditions. Test 3 evaluates to True when at least one condition is met, and Test 4 evaluates to True because one condition is met.

//Combined Tests 5 and 6 demonstrate more complex conditions that involve both "AND" and "OR" operators. Test 5 evaluates to True when all conditions are met, and Test 6 evaluates to False because one condition is not met.







// • Test whether an item is in a array



const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

console.log("Using includes() Method:");

console.log("Test 1: 'banana' is in the array.");
console.log(fruits.includes('banana')); // True

console.log("Test 2: 'grape' is in the array.");
console.log(fruits.includes('grape')); // False



//using loop;


const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

console.log("Using a Loop:");

let itemToFind = 'banana';
let isFound = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === itemToFind) {
    isFound = true;
    break;
  }
}

console.log(`Test 1: '${itemToFind}' is in the array.`);
console.log(isFound); // True

itemToFind = 'grape';
isFound = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === itemToFind) {
    isFound = true;
    break;
  }
}

console.log(`Test 2: '${itemToFind}' is in the array.`);
console.log(isFound); // False


//In both examples:

//Test 1 checks if 'banana' is in the array, and it evaluates to True because 'banana' is present in the fruits array.

//Test 2 checks if 'grape' is in the array, and it evaluates to False because 'grape' is not present in the fruits array.




// • Test whether an item is not in a array


//using include method;
const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

console.log("Using includes() Method:");

console.log("Test 1: 'banana' is not in the array.");
console.log(!fruits.includes('banana')); // False

console.log("Test 2: 'grape' is not in the array.");
console.log(!fruits.includes('grape')); // True



//using loop;
const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

console.log("Using a Loop:");

let itemToFind = 'banana';
let isNotFound = true;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === itemToFind) {
    isNotFound = false;
    break;
  }
}

console.log(`Test 1: '${itemToFind}' is not in the array.`);
console.log(isNotFound); // False

itemToFind = 'grape';
isNotFound = true;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === itemToFind) {
    isNotFound = false;
    break;
  }
}

console.log(`Test 2: '${itemToFind}' is not in the array.`);
console.log(isNotFound); // True


//In these examples:

//Test 1 checks if 'banana' is not in the array and evaluates to False because 'banana' is present in the fruits array.

//Test 2 checks if 'grape' is not in the array and evaluates to True because 'grape' is not present in the fruits array.