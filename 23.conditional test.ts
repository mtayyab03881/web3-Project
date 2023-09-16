let car = 'subaru';
let age = 18;
let color = 'blue';
let isRaining = true;

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is age >= 18? I predict True.");
console.log(age >= 18);

console.log("Is color != 'red'? I predict True.");
console.log(color != 'red');

console.log("Is isRaining === true? I predict True.");
console.log(isRaining === true);

console.log("Is age < 16? I predict False.");
console.log(age < 16);

console.log("Is color == 'green'? I predict False.");
console.log(color == 'green');

console.log("Is isRaining === false? I predict False.");
console.log(isRaining === false);



//   Look closely at your results, and make sure you understand why each line evaluates to True or False.


Absolutely! Let's go through each line and explain why it evaluates to `True` or `False`:

1. `console.log(car == 'subaru')`: This line checks if the value of the variable `car` is equal to the string `'subaru'`. If `car` contains `'subaru'`, it evaluates to `True`. Otherwise, it's `False`.

2. `console.log(age >= 18)`: This line checks if the value of the variable `age` is greater than or equal to `18`. If `age` is `18` or greater, it evaluates to `True`. Otherwise, it's `False`.

3. `console.log(color != 'red')`: This line checks if the value of the variable `color` is not equal to the string `'red'`. If `color` is anything other than `'red'`, it evaluates to `True`. If `color` is `'red'`, it's `False`.

4. `console.log(isRaining === true)`: This line checks if the value of the variable `isRaining` is strictly equal (`===`) to `true`. If `isRaining` is `true`, it evaluates to `True`. If `isRaining` is any other value (e.g., `false`, `0`, `undefined`), it's `False`.

5. `console.log(age < 16)`: This line checks if the value of the variable `age` is less than `16`. If `age` is less than `16`, it evaluates to `True`. Otherwise, it's `False`.

6. `console.log(color == 'green')`: Similar to the first line, this checks if the value of the variable `color` is equal to the string `'green'`. If `color` contains `'green'`, it evaluates to `True`. Otherwise, it's `False`.

7. `console.log(isRaining === false)`: This line checks if the value of the variable `isRaining` is strictly equal to `false`. If `isRaining` is `false`, it evaluates to `True`. If `isRaining` is any other value, it's `False`.

Each line compares the value of a variable to a specific condition and returns `True` if the condition is met and `False` otherwise. Understanding these comparisons is crucial when working with conditional logic in programming.






//  Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.




let x = 5;
let y = 10;
let name = 'Alice';
let isSunny = true;
let isEven = false;

// Tests that evaluate to True
console.log("Test 1: x is equal to 5.");
console.log(x === 5); // True

console.log("Test 2: y is greater than 8.");
console.log(y > 8); // True

console.log("Test 3: name is 'Alice'.");
console.log(name === 'Alice'); // True

console.log("Test 4: It is sunny outside.");
console.log(isSunny === true); // True

console.log("Test 5: 10 is an even number.");
console.log(10 % 2 === 0); // True

// Tests that evaluate to False
console.log("Test 6: x is not equal to 3.");
console.log(x !== 3); // False

console.log("Test 7: y is less than or equal to 5.");
console.log(y <= 5); // False

console.log("Test 8: name is 'Bob'.");
console.log(name === 'Bob'); // False

console.log("Test 9: It is raining outside.");
console.log(isSunny === false); // False

console.log("Test 10: 7 is an even number.");
console.log(7 % 2 === 0); // False

// In these tests:

//Tests 1, 2, 3, 4, and 5 evaluate to True because the conditions are met.

//ests 6, 7, 8, 9, and 10 evaluate to False because the conditions are not met.