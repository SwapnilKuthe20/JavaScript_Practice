
// :::: Convert String into Number ::::

let percentage = '76';   // string
// console.log(typeof percentage);

let percent = 77;    // number
// console.log(typeof percent);

let numberPercentage = Number(percentage); // number
// console.log(typeof numberPercentage);

let accNumber = "123asdf"   // what if we convert this string into number ? -->ans- (NaN)
// console.log(typeof accNumber); // string

let numberAccNumber = Number(accNumber);
// console.log(typeof numberAccNumber);    // type convert into number --> number
// console.log(numberAccNumber);  //ans--> NaN --> but its actually not converted 




// :::: convert Number into String ::::


let age = 24;
// console.log(age);
// console.log(typeof age);

let convertAge = String(age);
// console.log(convertAge);  // "24"
// console.log(typeof convertAge);  // yes it is converted into String





// :::: Convert Boolean into Number ::::

let isPass = true;
// console.log(isPass);   // true
// console.log(typeof isPass);  // boolean

let convertIsPass = Number(isPass)
// console.log(convertIsPass);         // 1
// console.log(typeof convertIsPass);  // number


let isAllowed = false;
// console.log(isAllowed);         // false
// console.log(typeof isAllowed);  // boolean

let convertIsAllowed = Number(isAllowed);
// console.log(convertIsAllowed);         // 0
// console.log(typeof convertIsAllowed);  // number



// ************** Operation ***************

// console.log(2 + 2);  // 4
// console.log(2 - 2);  // 0
// console.log(2 * 2);  // 4
// console.log(2 / 2);  // 1
// console.log(2 ** 2); // 4 (to the power)
// console.log(2 % 2);  // 0 (modulus)


let str1 = "Swap";

let str2 = " Neel";

let Addition = str1 + str2

// console.log(Addition);

// -----------------------

// console.log(2 + '2')     // 22
// console.log("2" + 2)     // 22
// console.log("2" + "2")   // 22
// console.log("2" + 2 + 3) // 223
// console.log(2 + 2 + "3") // 43





























