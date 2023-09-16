// Store the names of your friends in an array
const names: string[] = ["Ali", "Umer", "Uzair", "Umair"];

// Define the common message
const commonMessage: string = "Hello, would you like to hang out this weekend, ";

// Print a personalized message to each person
for (let i = 0; i < names.length; i++) {
  const personalizedMessage: string = commonMessage + names[i] + "?";
  console.log(personalizedMessage);
}
