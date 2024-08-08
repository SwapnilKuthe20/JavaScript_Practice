const accountId = 123456;
let accountName = "Swapnil Kuthe";
var accountEmail = "swapnilkuthe20@gmail.com";
accountCity = "Nagpur";

let accountState; // undefined


// console.log(accountId);

console.table([accountId, accountName, accountEmail, accountCity, accountState])
// accountId = 654321;  // TypeError: Assignment to constant variable.
// const can't be reAssign or reDefined
// let accountId = 756756; //SyntaxError: Identifier 'accountId' has already been declared
// console.log(accountId);

accountName = "Swap";
accountEmail = "Swap@gmail.com";
accountCity = "Bhandara";


console.table([accountId, accountName, accountEmail, accountCity, accountState])


/*
  que - Why prefer not to use var ?
  ans - because of issue in the block and functional scope..
*/




