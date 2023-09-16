function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`A ${size}-sized shirt will be printed with the message: "${message}"`);
  }
  
  // Create a large shirt with the default message
  make_shirt();
  
  // Create a medium shirt with the default message
  make_shirt("Medium");
  
  // Create a small shirt with a custom message
  make_shirt("Small", "TypeScript is awesome!");
  