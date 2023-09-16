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
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner at my place this Saturday at 7 PM. We hope to see you there!`);
});
