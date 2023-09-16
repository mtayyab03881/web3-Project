function make_sandwich(...items: string[]) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
      console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
  }
  
  // Call the function with different numbers of arguments
  make_sandwich("Ham", "Cheese", "Lettuce", "Tomato");
  make_sandwich("Turkey", "Swiss Cheese");
  make_sandwich("Peanut Butter", "Jelly");
  