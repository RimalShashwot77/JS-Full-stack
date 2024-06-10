//1. Write a function that takes two parameters and returns their sum.

function addNumbers(a, b) {
    return a + b;
}

// Example usage:
const result = addNumbers(5, 7);
console.log(result); // Output: 12


// 2. Create a function that calculates the average of an array of numbers.

function calAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// Example usage:
console.log(calAverage([1, 2, 3, 4, 5])); // Output: 3


// 3. Write a function that checks if a given number is even or odd.

function isEven(num) {
    return num % 2 === 0 ? 'Even' : 'Odd'; // Use the modulus operator to check if the number is even or odd.
}

// Example usage:
console.log(isEven(4)); // Output: Even
console.log(isEven(7)); // Output: Odd



// 4. Create a function that reverses a string.

function reverseString(str) {
    return str.split('').reverse().join(''); // Split the string into an array, reverse it, and join it back into a string.
}

// Example usage:
console.log(reverseString('hello')); // Output: olleh



// 5. Write a function that finds the maximum value in an array of numbers.

function findMax(arr) {
    return Math.max(...arr); // Spread the array into individual elements and find the maximum value.
}

// Example usage:
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5



// 6. Create a function that converts Celsius to Fahrenheit.

function celstofahr(celsius) {
    return (celsius * 9/5) + 32; // Apply the formula for converting Celsius to Fahrenheit.
}

// Example usage:
console.log(celstofahr(0)); // Output: 32



// 7. Write a function that generates a random number between a given minimum and maximum.

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number within the specified range.
}

// Example usage:
console.log(getRandomNum(1, 10)); // Output: a random number between 1 and 10



// 8. Create a function that checks if a string is a palindrome.

function isPalin(str) {
    const reversedStr = str.split('').reverse().join(''); // Reverse the string and compare it with the original.
    return str === reversedStr;
}

// Example usage:
console.log(isPalin('racecar')); // Output: true
console.log(isPalin('hello')); // Output: false



// 9. Write a function that capitalizes the first letter of each word in a sentence.

function capitalWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // Capitalize each word.
}

// Example usage:
console.log(capitalWords('hello world')); // Output: Hello World



// 10. Create a function that returns the factorial of a given number.

function factorial(n) {
    if (n === 0) return 1; // Base case: 0! is 1.
    return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}

// Example usage:
console.log(factorial(5)); // Output: 120



// 11. Write a function that counts the number of occurrences of a specific element in an array.

function occurrences(arr, element) {
    return arr.filter(el => el === element).length; // Filter the array for the element and count the occurrences.
}

// Example usage:
console.log(occurrences([1, 2, 2, 3, 4, 2], 2)); // Output: 3


// 12. Create a function that checks if a given year is a leap year.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); // Leap year logic
}

// Example usage:
console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2021)); // Output: false



// 13. Write a function that merges two arrays and returns the sorted result.

function mergeandsort(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b); // Merge the arrays and sort them.
}

// Example usage:
console.log(mergeandsort([3, 1, 4], [2, 5, 0])); // Output: [0, 1, 2, 3, 4, 5]



// 14. Create a function that converts a number to its Roman numeral representation.

function toRoman(num) {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = '';
    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}

// Example usage:
console.log(toRoman(1987)); // Output: MCMLXXXVII



// 15. Write a function that finds the second smallest element in an array of numbers.

function secondSmallest(arr) {
    let [min, secondMin] = [Infinity, Infinity];
    for (let num of arr) {
        if (num < min) {
            [secondMin, min] = [min, num];
        } else if (num < secondMin && num !== min) {
            secondMin = num;
        }
    }
    return secondMin;
}

// Example usage:
console.log(secondSmallest([3, 1, 4, 1, 5, 9])); // Output: 3



// 16. Create a function that calculates the area of a circle given its radius.

function circlearea(radius) {
    return Math.PI * radius * radius; // Use the formula for the area of a circle.
}

// Example usage:
console.log(circlearea(3)); // Output: 28.274333882308138



// 17. Write a function that truncates a string if it exceeds a specified length and appends &quot;...&quot; to the end.

function truncateString(str, length) {
    return str.length > length ? str.slice(0, length) + '...' : str; // Truncate the string if it exceeds the length.
}

// Example usage:
console.log(truncateString('Hello, world!', 5)); // Output: Hello...



// 18. Create a function that checks if a given string contains only digits.

function isOnlyDigits(str) {
    return /^\d+$/.test(str); // Use a regular expression to check if the string contains only

}

// 19. Write a function that removes all falsy values (false, null, 0, &quot;&quot;, undefined, and NaN) from an array.

function falsyvalue(arr) {
    return arr.filter(Boolean); // Use the Boolean function to filter out all falsy values.
}

// Example usage:
console.log(falsyvalue([0, 1, false, 2, '', 3, 'a', NaN, 's', 34])); // Output: [1, 2, 3, 'a', 's', 34]



// 20. Create a function that generates a new array with unique values from a given array.

function uniquevalue(arr) {
    return [...new Set(arr)]; // Use a Set to eliminate duplicates and convert it back to an array using the spread operator.
}

// Example usage:
console.log(uniquevalue([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]