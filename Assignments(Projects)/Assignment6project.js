//// 1. Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Hardcoded array of user objects
            const data = [
                { ID: 1, Name: 'Bibek', Age: 21 },
                { ID: 2, Name: 'Bobby', Age: 22 },
                { ID: 3, Name: 'Chobby', Age: 23 }
            ];
            
            // Resolving the promise with the data
            resolve(data);
        }, 2000);
    });
  }
  fetchData().then(users => {
    console.log(users);
  }).catch(error => {
    console.error(error);
  });
  
  
////2. Closures
  function createCounter() {
    // Internal count variable
    let count = 0;
  
    // Returning an object with two methods
    return {
        // Increment method increases the count by 1
        increment: function() {
            count = count + 1;
        },
        // getCount method returns the current count
        getCount: function() {
            return count;
        }
    };
  }
  const counter = createCounter();
  counter.increment();
  console.log(counter.getCount()); 
  counter.increment();
  console.log(counter.getCount()); 
  counter.increment();
  console.log(counter.getCount()); 
  
  
  //// 3. Callbacks
  function processData(numbers, callback) {
    // Creating an empty array to store the processed numbers
    let processedNumbers = [];
  
    // Iterate over each number in the input array
    for (let i = 0; i < numbers.length; i = i + 1) {
        
        let processedNumber = callback(numbers[i]); // Call the callback function with the current number
        
        // Store the result in the new array
        processedNumbers.push(processedNumber);
    }
  
    // Return the new array of processed numbers
    return processedNumbers;
  }
  
  //doubling the number
  function double(number) {
    return number * 2;
  }
  let numbers = [3, 2, 1, 7, 8];
  let DoubledNumbers = processData(numbers, double);
  console.log(DoubledNumbers); 
  
  //squaring the number
  function square(number) {
    return number * number;
  }
  let squaredNumbers = processData(numbers, square);
  console.log(squaredNumbers);
  
  
  //// 4. Async/Await
  async function fetchData() {
    const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            // Hardcoded array of user objects
            const users = [
              { ID: 1, Name: 'Bibek', Age: 21 },
              { ID: 2, Name: 'Bobby', Age: 22 },
              { ID: 3, Name: 'Chobby', Age: 23 } 
            ];
            resolve(users);
        }, 2000);
    });
  
    return data;
  }
  (async () => {
    try {
        const users = await fetchData();
        console.log(users);
    } catch (error) {
        console.error(error);
    }
  })();
  
  
  //// 5. Array Manipulation: Map
  function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
  }
  const numbers = [2, 4, 7, 8, 11];
  const doubledNumbers = doubleNumbers(numbers);
  console.log(doubledNumbers); 
  
  
  //// 6. Array Manipulation: Filter
  function filterNumbers(numbers) {
    return numbers.filter(number => number >= 10);
  }
  const numbers = [2, 8, 20, 60, 90];
  const filteredNumbers = filterNumbers(numbers);
  console.log(filteredNumbers); 
  
  
  ////7. Array Manipulation: Find
  function NumberGreaterThan15(numbers) {
    return numbers.find(number => number > 15);
  }
  const numbers = [10, 15, 52, 30, 25];
  const foundNumber = NumberGreaterThan15(numbers);
  console.log(foundNumber); 
  
  
  //8. Array Manipulation: Reduce
  function sumNumbers(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  const numbers = [11, 21, 8, 22, 34];
  const totalSum = sumNumbers(numbers);
  console.log(totalSum); 
  
  
  ////9. Object Manipulation
  function arrayToObj(usersArray) {
    return usersArray.reduce((acc, user) => {
        acc[user.ID] = user;
        return acc;
    }, {});
  }
  const users = [
    { ID: 1, Name: 'Beki', Age: 20 },
    { ID: 2, Name: 'Geyu', Age: 23 },
    { ID: 3, Name: 'Yoho', Age: 19 }
  ];
  const usersObj = arrayToObj(users);
  console.log(usersObj);
  
  //// 10. Classes and Objects
  class Person {
    constructor(Name, Age) {
        this.Name = Name;
        this.Age = Age;
    }
  
    describe() {
        return `${this.Name} is ${this.Age} years old.`;
    }
  }
  const person1 = new Person('Shaswot', 20);
  console.log(person1.describe()); 
  
  const person2 = new Person('Bikash', 23);
  console.log(person2.describe()); 
  
  
  //// 11. Inheritance
  class Person {
    constructor(Name, Age) {
        this.Name = Name;
        this.Age = Age;
    }
  
    describe() {
        return `${this.Name} is ${this.Age} years old.`;
    }
  }
  
  class Student extends Person {
    constructor(Name, Age, grade) {
        super(Name, Age);
        this.grade = grade;
    }
  
    study() {
        return `${this.Name} is studying.`;
    }
  }
  
  const student1 = new Student('Beki', 21, 'A');
  console.log(student1.describe()); 
  console.log(student1.study());    
  
  const student2 = new Student('Bachha', 19, 'B');
  console.log(student2.describe()); 
  console.log(student2.study());    
  
  
  ////12. Error Handling with Promises
  function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // USing a random condition to reject the promise sometimes
            if (Math.random() < 0.5) {
                reject(new Error("Failed to fetch data"));
            } else {
                const data = [
                  { ID: 1, Name: 'Bibek', Age: 21 },
                  { ID: 2, Name: 'Bobby', Age: 22 },
                  { ID: 3, Name: 'Chobby', Age: 23 }
                ];
                // Resolving the promise with the data
                resolve(data);
            }
        }, 2000);
    });
  }
  //Error handling using .catch
  fetchData()
    .then(users => {
        console.log(users);
    })
    .catch(error => {
        console.error(error.message); 
    });
  
  
  ////13. Error Handling with Async/Await
  async function fetchData() {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                // Using a random condition to reject the promise sometimes
                if (Math.random() < 0.5) {
                    reject(new Error("Failed to fetch data"));
                } else {
                    const data = [
                      { ID: 1, Name: 'Bibek', Age: 21 },
                      { ID: 2, Name: 'Shaswot', Age: 22 },
                      { ID: 3, Name: 'Spandhan', Age: 23 }
                    ];
                    resolve(data);
                }
            }, 2000);
        });
    } catch (error) {
        console.error(error.message);
    }
  }
  (async () => {
    await fetchData();
  })();
  
  
  ////14. Complex Array Manipulation
  function uniqueHobbies(users) {
    return users.reduce((uniqueHobbiesSet, user) => {
        user.hobbies.forEach(hobby => {
            uniqueHobbiesSet.add(hobby);
        });
        return uniqueHobbiesSet;
    }, new Set());
  }
  const users = [
    { Name: 'Hari', hobbies: ['Reading', 'Painting', 'Playing'] },
    { Name: 'Jhari', hobbies: ['Playing', 'Singing', 'Traveling'] },
    { Name: 'Prahari', hobbies: ['Singing', 'Dancing', 'Drawing'] }
  ];
  const allUniqueHobbies = Array.from(uniqueHobbies(users));
  console.log(allUniqueHobbies); 