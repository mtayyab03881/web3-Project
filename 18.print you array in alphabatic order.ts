// Create an array of places to visit
const placesToVisit: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "Paris, France",
    "Machu Picchu, Peru",
    "Serengeti National Park, Tanzania",
  ];
  
  // Create a sorted copy of the array without modifying the original list
  const sortedPlaces: string[] = [...placesToVisit].sort();
  
  // Print the sorted list of places
  console.log("Places I'd Like to Visit (Alphabetical Order):");
  
  sortedPlaces.forEach((place, index) => {
    console.log(`${index + 1}. ${place}`);
  });
  