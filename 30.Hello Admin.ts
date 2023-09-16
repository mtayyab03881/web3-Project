let usernames = ["admin", "user1", "user2", "user3", "user4", "user5"];

for (let i = 0; i < usernames.length; i++) {
  let username = usernames[i];

  if (username === "admin") {
    console.log(`Hello, ${username}! Welcome back, admin.`);
  } else {
    console.log(`Hello, ${username}! Welcome to the website.`);
  }
}






//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

let usernames = ["admin", "user1", "user2", "user3", "user4", "user5"];

for (let i = 0; i < usernames.length; i++) {
  let username = usernames[i];

  if (username === "admin") {
    console.log(`Hello ${username}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}! Welcome to the website.`);
  }
}





//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames = ["admin", "Eric", "Alice", "Bob", "Charlie", "David"];

for (let i = 0; i < usernames.length; i++) {
  let username = usernames[i];

  if (username === "admin") {
    console.log(`Hello ${username}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
