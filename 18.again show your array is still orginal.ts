// Create an array of places to visit
const placesToVisit: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "Paris, France",
    "Machu Picchu, Peru",
    "Serengeti National Park, Tanzania",
  ];
  
  // Create a sorted copy of the array in reverse alphabetical order
  const reverseSortedPlaces: string[] = [...placesToVisit].sort((a, b) => b.localeCompare(a));
  
  // Print the list of places in reverse alphabetical order
  console.log("Places I'd Like to Visit (Reverse Alphabetical Order):");
  
  reverseSortedPlaces.forEach((place, index) => {
    console.log(`${index + 1}. ${place}`);
  });
  
  // Print the original list to show it's still in its original order
  console.log("\nOriginal Order of Places:");
  
  placesToVisit.forEach((place, index) => {
    console.log(`${index + 1}. ${place}`);
  });
  