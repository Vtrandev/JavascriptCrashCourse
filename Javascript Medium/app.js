
//If a number is Even, return 1, otherwise return -1
console.log("If a number is Even, return 1, otherwise return -1")

function falsyOrTruthy(elem1, elem2) {
    return !elem1 ? elem1 : elem2 || elem1[1]
}

console.log(falsyOrTruthy(0, 500));
console.log(falsyOrTruthy(false, 100));
console.log(falsyOrTruthy([true, 'Dog']));

//Return the length of any given array
console.log("Return the length of any given array")

function arrLength(arr) {
    return arr.length
}

console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

//Get the last element in an array
console.log("Get the last element in an array")

function lastElem(arr) {
    return arr[arr.length - 1]
}

console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(['dog','cat','ball']));
console.log(lastElem([null, 5, false]));

//Array sum
console.log("Array sum")

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

//Add up numbers from a single number
console.log("Add up numbers from a single number")

function progressiveSum(num) {
    let sum = 0
    for (let i = num; i > 0; i--){
        sum += i
    }
    return sum
}

console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));

//Calculate time in mm:ss
console.log("Calculate time in mm:ss")

function calcTime(seconds) {
    let timeSeconds = seconds % 60
    let timeMinutes = Math.floor(seconds / 60)

    if (timeMinutes.toString().length === 1) {
        timeMinutes = '0' + timeMinutes;
    }
    if (timeSeconds.toString().length === 1) {
        timeSeconds = '0' + timeSeconds;
    }

    return `${timeMinutes}:${timeSeconds}`
}

console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));

//Find the largest number
console.log("Find the largest number")

function getMax(arr) {
    let bigNumber = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > bigNumber){
            bigNumber = arr[i]
        }
    }
    return bigNumber
}

console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

//Reverse a string
console.log("Reverse a string")

function reverseString(str) {
    let reverseString = ''
    for (let i = str.length-1; i >= 0; i--){
        reverseString += str[i];
    }

    return reverseString
}

console.log(reverseString('abc'));
console.log(reverseString('David'));
console.log(reverseString('This is cool'));