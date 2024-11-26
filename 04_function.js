
// dry -- Dont repeate yourself
// Reusable function

// ::::  Function declaration  ::::

function add(a, b) {
    return a + b;
}

// console.log(result);
// console.log(add(3, 8));
// console.log(add(3, 3));
// console.log(add(3, 6));
// console.log(add(3, 2));
// --------------------------------------------

// :::  isEven function :::

// function isEven(num) {
// if (num % 2 == 0) {
//     true;
// }
// return false;
// }

// ::: OR :::

function isEven(num) {
    return num % 2 == 0;
}

// let num = +prompt("Enter number to check number is even or odd");
// console.log(isEven(num));

// -------------------------------------------------

// :::  input = "String"  --> output= first char :::

function firstChar(chara) {
    return chara[0];
}

// let myName = prompt("Enter your name");
// console.log(firstChar(myName));
// -------------------------------------------------

// ::: Input = Array --> output= index of target number :::

const targetInd = (target) => {
    return arr.indexOf(target);
}

let arr = [12, 24, 76, 87, 34, 20, 7];
// console.log(targetInd(12));

// :::: OR ::::

const targetNum = (target) => {
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] === target) {
            return i;
        }
    }
    return false;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let inp = +prompt("Enter number to check index in array ");
// console.log(targetNum(inp));

// -------------------------------------------------

// ::: Function expression :::

// check whether given number id odd.
// if even returns false if odd returns true.

const isOddFunction = function (numb) {
    return numb % 2 !== 0;
}

// let inp = +prompt("Enter number to check its odd or not");
// const isODD = isOddFunction(inp);
// console.log(isODD);
// -----------------------------------------------

// :::: Arrow Function ::::

const multiply = (a, b) => a * b;

// console.log(multiply(2, 3));
// -----------------------------------------------

// :::: Function Hoisting ::::

// Simple function can hoist.
// function expression and arrow function cannot be hoist.

// console.log(myFunct());     // Hello

function myFunct() {
    console.log("Hello");
}
// -----------------------------------------------

// console.log(myFunct1());     // Uncaught ReferenceError: Cannot access 'myFunct1' before initialization

const myFunct1 = function () {
    console.log("heyyyy");
}

// -----------------------------------------------
// console.log(myFunct2());     // Uncaught ReferenceError: Cannot access 'myFunct1' before initialization

var myFunct2 = () => {
    console.log("Hiiiii");
}
// -------------------------------------------------------

// :::: Function inside function ::::
// We can create n no. of functions inside function 

function funcInsideFunc() {
    const funct1 = function () {
        console.log("Function 1");
    }

    const addFun = (num1, num2) => num1 * num2;

    funct1();
    console.log(addFun(2, 5));
}
// -------------------------------------------------------

// :::: Lexical Scope ::::

//// --> if variable is not in their own scope it will check its lexical scope.

const city = "Nagpur";

function myCity() {
    // const city = "Pune";

    const myLocation = () => {
        // const city = "Mumbai";
        console.log("My city is ", city);
    }
    myLocation();
}

// myCity();
// -----------------------------------------------

////  :::: Block Scope Vs Functional Scope ::::

//// let and const are block scope
//// var is functional scope
// -----------------------------------------------
//// ::: Default parameter ::::

function Divide(a, b = 0) {
    return a / b;
}
// let res = Divide(12, 3);
// console.log('Divide of numbers', res);

//// :::: Param Destructuring ::::

function addAllFunct(...numbers) {

    // console.log(numbers);
    // console.log(typeof numbers);
    // console.log(Array.isArray(numbers));

    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
// const addAll = addAllFunct(12, 34, 4, 2, 3, 5);
// console.log("Addition of all is", addAll);

// -----------------------------------------------

const personObj = {
    name: "Swap",
    age: 21
}

//// Without Destructuring ::::

// function objDest() {
//     console.log(personObj.name);
//     console.log(personObj.age);
// }

//// With Destructuring ::::
const myObj1 = ({ name, age }) => {
    console.log(name);
    console.log(age);
}
// myObj1(personObj);
// -----------------------------------------------

//// Callback function ::::

//// We can pass function as a argument.

function functionCallback(name) {
    console.log("CallBack function");
    console.log(`My name is ${name}`);
}

function mainFunction(CallBack) {
    console.log("main function");
    // console.log(CallBack);
    CallBack("Swapnil");
}

mainFunction(functionCallback);
// -----------------------------------------------

























