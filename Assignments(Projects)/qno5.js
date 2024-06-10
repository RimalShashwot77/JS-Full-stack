// How can you use an if/else statement to check if a given string is longer than 10 characters or not
// Formula = (year % 4 === 0 && year%100! == 0) or (year%400 === 0)

let year = 2020;
let result = (year % 4 ===0 && year%100 !== 0)

//console.log(result);
if(result==true){

    console.log("Year is a leap year");
} 
else
{
    console.log("Year is not a leap year");
}





if ((year %4 === 0 && year% 100 !== 0) || year % 400 === 0 ) {
    console.log('$ (year) is a leap year.');
} 
else
{
    console.log('$ (year) is not a leap year.');
}
