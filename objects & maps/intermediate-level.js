// Intermediate Exercises

// 5. Dynamic object properties
const inventory = {
    apples: 10,
    bananas: 5,
    oranges: 8
  };
  // Function to add items dynamically
  function addItem(item, quantity) {
    inventory[item] = quantity;
  }
  addItem('grapes', 15);
  console.log(inventory);
  
  // 6. Object methods with `this`
  const account = {
    balance: 1000,
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
    },
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
      } else {
        console.log('Insufficient funds');
      }
    }
  };
  account.deposit(200);
  account.withdraw(500);
  account.withdraw(800);
  
  // 7. Iterate through a Map
  const employeeSalaries = new Map([
    ['Alice', 50000],
    ['Bob', 60000],
    ['Charlie', 55000]
  ]);
  // Increase salary by 10%
  employeeSalaries.forEach((salary, employee) => {
    const newSalary = salary * 1.10;
    employeeSalaries.set(employee, newSalary);
  });
  console.log(employeeSalaries);
  
  // 8. Merging objects
  const object1 = { a: 1, b: 2, c: 3 };
  const object2 = { b: 4, d: 5 };
  // Function to merge objects
  const mergedObject = { ...object1, ...object2 };
  console.log(mergedObject);