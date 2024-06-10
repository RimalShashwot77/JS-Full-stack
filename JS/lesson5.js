// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Fetched!");
//     }, 1000);
// });
// }


// function getData() {
//     console.log(data); // Logs: "Data Fetched!" after 1 second
// }
// getData();




// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Fetched!");
//     }, 1000);
// });
// }

// async function getData() {
//     const data = await fetchData();
//     console.log(data); // Logs: "Data Fetched!" after 1 second
// }
// getData();




function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Fetched!");
    }, 1000);
});
}

function getData() {
    const data = fetchData();
    console.log(data); // Logs: "Data Fetched!" after 1 second
}
getData();



// find function
// const number = [10, 20, 30, 40, 50];
// ress = number.find(num => num>30);
// console.log(ress); // 40




// const numbers = [10, 20, 30, 40, 50];

// const getNumber = numbers.find((number) => {
//      number > 30;
// });
// console.log(getNumber); // undefined




// const numbers = [10, 20, 30, 40, 50];

// const getNumber = numbers.find((number) => {
//      number > 30;
// });
// console.log(getNumber); // undefined




// filter function

// const filteredNumbers = numbers.filer(num => num > 30);
// console.log(filteredNumbers); // [40, 50]assistant



// map function means operations on the whole array without changing the original array
const squaredNumbers = numbers.map(num => num-2);
console.log(squaredNumbers); 


//Rest & Spread Operator:
 
//Both of these operators are denoted by the same expression i.e (...) three dots. According to the situation & requirement we make use of the operators



//Spread Operator: Generally used to merge/concatenate arrays

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let sum = [...arr1,...arr2];
// console.log(Sum of array : [${sum}])



// Rest Operator: useful for allowing a function to accept an indefinite number of arguments as an array


//Before Rest Operator

let arr1 = [1,2,3,4,5];
let first = arr(0); // Extracting the first element
let rest = arr.slice(1); // Extracting the rest of the elements
console.log("First element", first); // 1
console.log("Rest of the elements", rest); // [2,3,4,5]


// const arr1 = [1,2,3,4,5];
// const first = arr(0); // Extracting the first element
// const rest = arr.slice(1); // Extracting the rest of the elements
// console.log("First element", first); // 1
// console.log("Rest of the elements", rest); // [2,3,4,5]


//  Rest Spread