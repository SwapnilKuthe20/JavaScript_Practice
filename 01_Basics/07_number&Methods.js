// :::::: Number Methods ::::::

// 1. toFixed(): formats a number to a specific number of decimal places.

// let num = 12.876876;             // fix 2 decimal
// let fix = num.toFixed(2);
// console.log(fix);               // 12.88
// -------------------------------------------------------------

// 2. toString(): converts a number to a string.

// let numb = 454544;
// let str = numb.toString();
// console.log(str);
// console.log(typeof str);        // string

// -------------------------------------------------------------

// 3. Math.round(): rounds to the nearest integer.

// let num = 12.45;
// let num2 = 22.78
// console.log(Math.round(num));            // 12
// console.log(Math.round(num2));           // 23
// -------------------------------------------------------------

// 4. Math.floor() and Math.ceil(): round down and round up, respectively.

// console.log(Math.floor(12.99));         // 12
// console.log(Math.ceil(12.99));          // 13

// -------------------------------------------------------------

// 5. Math.random(): generates a random number between 0 and 1.

// console.log(Math.random());
// -------------------------------------------------------------

// 6. toLocaleString() : to represent large numbers like 1 million or 1 billion in a readable format.

// console.log((6756757).toLocaleString());            // 6,756,757
// console.log((6756755454547).toLocaleString());      // 6,756,755,454,547

// -------------------------------------------------------------

// :::::: Indian currency ::::::::

// function formatToIndianCurrency(number) {
//     const x = number.toString();
//     const lastThree = x.slice(-3);
//     const otherNumbers = x.slice(0, -3);
//     const formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
//     return otherNumbers !== "" ? formattedNumber + "," + lastThree : lastThree;
//   }
  
//   let largeNumber = 12345679;
//   console.log(formatToIndianCurrency(largeNumber));  // Output: 12,34,56,789
  







