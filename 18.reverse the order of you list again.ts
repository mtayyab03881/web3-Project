// Create an array of places to visit
const placesToVisit: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "Paris, France",
    "Machu Picchu, Peru",
    "Serengeti National Park, Tanzania",
  ];
  
  // Reverse the order of the original array to return it to its original order
  placesToVisit.reverse();
  
  // Print the list to confirm it's back to its original order
  console.log("Original Order of Places:");
  
  placesToVisit.forEach((place, index) => {
    console.log(`${index + 1}. ${place}`);
  });
  