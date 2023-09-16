// Create a list of people to invite to dinner
const dinnerGuests: string[] = ["Alia", "Umer", "Areeb"];

// Find out that one of the guests can't make it
const guestWhoCantMakeIt: string = "Umer";

// Determine the replacement guest
const replacementGuest: string = "Sara";

// Replace the guest who can't make it with the replacement guest
const indexOfGuestWhoCantMakeIt: number = dinnerGuests.indexOf(guestWhoCantMakeIt);

if (indexOfGuestWhoCantMakeIt !== -1) {
  dinnerGuests[indexOfGuestWhoCantMakeIt] = replacementGuest;
}

// Send out new invitations
console.log("First Set of Invitations:");
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner at my place this Saturday at 7 PM. We hope to see you there!`);
});

// Additional guests to invite
const additionalGuests: string[] = ["Habib", "Anaam", "Waseem"];

// Add the additional guests to the original guest list
dinnerGuests.push(...additionalGuests);

// Send out invitations to the additional guests
console.log("\nInvitations to Additional Guests:");
additionalGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner at my place this Saturday at 7 PM. We have more space now and would love to have you join us!`);
});

// Inform about the bigger dinner table
console.log("\nGreat news! We've found a bigger dinner table, so there's plenty of space for everyone!");


//
Certainly! You can add a print statement at the end of your program to inform people that you found a bigger dinner table. Here's the modified code:

typescript
Copy code
// Create a list of people to invite to dinner
const dinnerGuests: string[] = ["Alia", "Umer", "Areeb"];

// Find out that one of the guests can't make it
const guestWhoCantMakeIt: string = "Umer";

// Determine the replacement guest
const replacementGuest: string = "Sara";

// Replace the guest who can't make it with the replacement guest
const indexOfGuestWhoCantMakeIt: number = dinnerGuests.indexOf(guestWhoCantMakeIt);

if (indexOfGuestWhoCantMakeIt !== -1) {
  dinnerGuests[indexOfGuestWhoCantMakeIt] = replacementGuest;
}

// Send out new invitations
console.log("First Set of Invitations:");
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner at my place this Saturday at 7 PM. We hope to see you there!`);
});

// Additional guests to invite
const additionalGuests: string[] = ["Habib", "Anaam", "Waseem"];

// Add the additional guests to the original guest list
dinnerGuests.push(...additionalGuests);

// Send out invitations to the additional guests
console.log("\nInvitations to Additional Guests:");
additionalGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner at my place this Saturday at 7 PM. We have more space now and would love to have you join us!`);
});

// Inform about the bigger dinner table
console.log("\nGreat news! We've found a bigger dinner table, so there's plenty of space for everyone!");

//In this code, we added the following line at the end to inform everyone about the bigger dinner table:

console.log("\nGreat news! We've found a bigger dinner table, so there's plenty of space for everyone!");

