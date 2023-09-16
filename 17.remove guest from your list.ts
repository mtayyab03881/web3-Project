// Create a list of people to invite to dinner
const dinnerGuests: string[] = ["Zain", "Alia", "Umer", "Ali", "Areeb", "Sara", "Habib", "Anaam", "Waseem", "AppendGuest"];

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

// Inform about the change in dinner plans
console.log("\nChange in Dinner Plans:");
console.log("Unfortunately, our new dinner table won't arrive in time, and we have space for only two guests.");

// Remove guests until only two names remain
while (dinnerGuests.length > 2) {
  const removedGuest = dinnerGuests.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
}

// Print invitations for the remaining two guests
console.log("\nInvitations for the Two Guests:");
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner at my place this Saturday at 7 PM. You're one of our honored guests, and we look forward to seeing you!`);
});
