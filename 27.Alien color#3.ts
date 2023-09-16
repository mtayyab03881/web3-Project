let alien_color = 'red';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
} else if (alien_color === 'yellow') {
  console.log("You just earned 10 points for shooting down a yellow alien.");
} else if (alien_color === 'red') {
  console.log("You just earned 15 points for shooting down a red alien.");
} else {
  console.log("Unknown alien color. No points earned.");
}


//equvalent switch statement;

let alien_color = 'red';

switch (alien_color) {
  case 'green':
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
    break;
  case 'yellow':
    console.log("You just earned 10 points for shooting down a yellow alien.");
    break;
  case 'red':
    console.log("You just earned 15 points for shooting down a red alien.");
    break;
  default:
    console.log("Unknown alien color. No points earned.");
    break;
}
//In the switch statement:

//The alien_color variable is evaluated in each case.
//If alien_color matches a case label, the corresponding message is printed, and the break statement exits the switch block.
//If alien_color doesn't match any case label, the default case is executed, and it prints the "Unknown alien color. No points earned." message.
//This switch statement is functionally equivalent to the original if-else chain.





//If the alien is green, print a message that the player earned 5 points.

let alien_color = 'green';

switch (alien_color) {
  case 'green':
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
    break;
  default:
    console.log("You didn't earn any points for shooting this alien.");
    break;
}




//If the alien is yellow, print a message that the player earned 10 points.

let alien_color = 'yellow';

switch (alien_color) {
  case 'green':
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
    break;
  case 'yellow':
    console.log("Congratulations! You just earned 10 points for shooting down a yellow alien.");
    break;
  default:
    console.log("You didn't earn any points for shooting this alien.");
    break;
}



//If the alien is red, print a message that the player earned 15 points.

let alien_color = 'red';

switch (alien_color) {
  case 'green':
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
    break;
  case 'yellow':
    console.log("Congratulations! You just earned 10 points for shooting down a yellow alien.");
    break;
  case 'red':
    console.log("Congratulations! You just earned 15 points for shooting down a red alien.");
    break;
  default:
    console.log("You didn't earn any points for shooting this alien.");
    break;
}




//Write three versions of this program, making sure each message is printed for the appropriate color alien.

//version 1(green alien)

let alien_color = 'green';

switch (alien_color) {
  case 'green':
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
    break;
  case 'yellow':
    console.log("You didn't earn any points for shooting this alien.");
    break;
  case 'red':
    console.log("You didn't earn any points for shooting this alien.");
    break;
  default:
    console.log("Unknown alien color. No points earned.");
    break;
}


//version 2(yellow Alien)

let alien_color = 'yellow';

switch (alien_color) {
  case 'green':
    console.log("You didn't earn any points for shooting this alien.");
    break;
  case 'yellow':
    console.log("Congratulations! You just earned 10 points for shooting down a yellow alien.");
    break;
  case 'red':
    console.log("You didn't earn any points for shooting this alien.");
    break;
  default:
    console.log("Unknown alien color. No points earned.");
    break;
}


//version 3 (red Alien)

let alien_color = 'red';

switch (alien_color) {
  case 'green':
    console.log("You didn't earn any points for shooting this alien.");
    break;
  case 'yellow':
    console.log("You didn't earn any points for shooting this alien.");
    break;
  case 'red':
    console.log("Congratulations! You just earned 15 points for shooting down a red alien.");
    break;
  default:
    console.log("Unknown alien color. No points earned.");
    break;
}
