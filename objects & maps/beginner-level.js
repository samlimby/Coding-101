// Beginner Exercises

// 1. Create an object and access properties
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
  };
  // Log each property and add a new one
  console.log(car.make);
  console.log(car.model);
  console.log(car.year);
  car.color = 'Red'; // Add a new property
  console.log(car);
  
  // 2. Object with method
  const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  // Log the full name
  console.log(person.fullName());
  
  // 3. Loop through object properties
  const student = {
    name: 'Jane',
    age: 20,
    grade: 'A',
    school: 'XYZ University'
  };
  // Use a for...in loop
  for (let key in student) {
    console.log(`${key}: ${student[key]}`);
  }
  
  // 4. Create a Map and access values
  const countryMap = new Map();
  countryMap.set('France', 'Paris');
  countryMap.set('Germany', 'Berlin');
  countryMap.set('Italy', 'Rome');
  // Retrieve and log a capital
  console.log(countryMap.get('France'));
  