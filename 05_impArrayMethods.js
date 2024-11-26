////  ::: Most important Array methods in js ::::

//// forEach() --> does not return new array.
//// map(), filter(), reduce() --> returns new array.   

let myArray = [12, 34, 65, 67, 20];

// myArray.forEach(function (number, index) {
//     console.log(number, "is the element in the array");
//     console.log(index, "is the index of an array");
// });

//// :::: find out index of an given element :::

// let givenNumb = 20;
// myArray.forEach((number, index) => {
//     if (givenNumb === number) {
//         console.log(index, "of given numb");
//     }
// })

//// ::: Addition of all array elements :::

// let total = 0;
// myArray.forEach((numb) => {
//     total += numb;
//     console.log('total', total);
// })
// ------------------------------------------------

// :::: Map() ::::

let studentData = [
    { name: "Swap", age: 21 },
    { name: "Neel", age: 23 },
    { name: "Sid", age: 22 },
    { name: "Sneel", age: 27 }
];

const studentNames = studentData.map((user) => {
    return user.name;
});
// console.log(studentNames);
// ------------------------------------------------

//// ::: Square of each elements :::
let myNumbers = [1, 2, 3, 4, 5];

const square = myNumbers.map((numb) => {
    return numb * numb;
})
// console.log(square);
// ------------------------------------------------

//// :::: filter() ::::

//// :::: find out even numbers ::::

let oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = oneToTen.filter((numb) => {
    return numb % 2 === 0;
})

// console.log(isEven);
// ------------------------------------------------

//// :::: reduce() ::::

//// if we don't pass accumulator default value, 
//// then accumulator takes 0th Index element and currentValue takes 1st Index element.

//// if we pass accumulator default value, 
//// then accumulator takes defaultvalue and currentValue takes 0th Index element.

//// findout total sum of array.

let reduceArray = [1, 2, 3, 4, 5];
const totalSum = reduceArray.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
})
// console.log(totalSum);

////     Accumulator                     currentValue    result
////        1 (0th Index element)             2           3
////        3 (Result)                        3           6
////        6 (Result)                        4          10
////        10 (Result)                      15          15

// ------------------------------------------------------------

//// :: total of all CartItems in cart ::

let cartItems = [
    { productId: 1, productName: "Mobile", Price: 12000 },
    { productId: 2, productName: "Shoes", Price: 2000 },
    { productId: 3, productName: "laptop", Price: 45000 },
    { productId: 4, productName: "tablet", Price: 8000 },
];

const totalCartPrice = cartItems.reduce((totalPrice, currentPrice) => {
    return totalPrice + currentPrice.Price;
}, 0);

// console.log(totalCartPrice, "Total Cart price");
// ------------------------------------------------------------

































