// question 1
const colors = ['red', 'green','blue'];
console.log(colors); // [red, green, blue]

const reversedColors = colors.toReversed();
console.log(reversedColors); // [blue, green, red]





// question 2
// maximum number
function getMaxElement(arr) {
    return Math.max(...arr);
}

// testing:
let numbers = [2, 8, 5, 10, 1];
let maxNumber = getMaxElement(numbers);

console.log("Maximum element:", maxNumber);

// minimum number
function getMinElement(arr) {
    return Math.min(...arr);
}

// testing:
let numberss = [2, 8, 5, 10, 1];
let minNumber = getMinElement(numberss);

console.log("Minimum element:", minNumber);





// question 3
function findMaxMin(arr) {
    if (arr.length === 0) {
      return { max: undefined, min: undefined };
    }

    // Initialize max and min with the first element of the array
    let max = arr[0];
    let min = arr[0];

    // Iterate through the array to find max and min
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}

// testing:
let numbersss = [3, 1, 7, 5, 10, 2];
let result = findMaxMin(numbersss);

console.log("Maximum value:", result.max);
console.log("Minimum value:", result.min);







// question 4
// Example array
let numberssss = [2, 8, 3, 10, 5, 7];

// Function to filter numbers greater than 5
function filterNumbersGreaterThanFive(numberssss) {
    return numberssss > 5;
}

// Use the filter method
let filteredNumbers = numberssss.filter(filterNumbersGreaterThanFive);

// display the result
console.log("Original array:", numberssss);
console.log("Filtered array (numbers greater than 5):", filteredNumbers);




// question 5




// question 6

function sumOfPositiveNumbers(arr) {
    return arr.reduce(function (sum, number) {
        return number > 0 ? sum + number : sum;
    }, 0);
}

// testing:
let Numbers = [-2, 3, -5, 7, 10, -1];
let positiveSum = sumOfPositiveNumbers(Numbers);

console.log("Array:", Numbers);
console.log("Sum of Positive Numbers:", positiveSum);





// question 7



// question 8



// question 9
function removeDuplicates(arr) {
    return arr.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
}

// testing:
let arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 6, 1, 7, 8, 5];
let uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log("Array with duplicates:", arrayWithDuplicates);
console.log("Array with duplicates removed:", uniqueArray);


// question 10

let nestedArray = [1, [2, 3], [4, [5, 6]]];

// Using the flat method to flatten the array
let flattenedArray = nestedArray.flat(Infinity);

// Output the result
console.log("Nested array:", nestedArray);
console.log("Flattened array:", flattenedArray);









