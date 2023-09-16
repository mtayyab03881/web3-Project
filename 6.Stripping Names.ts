// Store the person's name with whitespace characters
const personNameWithWhitespace: string = "\t\n Ali \t\n";

// Print the name with whitespace
console.log("Name with Whitespace:");
console.log(`"${personNameWithWhitespace}"`);

// Remove the whitespace and print the name again
const personNameStripped: string = personNameWithWhitespace.trim();
console.log("\nName Stripped of Whitespace:");
console.log(`"${personNameStripped}"`);
