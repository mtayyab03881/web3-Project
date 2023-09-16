// Create an array of city objects
const cities = [
    {
      name: "Paris",
      country: "France",
      population: 2_138_551,
      description: "The capital of France, known for its iconic Eiffel Tower and romantic ambiance."
    },
    {
      name: "Tokyo",
      country: "Japan",
      population: 13_515_000,
      description: "The bustling capital of Japan, famous for its modern technology and rich culture."
    },
    {
      name: "New York City",
      country: "United States",
      population: 8_398_748,
      description: "The largest city in the United States, known for its diverse culture and iconic skyline."
    }
  ];
  
  // Print information about each city
  console.log("City Information:");
  
  cities.forEach((city, index) => {
    console.log(`City ${index + 1}:`);
    console.log(`Name: ${city.name}`);
    console.log(`Country: ${city.country}`);
    console.log(`Population: ${city.population}`);
    console.log(`Description: ${city.description}`);
    console.log();
  });
  