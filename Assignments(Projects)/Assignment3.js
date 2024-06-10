// JS Questions for 26th May,2024

// //1. WAP using for loop that prints numbers from 1 to 5 in the console.**

// for(i=0;i<=5;i++){
//     console.log(i);
// }

// //2.Using a while loop, print even numbers from 2 to 10 (inclusive) in the console.**

// let i=2;
// while(i<=10){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }

// //3.Write a for loop to calculate the sum of numbers from 1 to 10.**

// let sum=0;
// for(i=1;i<=10;i++){
//     sum=sum+i;
// }
// console.log(`Sum : ${sum}`);

// //4.Using a while loop, find the factorial of a given number (e.g., 5).**

// let fact = 1;
// let num = 5;
// while(num>0){
//     fact=fact*num;
//     num--;
// }
// console.log(`The factorial of 5 : ${fact}`);

// //5. Write a for loop that prints the square of numbers from 1 to 5.**

// for(i=1;i<=5;i++){
//     console.log(`Square of ${i} : ${i*i}`);
// }

// //6. Using a while loop, print the cube of numbers from 1 to 5.**

// let num = 1;
// let cube;
// while(num<=5){
//     cube = num**3;
//     console.log(`The cube of ${num} : ${cube} `);
//     num++;
// }

// //7. Write a for loop to iterate through an array of names and print each name in the console.**

// let names = ['Spandan','Chris','Bishal','Ujjwal','Avisekk'];
// for(i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// //8. Using a while loop, find the sum of elements in an array of numbers.**

// let nums =[3,13,7,8];
// let len = nums.length;
// let sum = 0;
// while(len>0){
//     sum = sum + nums[len-1];
//     len--;
// }
// console.log(`The sum of the numbers in array ${nums} : ${sum}`);

// //9. Write a for loop that prints the elements of an array in reverse order.**

// let nums = [1,2,3,4,5];
// for(i=nums.length-1;i>=0;i--){
//     console.log(nums[i]);
// }

// //10. Using a while loop, find the largest number in an array of numbers.**

// let nums = [3,13,15,7,8,2];
// let len = nums.length;
// let max = nums[0];
// while(len>0){
//     for(i=1;i<nums.length;i++){
//         if(nums[i]>max){
//             max = nums[i];
//         }
//     }
//     len--;
// }
// console.log(`The largest number in array ${nums} : ${max}`);

// //11.Write a for loop to calculate the sum of all even numbers from 1 to 20.**

// let sum = 0;
// for(i=1;i<=20;i++){
//     if(i%2==0){
//         sum = sum + i;
//     }
// }
// console.log(`Sum of even numbers from 1 to 20: ${sum}`);

// //12.Using a while loop, find the product of all odd numbers from 1 to 15.**

// let res = 1;
// let i = 1;
// while(i<=15){
//     if(i%2!=0){
//         res = res * i;
//     }
//     i++;
// }
// console.log(`The product of odd number from 1 to 15 : ${res}`);

// /* 13.
// *
// **
// ***
// ****
// *****
// */

// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         process.stdout.write("*");    
//     }
//     console.log("");
// }

// //14. Using a while loop, print the numbers from 10 to 1 in descending order.**

// let num = 10;
// while(num>=1){
//     console.log(num);
//     num--;
// }

// //15. Write a for loop to calculate the factorial of a given number (e.g., 6).**

// const readline = require('readline').createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// readline.question('Please enter a number:', num =>{
//     let fact = 1;
//     let num1 = Number(num);
//     for(i=1;i<=num1;i++){
//         fact = fact * i;
//         }
//     console.log(`The factorial of ${num1} is ${fact}.`);
//     readline.close();
// })

// //16. Using a while loop, find the sum of digits of a given number (e.g., 123).**

// const readline = require('readline').createInterface({
//     input : process.stdin,
//     output : process.stdout
// })

// readline.question('Please enter any number : ',num=>{
//     let sum = 0;
//     let num1 = Number(num);
//     while(num1>0){
//         let digit = num1 % 10;
//         sum = sum + digit;
//         num1 = Math.floor(num1/10);
//     }
//     console.log(`The sum of digits of ${num} is ${sum}.`);
//     readline.close();
// })

// /*17. Write a for loop to print the following pattern:**

// 55555
// 4444
// 333
// 22
// 1
// */

// for(i=5;i>=1;i--){
//     for(j=1;j<=i;j++){
//         process.stdout.write(i.toString());
//     }
//     console.log();
// }

// //18. Using a while loop, print the first 10 Fibonacci numbers.**

// let a = 0;
// let b = 1;
// let c = 1;
// while(c<=10){
//     console.log(a);
//     a = a+b;
//     b = a-b;
//     c++;
// }

// //19. Write a for loop to find and print the prime numbers between 1 and 20.**

// for(i=2;i<=20;i++){
//     let flag = 0;
//     for(j=2;j<i;j++){
//         if(i%j==0){
//             flag = 1;
//         }
//     }
//     if(flag==0){
//         console.log(i);
//     }
// }

// //20. Using a while loop, reverse a given number (e.g., 12345).**

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('Please enter any number : ', n1=>{
// let num = Number(n1);
// let reversedNum = 0;
// while(num != 0){
//     let digit = num % 10;
//     reversedNum = reversedNum * 10 + digit;
//     num = Math.floor(num / 10);
// }
// console.log(`The reverse of ${n1}  : ${reversedNum}`);
// readline.close();
// })


// // Pattern Questions


// /*1. Solid Rectangle:
// *******
// *******
// *******
// *******
// *******
// */

// let res='*******'
// for(i=1;i<=5;i++){
//     console.log(res);
// }

// // 1. Right-Angled Triangle:
// // *
// // **
// // ***
// // ****
// // *****

// for (let i = 1; i <= 5; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += '*';
//     }
//     console.log(line);
// }


// // 2. Solid Rectangle:
// // *******
// // *******
// // *******
// // *******
// // *******

// for (let i = 0; i < 5; i++) {
//     let line = '';
//     for (let j = 0; j < 7; j++) {
//         line += '*';
//     }
//     console.log(line);
// }

// // 3. Inverted Triangle:
// // *****
// // ****
// // ***
// // **

// for(i=5;i>=1;i--){
//     for(j=1;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log('');
// }

// /*4. 4. Pyramid:
//     *
//    ***
//   *****
//  *******
// *********
// */

// for(i=1;i<=5;i++){
//     for(j=1;j<=5-i;j++){
//         process.stdout.write(" ");
//     }
//     for(k=1;k<=i;k++){
//         process.stdout.write("*");
//     }
//     for(l=i-1;l>=1;l--){
//         process.stdout.write("*");
//     }
//     console.log('');
// }

// /*5. Inverted Pyramid:
// *********
// *******
// *****
// ***
// *
// */

// for(i=9;i>=1;i-=2){
//     for(j=1;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log('');
// }

// /*6. Hollow Rectangle:
// *******
// *   *
// *   *
// *   *
// *******
// */

// for(i=1;i<=5;i++){
//     for(j=1;j<=7;j++){
//         if(i==1 || i==5){
//             process.stdout.write("*");
//         }
//         else if(j==1 || j==5){
//             process.stdout.write("*");
//         }
//         else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log('');
// }


// /*7. Cross:
// *   *
//  * *
//   *
//  * *
// *   *
// */

// // for (let i = 0; i < 5; i++) {
// //     let line = '';
// //     for (let j = 0; j < 5; j++) {
// //         if (i === j || j === 4 - i) {
// //             line += '*';
// //         } else {
// //             line += ' ';
// //         }
// //     }
// //     console.log(line);
// // }



// // 8. X:

// // * *
// // * *
// // *
// // * *
// // * *

// for (let i = 0; i < 5; i++) {
//     let line = '';
//     for (let j = 0; j < 5; j++) {
//         if (i === j || j === 4 - i) {
//             line += '*';
//         } else {
//             line += ' ';
//         }
//     }
//     console.log(line);
// }



// // 9. Number Triangle:
// // 1
// // 12
// // 123
// // 1234
// // 12345

// for (let i = 1; i <= 5; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += j;
//     }
//     console.log(line);
// }



// // 10. Repeated Number Triangle:
// // 1
// // 22
// // 333
// // 4444
// // 55555

// for (let i = 1; i <= 5; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += i;
//     }
//     console.log(line);
// }


// // 11. Inverted Number Triangle:
// // 12345
// // 1234
// // 123
// // 12
// // 1

// for (let i = 5; i >= 1; i--) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += j;
//     }
//     console.log(line);
// }


// // 12. Inverted Number Square:
// // 54321
// // 54321
// // 54321
// // 54321
// // 54321

// for (let i = 0; i < 5; i++) {
//     let line = '';
//     for (let j = 5; j >= 1; j--) {
//         line += j;
//     }
//     console.log(line);
// }


// // 13. Right-Aligned Triangle:
// // *
// // **
// // ***
// // ****
// // *****

// for (let i = 1; i <= 5; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += '*';
//     }
//     console.log(line);
// }


// // 14. Inverted Number Ladder:
// // 12345
// // 1234
// // 123
// // 12
// // 1

// for (let i = 5; i >= 1; i--) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += j;
//     }
//     console.log(line);
// }


// // 15. Alphabet Triangle:

// // A
// // AB
// // ABC
// // ABCD
// // ABCDE

// for (let i = 1; i <= 5; i++) {
//     let line = '';
//     for (let j = 0; j < i; j++) {
//         line += String.fromCharCode(65 + j);
//     }
//     console.log(line);
// }