function create_car(manufacturer: string, model: string, color?: string, features?: string[]) {
    const car = {
      manufacturer: manufacturer,
      model: model,
      color: color || "Unknown",
      features: features || [],
    };
  
    return car;
  }
  
  // Call the function with required and optional information
  const myCar = create_car("Toyota", "Camry", "Blue", ["Sunroof", "Navigation"]);
  
  // Print the car object
  console.log(myCar);
  