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

// Inform about the bigger dinner table
console.log("\nGreat news! We've found a bigger dinner table, so there's plenty of space for everyone!");

// Add a new guest to the beginning of the array
const newGuestAtBeginning: string = "Zain";
dinnerGuests.unshift(newGuestAtBeginning);

// Print the updated list of guests
console.log("\nUpdated List of Guests:");
dinnerGuests.forEach((guest) => {
  console.log(guest);
});
