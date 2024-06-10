//1) Password Strength Checker: Write code using if/else statements to check the strength of a password based on its length. Print messages like &quot;Strong password,&quot;
//&quot;Medium password,&quot; or &quot;Weak password&quot; depending on the length criteria (e.g., strong: &gt; 12 characters, medium: 8-12 characters, weak: less than 8 characters).
let password = 1;
if (password >= 10){
    console.log("Strong Password");
} else if(password >=5 & password<=8){
    console.log("mid Password")
}
else if(password <=10){
    console.log("Weak Password")
} 

//3) Number Guessing Game: Create a simple guessing game using if/else statements. Generate a random number between 1 and 10 and allow the user to guess it. 
//Print messages like &quot;Correct!&quot; or &quot;Guess higher/lower&quot; based on their input.
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guessNumber = 6;

if (guessNumber < 1 || randomNumber > 10) {
    console.log("Higher Number");
} else if (guessNumber > randomNumber) {
    console.log("Lower Number");
} else if (guessNumber === randomNumber) {
    console.log("Correct Answer");
}


//5) Simple Calculator: Develop a basic calculator using if/else statements. Allow the user to enter two numbers and an operator (+, -, *, /). 
//Based on the operator, perform the calculation and print the result.
let firstNumb = 64;
let secondNumb = 16;

let operator = '*';
let result;

if (operator === '+') {
    result = firstNumb + secondNumb;
    console.log(`The sum of first number and second number is ${result}`);
} else if (operator === '-') {
    result = firstNumb - secondNumb;
    console.log(`The difference of first number and second number is ${result}`);
} else if (operator === '*') {
    result = firstNumb * secondNumb;
    console.log(`The multiplication of first number and second number is ${result}`);
} else if (operator === '/') {
    result = firstNumb / secondNumb;
    console.log(`The division of first number and second number is ${result}`);
} else {
    console.log("Error: Invalid operator!");
}


//7) Weekend or Weekday Checker: Create a program using if/else to determine if a given date (e.g., stored in a variable) falls on a 
//   weekend (Saturday or Sunday).
let date = new Date('2024-05-25');

let day = date.getDay();

if (day === 0) {
    console.log('It is Sunday');
}
else if (day === 6) {
    console.log('It is Saturday');
}
else {
    let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    console.log('It is ' + weekdays[day - 1]);
}


//9) Multiple of 3 or 5: Create a program using if/else to determine if a number is divisible by 3, 5, or both. Print a message indicating divisibility 
//   or non-divisibility.

let divisNum = 60;
if (divisNum % 3 === 0 && divisNum % 5 === 0) {
    console.log(`${divisNum} is divisible by both 3 and 5`);
}
else if (divisNum % 3 === 0) {
    console.log(`${divisNum} is divided by 3`);
}
else if (divisNum % 5 === 0) {
    console.log(`${divisNum} is divided by 5`);
}

//2) Vowel or Consonant: Write a program using if/else to determine if a character entered by the user is a vowel (a, e, i, o, u) or a consonant. 
//Consider uppercase and lowercase letters.
const char = 'i';
if (char === 'a' || 'e' || 'i' || 'o' || 'u'){
    console.log("The character is vowel");
} else{
    console.log("The character is consonant")
}


//4) Calculate Price with Tax: Write code using if/else to calculate the final price of a product considering a sales tax rate (e.g., 8%). 
//Take the product price and tax rate as inputs and print the final price with tax.
let prodPrice = 6000;
let taxRate = 8/100;

finalPrice = prodPrice + taxRate * prodPrice
console.log(`Total price with Tax is ${finalPrice}`)


//6) Movie Rating Recommendation: Write code using switch/case to recommend a movie genre based on a user&#39;s age. Use different cases for age ranges 
//(e.g., children, teenagers, adults) and suggest appropriate genres (e.g., animation, action, drama).
let userAge = 16;

switch (true) {
    case (userAge < 12):
        console.log("Comedy");
        break;
    case (userAge >= 13 && userAge <= 18):
        console.log("Horror");
        break;
    case (userAge >=19):
        console.log("Romance");
        break;
    default:
        console.log("Please Enter your appropriate age.");
    }


//8) Positive, Zero, or Negative: Write code using if/else statements to check if a number is positive, zero, or negative. Print the corresponding message.

let numb = 19;

if (numb > 0){
    console.log(`${numb} is Poistive`);
}
else if (numb == 0){
    console.log(`${numb} is Zero`);
}
if (numb < 0){
    console.log(`${numb} is Negative`);
}


//10) Even or Odd Sum: Write code using if/else to check if the sum of two user-entered numbers is even or odd. Print the result.
let num1 = 67;
let num2 = 29;

let sum = num1 + num2;

if (sum % 2 == 0) {
    console.log(`Sum of ${num1} and ${num2} is Even`);
}
else {
    console.log(`Sum of ${num1} and ${num2} is Odd`);
}






//1.  const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a password: ', (password) => {
//     if (password.length > 12) {
//         console.log("Strong password");
//     } else if (password.length >= 8) {
//         console.log("Medium password");
//     } else {
//         console.log("Weak password");
//     }
//     readline.close();
// });


// 2.const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a character: ', (char) => {
//     char = char.toLowerCase();
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         console.log("The character is a vowel");
//     } else {
//         console.log("The character is a consonant");
//     }
//     readline.close();
// });



// 3.const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let randomNumber = Math.floor(Math.random() * 10) + 1;

// readline.question('Guess a number between 1 and 10: ', (guess) => {
//     guess = parseInt(guess);
//     if (guess < randomNumber) {
//         console.log("Guess higher");
//     } else if (guess > randomNumber) {
//         console.log("Guess lower");
//     } else if (guess === randomNumber) {
//         console.log("Correct!");
//     } else {
//         console.log("Invalid guess");
//     }
//     readline.close();
// });



//4. const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter the product price: ', (price) => {
//     readline.question('Enter the tax rate (as a percentage): ', (rate) => {
//         price = parseFloat(price);
//         rate = parseFloat(rate) / 100;
//         let finalPrice = price + (price * rate);
//         console.log(`Total price with Tax is ${finalPrice}`);
//         readline.close();
//     });
// });




// 5. const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter the first number: ', (firstNum) => {
//     readline.question('Enter the second number: ', (secondNum) => {
//         readline.question('Enter the operator (+, -, *, /): ', (operator) => {
//             firstNum = parseFloat(firstNum);
//             secondNum = parseFloat(secondNum);
//             let result;
//             if (operator === '+') {
//                 result = firstNum + secondNum;
//             } else if (operator === '-') {
//                 result = firstNum - secondNum;
//             } else if (operator === '*') {
//                 result = firstNum * secondNum;
//             } else if (operator === '/') {
//                 result = firstNum / secondNum;
//             } else {
//                 console.log("Error: Invalid operator!");
//                 readline.close();
//                 return;
//             }
//             console.log(`The result is ${result}`);
//             readline.close();
//         });
//     });
// });




// 6. const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter your age: ', (age) => {
//     age = parseInt(age);

//     switch (true) {
//         case (age < 12):
//             console.log("Recommended genre: Animation");
//             break;
//         case (age >= 13 && age <= 18):
//             console.log("Recommended genre: Action");
//             break;
//         case (age >= 19):
//             console.log("Recommended genre: Drama");
//             break;
//         default:
//             console.log("Please enter a valid age.");
//     }

//     readline.close();
// });




// 7. const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a date (YYYY-MM-DD): ', (dateString) => {
//     let date = new Date(dateString);
//     let day = date.getDay();

//     if (day === 0) {
//         console.log('It is Sunday');
//     } else if (day === 6) {
//         console.log('It is Saturday');
//     } else {
//         let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//         console.log('It is ' + weekdays[day - 1]);
//     }

//     readline.close();
// });



// 8. const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a date (YYYY-MM-DD): ', (dateString) => {
//     let date = new Date(dateString);
//     let day = date.getDay();

//     if (day === 0) {
//         console.log('It is Sunday');
//     } else if (day === 6) {
//         console.log('It is Saturday');
//     } else {
//         let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//         console.log('It is ' + weekdays[day - 1]);
//     }

//     readline.close();
// });




// 9. const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a number: ', (num) => {
//     num = parseFloat(num);

//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log(`${num} is divisible by both 3 and 5`);
//     } else if (num % 3 === 0) {
//         console.log(`${num} is divisible by 3`);
//     } else if (num % 5 === 0) {
//         console.log(`${num} is divisible by 5`);
//     } else {
//         console.log(`${num} is not divisible by 3 or 5`);
//     }

//     readline.close();
// });




// 10. const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter the first number: ', (num1) => {
//     readline.question('Enter the second number: ', (num2) => {
//         num1 = parseFloat(num1);
//         num2 = parseFloat(num2);

//         let sum = num1 + num2;

//         if (sum % 2 === 0) {
//             console.log(`Sum of ${num1} and ${num2} is Even`);
//         } else {
//             console.log(`Sum of ${num1} and ${num2} is Odd`);
//         }

//         readline.close();
//     });
// });
