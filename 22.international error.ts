// Create an array of cities
const cities: string[] = ["New York", "London", "Paris", "Tokyo"];

// Attempt to access an element at an invalid index
const invalidIndex: number = 10; // This index is out of range

try {
  const city = cities[invalidIndex];
  console.log(`City at index ${invalidIndex}: ${city}`);
} catch (error) {
  console.error("An error occurred:", error.message);
}

// Continue with the program
console.log("Program continues after error.");
