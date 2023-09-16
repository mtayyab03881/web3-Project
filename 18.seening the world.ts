// Create an array of places to visit
const placesToVisit: string[] = [
    "Paris, France",
    "Kyoto, Japan",
    "Santorini, Greece",
    "Machu Picchu, Peru",
    "Serengeti National Park, Tanzania",
  ];
  
  // Print the list of places
  console.log("Places I'd Like to Visit:");
  
  placesToVisit.forEach((place, index) => {
    console.log(`${index + 1}. ${place}`);
  });
  