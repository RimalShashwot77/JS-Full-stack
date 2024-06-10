//1.Create two variables, one for your name and another for your age. Print a sentence combining those variables.
var fullName = "Shashwot Rimal"
var Age = "20"
console.log("My Name is " + fullName + " and i am " + Age + " Years old");


//2.Assign the value 10 to a variable. Then multiply that variable by itself and store the result in another variable. Print the final value.
var a = 10;
const mulResult = a * a;
console.log(mulResult);


//3.Write code to check if the character stored in a variable is uppercase or lowercase. Print &quot;uppercase&quot; or &quot;lowercase&quot; accordingly. (Hint: Use character codes) Function to check if a character is uppercase or lowercase
function checkCase(character) {
    var charCode = character.charCodeAt(0);
    // Checking uppercase range
    if (charCode >= 65 && charCode <= 80) {
        console.log("uppercase");
    } 
    // Checking lowercase range
    else if (charCode >= 97 && charCode <= 122) {
        console.log("lowercase");
    } 
    // If the character is not a letter
    else {
        console.log("The character is not a letter.");
    }
}
var character = 'a';
checkCase(character); 

character = 'D';
checkCase(character); 

character = '6';
checkCase(character); 


//4.Declare two variables with numeric values. Add them together and print the sum. Then, subtract the smaller number from the larger number and store the difference in a new variable. Print the difference.
var a = 50;
var b = 10;

//Sum
var sum = a + b;
console.log("Sum:", sum);

//larger number
var largerNumber = Math.max(a, b);

//smaller number
var smallerNumber = Math.min(a, b);

//Difference
var difference = largerNumber - smallerNumber;
console.log("Difference (largerNumber - smallerNumber):", difference);


//5.Imagine you have a variable storing a product price. Write code to apply a 10% discount and print the discounted price.
var productPrice = 2300;

// Discounted price
var discount = 0.10; //10 % discount
var discountedPrice = productPrice - (productPrice * discount);

console.log("Original Price:", productPrice);
console.log("Discounted Price after 10% off):", discountedPrice);
