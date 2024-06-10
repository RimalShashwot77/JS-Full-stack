// Functions

// Declaring function thorugh alternate syntax which means assigning a function to a variable during declaration itself

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// greet("Sam");



// Return Statement

// function greet(name) {
//     return `Hello, ${name}.`; // Corrected template literal
// }

// const result = greet('John');
// console.log(result); // Hello, John




// Sum

// function sum(a,b){
//     return a + b;
// }
// const sumResult = sum(2,3);
// console.log(sumResult); // 5


// function sum(a,b){
//     const sumValue = a +b ;
//     return sumValue ;
// }
// const sumResult = sum(2,3);
// console.log(sumResult); // 5




// Difference
// function diff(a,b){
//     return a - b;
// }
// const diffResult = diff(5,3);
// console.log(diffResult); // 2


// Multiplication
// function mul(a,b){
//       return a * b;
// }
// const mult = mul(5,3);
// console.log(mul); 



// Divide (Anonymous function)
// function div(a,b){
//     return a / b;
// }
// const divResult = div(2,2);
// console.log(divResult); // 1



// Normal Syntax
// function div(a,b){
//     return a / b;
// }
// let num1 = 2
// let num2 = 2
// let divResult = div(num2,num1);
// console.log(`The result for dividing ${num2} by ${num1} :${divResult}`); 


// Arrow Function
// const mul = (a,b) =>{
//     return a*b;
// }; // using the return statement as lines of multiple codes are used


// let meet = (name) =>  `Hello ${name}!`;
// let call = meet("Shyam");
// console.log(call);


// Immediate Invoked Function
// Generator Function


// Example in JS

// Creating an object to represent a person
// const person = {
//     name: "John Doe",
//     age: 30,
//     occupation: "Software Engineer",
// };

// // Accessing values in the object
// console.log(person.name); // John Doe


// Array (Homogenous)

// Creatin an array of integers
// const numbers = [1,2,3,4,5]

// // Accessing elements in the array
// console.log(numbers[0]); // 1
// console.log(numbers[4]); // 5


// Object creation

// const persen = {
//     name: "Kon Doe",
//     age: 30,
//     occupation: "Software Engineer",
//     hobbies: [`Playing`, `Cooking`, `Eating`]
// };

// // Accessing values in the object
// console.log(persen.name, persen.age, persen.occupation); // John Doe



// const persenn = {
//     name: "Kon Doe",
//     age: 30,
//     occupation: "Software Engineer",
//     hobbies: [`Playing`, `Cooking`, `Eating`]
// };

// // Accessing values in the object
// console.log(`Name: ${persenn.name}, 
// Age: ${persenn.age},
// Occupation: ${persenn.occupation}
// Hobbies: ${persenn.hobbies[2]}`)


// Push and Pop
// let numbers = [6,7,8,9,10];
// numbers.push(11);
// console.log(numbers); // [6, 7, 8, 9, 10, 11]
// numbers.pop();
// console.log(numbers); // [6, 7, 8, 9, 10]



// Objects Methods:
// Objects in JS can also have methods, which are functions associated with the object
//Example: Using object methods
const rect = {
    width : 15,
    height: 10,
    getArea: function() {
        return this.width * this.height;
    }
}
console.log(rect.getArea()); // Output : 150
// In the above example, getArea is a method of the rect object



