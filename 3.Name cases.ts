// Store the person's name in a variable
const personName: string = "Ali";

// Convert the name to lowercase
const lowercaseName: string = personName.toLowerCase();

// Convert the name to uppercase
const uppercaseName: string = personName.toUpperCase();

// Convert the name to titlecase
function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const titlecaseName: string = toTitleCase(personName);

// Print the names
console.log(`Original Name: ${personName}`);
console.log(`Lowercase Name: ${lowercaseName}`);
console.log(`Uppercase Name: ${uppercaseName}`);
console.log(`Titlecase Name: ${titlecaseName}`);
