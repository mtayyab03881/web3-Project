// Create an array of places to visit
const placesToVisit: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "Paris, France",
    "Machu Picchu, Peru",
    "Serengeti National Park, Tanzania",
  ];
  
  // Print the list of places
  console.log("Places I'd Like to Visit:");
  
  placesToVisit.forEach((place, index) => {
    console.log(`${index + 1}. ${place}`);
  });
  