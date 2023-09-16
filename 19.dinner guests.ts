// Create an array of people to invite to dinner
const dinnerGuests: string[] = ["Alia", "Umer", "Areeb"];

// Calculate the number of people being invited
const numberOfPeopleInvited: number = dinnerGuests.length;

// Print a message indicating the number of people being invited
console.log(`You are inviting ${numberOfPeopleInvited} people to dinner.`);

// Print individual invitations
console.log("Invitations:");
dinnerGuests.forEach((guest, index) => {
  console.log(`${index + 1}. Dear ${guest}, you are invited to dinner. Please join us!`);
});
