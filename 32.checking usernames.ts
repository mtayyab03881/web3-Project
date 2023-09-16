// List of current users
let current_users = ["John", "Alice", "Bob", "Eve", "Mallory"];

// List of new users
let new_users = ["Alice", "Frank", "Eve", "Charlie", "Grace"];

// Function to check if a username is already taken (case-insensitive)
function isUsernameTaken(username) {
  return current_users.some((user) => user.toLowerCase() === username.toLowerCase());
}

// Loop through new_users to check for unique usernames
for (let i = 0; i < new_users.length; i++) {
  let username = new_users[i];

  if (isUsernameTaken(username)) {
    console.log(`Sorry, the username '${username}' is already taken. Please choose a different username.`);
  } else {
    console.log(`Congratulations! The username '${username}' is available.`);
  }
}
