// Create an array of famous rivers
const rivers: string[] = [
    "Nile River",
    "Amazon River",
    "Yangtze River",
    "Mississippi River",
    "Danube River",
    "Ganges River",
    "Volga River",
    "Colorado River",
    "Mekong River",
    "Congo River",
  ];
  
  // Print the list of famous rivers
  console.log("List of Famous Rivers:");
  
  rivers.forEach((river, index) => {
    console.log(`${index + 1}. ${river}`);
  });
  