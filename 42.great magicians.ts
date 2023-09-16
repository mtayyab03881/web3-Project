function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] + " the Great";
    }
  }
  
  // Create an array of magician's names
  const magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Call make_great() to modify the magician names
  make_great(magicianNames);
  
  // Call show_magicians() to see the modified list
  show_magicians(magicianNames);
  