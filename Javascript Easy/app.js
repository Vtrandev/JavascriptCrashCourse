// Add two numbers 
function addition(a, b) {
  return a + b;
}

console.log(addition(-3, -5));

function hoursIntoSeconds(hours) {
  return hours * 3600;
}

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));

// Extend a String
console.log("Extend a string")
function appendFrontend(str) {
    return str + "Frontend"
}

console.log(appendFrontend('Apple'))
console.log(appendFrontend('Banana'))
console.log(appendFrontend('Orange'))

// (+num) to change string to numbers

//Greater than 100?
function sumGreaterthan100(num1, num2) {
    return num1 + num2 >= 100
}

console.log(sumGreaterthan100(20, 10))
console.log(sumGreaterthan100(50, 60))
console.log(sumGreaterthan100(100, -50))

//Less than or Equal to zero
console.log("Less than or equal to zero")
function lessThanOrEqualToZero(num) {
    return num <= 0
}

console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

//Opposite boolean
console.log("Opposite boolean")
function oppositeBoolean(bool) {
    return !bool
}

console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

//Is not the number 0
console.log("Is not the number 0")
function isNotZero(num) {
    return num !== 0
}

console.log(isNotZero('0'));
console.log(isNotZero(0));

//If a number is Even, return 1, otherwise return -1
console.log("If a number is Even, return 1, otherwise return -1")

function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1
}

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

//Check if user is logged in AND subscribed
console.log("Check if user is logged in AND subscribed")

function isLoggedInAndSubscribed(str1, str2) {
    return str1 === 'LOGGED_IN' && str2 === 'SUBSCRIBED'
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));