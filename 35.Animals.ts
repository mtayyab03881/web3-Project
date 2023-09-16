let animals = ["Dog", "Cat", "Rabbit"];

// Loop to print statements about each animal
for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  let statement;

  // Print a statement about each animal
  if (animal === "Dog") {
    statement = "A dog would make a great pet.";
  } else if (animal === "Cat") {
    statement = "A cat is a lovely companion.";
  } else if (animal === "Rabbit") {
    statement = "A rabbit can be a cute and fluffy friend.";
  }

  console.log(statement);
}

// Print a sentence about what they have in common
console.log("Any of these animals would make a great pet!");





