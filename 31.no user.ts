let usernames = ["admin", "user1", "user2", "user3", "user4", "user5"];

if (usernames.length > 0) {
  for (let i = 0; i < usernames.length; i++) {
    let username = usernames[i];

    if (username === "admin") {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}! Welcome to the website.`);
    }
  }
} else {
  console.log("No users found. Please sign up or log in.");
}





// If the list is empty, print the message We need to find some users!

let usernames = []; // An empty array

if (usernames.length > 0) {
  for (let i = 0; i < usernames.length; i++) {
    let username = usernames[i];

    if (username === "admin") {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}! Welcome to the website.`);
    }
  }
} else {
  console.log("We need to find some users!");
}



//• Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames = ["admin", "user1", "user2", "user3", "user4", "user5"];

// Empty the usernames array
usernames = [];

if (usernames.length > 0) {
  for (let i = 0; i < usernames.length; i++) {
    let username = usernames[i];

    if (username === "admin") {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}! Welcome to the website.`);
    }
  }
} else {
  console.log("We need to find some users!");
}
