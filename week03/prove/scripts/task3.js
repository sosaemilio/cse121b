/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.


/** Addition **/

function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addend1 = parseInt(document.getElementById("addend1").value);
    let addend2 = parseInt(document.getElementById("addend2").value);
    
    let sum =  add(addend1, addend2);
    document.getElementById("sum").value = sum;
}

const addNumbersButton = document.getElementById("addNumbers");

addNumbersButton.addEventListener("click", () => (
    addNumbers()
));

/** Substraction **/

function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let minuend = parseInt(document.getElementById("minuend").value);
    let subtrahend = parseInt(document.getElementById("subtrahend").value);
    
    let result =  subtract(minuend, subtrahend);
    document.getElementById("difference").value = result;
}

const substractNumbersButton = document.getElementById("subtractNumbers");

substractNumbersButton.addEventListener("click", () => {
    subtractNumbers()
});

/** Multiplication **/

function multiple(number1, number2) {
    return number1 * number2;
}

function multipleNumbers() {
    let factor1 = parseInt(document.getElementById("factor1").value);
    let factor2 = parseInt(document.getElementById("factor2").value);
    
    let result =  multiple(factor1, factor2);
    document.getElementById("product").value = result;
}

const multiplicationNumbersButton = document.getElementById("multiplyNumbers");

multiplicationNumbersButton.addEventListener("click", () => {
    multipleNumbers()
});


/** Division **/

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let dividend = parseInt(document.getElementById("dividend").value);
    let division = parseInt(document.getElementById("divisor").value);
    
    let result =  divide(dividend, division);
    document.getElementById("quotient").value = result;
}

const divisionButton = document.getElementById("divideNumbers");

divisionButton.addEventListener("click", () => {
    divideNumbers()
});

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year


const currentDate = new Date();
let currentYear;

currentYear = currentDate.getFullYear();

document.getElementById("year").textContent = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

var numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
document.getElementById("array").textContent = numbersArray;

var oddNumbers = numbersArray.filter((number) => number % 2 == 0);
document.getElementById("odds").textContent = oddNumbers;

var evenNumbers = numbersArray.filter((number) => number % 2 == 1);
document.getElementById("evens").textContent = evenNumbers;

var sumArray = numbersArray.reduce((total, value) => total + value);
document.getElementById("sumOfArray").textContent = sumArray;

var multipliedNumbers = numbersArray.map((number) => number * 2);
document.getElementById("multiplied").textContent = multipliedNumbers;

sumOfMultiplied = numbersArray.map((number) => number * 2).reduce((total, value) => total + value);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;