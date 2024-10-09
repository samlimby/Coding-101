// Advanced Exercises

// 9. Nested objects and library system
const library = {
    books: [
      { title: 'Book A', author: 'Author A', available: true },
      { title: 'Book B', author: 'Author B', available: false },
      { title: 'Book C', author: 'Author C', available: true }
    ]
  };
  // Function to check if a book is available
  function isBookAvailable(title) {
    return library.books.some(book => book.title === title && book.available);
  }
  console.log(isBookAvailable('Book A')); // true
  console.log(isBookAvailable('Book B')); // false
  
  // 10. Convert object to Map and vice versa
  const fruitPrices = {
    apple: 1.5,
    banana: 0.8,
    orange: 1.2
  };
  // Convert object to Map
  const fruitMap = new Map(Object.entries(fruitPrices));
  console.log(fruitMap);
  // Convert Map back to object
  const fruitObject = Object.fromEntries(fruitMap);
  console.log(fruitObject);
  
  // 11. Filter Map data
  const peopleMap = new Map([
    ['Alice', { age: 35, isEmployed: true }],
    ['Bob', { age: 28, isEmployed: true }],
    ['Charlie', { age: 45, isEmployed: false }]
  ]);
  // Function to return employed people over 30
  function getEmployedOver30(map) {
    const result = new Map();
    map.forEach((info, name) => {
      if (info.isEmployed && info.age > 30) {
        result.set(name, info);
      }
    });
    return result;
  }
  console.log(getEmployedOver30(peopleMap));
  
  // 12. Object factory for creating multiple people
  function createPerson(firstName, lastName, age) {
    return {
      firstName,
      lastName,
      age,
      greet() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
      }
    };
  }
  const people = [
    createPerson('John', 'Smith', 30),
    createPerson('Jane', 'Doe', 25),
    createPerson('Sam', 'Brown', 40)
  ];
  people.forEach(person => person.greet());