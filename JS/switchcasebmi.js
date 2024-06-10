// let height = 5.5; // height in feet
// let weight = 80; // weight in kg
// let mheight = height * 0.3048; // convert height to meters
// let bmi = weight / (mheight * mheight); // calculate BMI using height in meters
// console.log(bmi);

// switch (true) {
//     case 'Underweight':
//         console.log('Underweight');
//         break;
//     case 'Normal':
//         console.log('Normal');
//         break;
//     case 'Overweight':
//         console.log('Overweight');
//         break;
//     case 'Obesity':
//         console.log('Obesity');
//         break;
//     default:
//         console.log('Invalid input');
//         break;
// }


let fheight = 30;
let weight = 50;
let mheight = fheight * 0.3048;
let bmi = weight/(mheightmheight);
console.log(bmi);

switch(true){
    case(bmi<18.5):
        console.log('You are underweight');
        break;
    case(bmi>=18.5 && bmi <=24.9):
        console.log('You have normal bmi index');
        break;
    case(bmi>=25 && bmi<=29.9):
        console.log('You are overweight');
        break;
    default:
        console.log('You are obese');
        break;
}