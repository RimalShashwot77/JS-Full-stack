// for loop 

//The purpose of this JavaScript code is to print the numbers from 1 to 10 to the console, except for the number 5. 
//The for loop iterates through the numbers from 1 to 10, and the continue statement is used to skip the current iteration 
//when the loop counter i is equal to 5.

// for (let i=1; i<=10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }


// While loop
// let i = 1;
// while (i <= 10) {
//     if (i == 5 || i == 6 || i == 7) {
//         i++; // Increment i before continue to avoid infinite loop
//         continue; // Skip the current iteration
//     }
//     console.log(i);
//     i++;
// }



// DO.... While Loop
// let  i =1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);



//The code that prints the numbers from 1 to 10, except for the numbers 5, 6, and 7. It uses a for loop along with continue 
//statements to skip the specified numbers.

// for (let i = 1; i <= 10; i++) {
//     if (i === 5 || i === 6 || i === 7) {
//         continue;
//     }
//     console.log(i);
// }


// QNO.2 using a while loop, print even bumbers from 2 to 10 (inclusive) in the console.

// i = 2;
// while (i <= 10) {
//     console.log(i);
//     i += 2; // Increment i by 2 to get the next even number
// }


// only using if in while condition for QNO.2
// i = 2;
// while (i <= 10) {
//     if(i%2 == 0){
//         console.log(i);
//     }
//         i ++ 
// }


// QNO.3 write a for loop to calculate the sum of numbers from 1 to 10

// let sum = 0; // Initialize sum to 0
// for (i = 1; i <= 10; i++) {
//     sum += i; // Add the current value of i to the sum
// }
// console.log(sum);


// QNO.4 Using a while loop, find the factorial of a given number (e.g., 5)
// let num = 5;
// let factorial = 1;
// let i = 1;
// while (i <= num) {
//     factorial *= i;
//     i++;
//     }

//Another way
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Please enter a number:', num=>{
//     let num1 = Number(num);
//    let fact = 1;
    
//     while (num1>0){
//         fact*=num1;
//         num1--;
//     }
//     console.log(`The factorial of ${num} is ${fact}.`);
//     readline.close();
// });


// QNO.5 Write a for loop that prints the square of numbers from 1 to 5

// let res;
// for (i = 1; i <= 5; i++) {
//     res = i * i;
//     console.log(`The square of ${i} is ${res}`);
// }


// QNO.6 Using a while loop, print the cube of numbers from 1 to 5

// let res; // Initialize i to 1
// for (i = 1; i <= 5; i++) {
//     res = i ** 3;
//     console.log(`The cube of ${i} is ${res}`);
// }

// QNO.7 Write a loop to iterate through an array of names and print each name in the console

// let names = ['Dada', 'Kaji', 'CA'];

// for (i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// QNO.8 Using a while loop, find the sum of elements in an array of numbers

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
let i = 0;

while (i < numbers.length) {
    sum += numbers[i];
    i++;
}
    console.log(`Sum of elements in the array is: ${sum}`);
    

// QNO.9 Write a for loop that prints the elements of an array in reverse order
