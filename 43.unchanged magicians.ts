function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]) {
    const modifiedMagicians = [];
  
    for (let magician of magicians) {
      modifiedMagicians.push(magician + " the Great");
    }
  
    return modifiedMagicians;
  }
  
  // Create an array of magician's names
  const magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Call make_great() with a copy of the array to create a new array
  const modifiedMagicians = make_great([...magicianNames]);
  
  // Call show_magicians() with both arrays to compare
  console.log("Original Magicians:");
  show_magicians(magicianNames);
  
  console.log("\nModified Magicians:");
  show_magicians(modifiedMagicians);
  