//Conditional Statements

//if else 
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
        }

console .log('10' + '10') // When you use the + operator between two strings, it concatenates them. 
                          //Here, '10' and '10' are both strings, so they are concatenated to form the string "1010".

console.log('10' - '10')// The - operator tries to convert the operands to numbers. In this case, 
                        // both '10' strings are converted to the number 10, and 10 - 10 equals 0.

console.log('10' + + '10')// The expression + '10' converts the string '10' to the number 10. However, due to operator precedence, 
                          //the expression is evaluated as '10' + (+ '10'). The + operator between a string and a number coerces the 
                          //number back to a string, resulting in '10' + '10', which is "1010". 

console.log(10 + + '10')// The + '10' converts the string '10' to the number 10. So, the expression becomes 10 + 10, which equals 20.
console.log('10' - '10')// The - operator converts both '10' strings to numbers and performs the subtraction 10 - 10, resulting in 0.



// To summarize:

// Concatenation (+ with strings) results in strings being joined together.
// Subtraction (-) forces conversion to numbers.
// Unary + operator converts a string to a number.
// Mixed type operations (string + number) can result in strings if concatenation is involved.







if(condition){
    // code
}
else{
    // code
}



// let age = 20;
// if (age >= 18) {
//     console.log("You are eligible to vote.");
//     } else {
//         console.log("You are not eligible to vote.");
//         }




//calculate grade based on marks
let marks = 85;
if (marks >= 90) {
    console.log('Grade A');
} 
else if (marks >= 80) 
    {
    console.log('Grade B');
} 
else if (marks >= 70) 
    {
    console.log('Grade C');
}
 else if (marks >= 60) 
    {
    console.log('Grade D');
} else 
    {
    console.log('Grade F');
}


// conditions for bmi
// bmi = weight/(height*height)
// underweight : < 18.5
// normal : 18.5 - 24.9
// overweight : 25 - 29.9
// obesity : >30 




let height = 5; // height in feet
let weight = 1; // weight in kg
let mheight = height * 0.3048; // convert height to meters
let bmi = weight / (mheight * mheight); // calculate BMI using height in meters

if (bmi < 18.5) {
    console.log('Underweight');
} 
else if (bmi >= 18.5 && bmi < 24.9) { // include 18.5 in the normal range
    console.log('Normal');
} 
else if (bmi >= 25 && bmi < 29.9) { // include 25 in the overweight range
    console.log('Overweight');
} 
else if (bmi >= 30) { // include 30 in the obesity range
    console.log('Obesity');
} 
else {
    console.log('Invalid input');
}

