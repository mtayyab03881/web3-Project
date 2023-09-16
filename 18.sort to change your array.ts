// Create an array of places to visit
const placesToVisit: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "Paris, France",
    "Machu Picchu, Peru",
    "Serengeti National Park, Tanzania",
  ];
  
  // Sort the array in reverse alphabetical order
  placesToVisit.sort((a, b) => b.localeCompare(a));
  
  // Print the sorted list of places in reverse alphabetical order
  console.log("Sorted Order of Places (Reverse Alphabetical):");
  
  placesToVisit.forEach((place, index) => {
    console.log(`${index + 1}. ${place}`);
  });
  