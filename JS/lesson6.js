function differenceNumbers(numbers, initialValue) {
    return numbers.reduce((acc, curr) => acc - curr, initialValue);
    // Use reduce to subtract each number from the accumulator, starting from the initial value

  }
  
  const numbers = [20, 10, 5];
  const diff = differenceNumbers(numbers, 100); // Starts with 100 as the initial value
  console.log(diff); // Output: 65
