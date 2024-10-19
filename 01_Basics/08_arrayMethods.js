// :::: Array define and initialization :::::

// let arr = [10, 20, 30, 40, 50, 60];
// console.log(arr);                        // [10, 20, 30, 40, 50, 60]
// console.log(arr.length);                 // 6
// console.log(typeof arr);                 // object
// console.log(Array.isArray(arr));         // true

// let arr1 = ["swap", 7, true, 20, null, undefined, [1, 3, 4, 5, 6], { name: "Neel" }];
// console.log(arr1.length);                     // 8
// console.log(arr1[0]);                         // "swap"
// console.log(arr1[arr1.length - 1]);           // {name : "Neel"}
// console.log(Array.isArray(arr1));             // true
// console.log(typeof arr1);                     // object

// let arr2 = [];
// console.log(typeof arr2);                       // object
// console.log(Array.isArray(arr2));               // true
// ---------------------------------------------------------------------------------------------

// If we copy Array it will create Shallow copy insted of Deep copy.
// Sallow copy is the copy whose properties share the same refernce point.
// Deep copy is the copy whose properties does not share the same refernce point.

// let nos = [1, 2, 3, 4, 5];

// console.log(nos["1"]);                               // 2
// console.log(nos[1] === nos["1"]);                    // true
// console.log(nos["01"]);                              // undefined


// console.log(nos[-1]);                                // undefined

// let res = nos.push(6);
// console.log(res, "... copy array");                 // 6

// let out = nos.pop();
// console.log(out);                                   // 5

// console.log(nos, "....original array");             // mutate --> [ 1, 2, 3, 4 ]

// -------------------------------------------------------------------------------------------

// ::::: Array Methods :::::

// let basicArr = ["swap", 7, "neel", "kuthe", 20, 13, "snap"];
// console.log(basicArr.length);                         // 7

// ::::: Methods based on ADD / Remove Elements :::::

// 1. push() :: Add element from the end.
// let arr1 = basicArr.push("sid");
// console.log(arr1);                          // 8
// console.log(basicArr);                      // ["swap", 7, "neel", "kuthe", 20, 13, "snap", "sid"]

// basicArr.push("Gitzz", "Akki")
// console.log(basicArr);

// ::: if we add element in higher index of length of an array it will create empty slots
//     even it does not create undefined element

// basicArr[10] = "Sandy";
// console.log(basicArr.length);                // 11
// console.log(basicArr[9]);                    // undefined
// console.log(basicArr);                       // ["swap", 7, "neel", "kuthe", 20, 13, "snap", 'snap',<3 empty items>,'Sandy']


// 2. pop() :: remove element from the end
// console.log(basicArr.pop());                      // 'snap'
// console.log(basicArr);                            // [ 'swap', 7, 'neel', 'kuthe', 20, 13 ]


// 3. shift() :: remove element from the starting of an array.
// console.log(basicArr.shift());                    // 'swap'
// console.log(basicArr);                            // [ 7, 'neel', 'kuthe', 20, 13, 'snap' ]


// 4. unshift() :: add element from the starting of an Array.
// console.log(basicArr.unshift("swapsid"));         // 8
// console.log(basicArr);                            // [ 'swapsid', 'swap', 7, 'neel', 'kuthe', 20, 13, 'snap' ]


// 5. splice() :: Adds/removes/replace items from the array.

/*
Syntax:: array.splice(start, deleteCount, item1, item2, ...);

             start:       Index at which to start modifying the array.
       deleteCount: Number of elements to be removed (optional).
 item1, item2, ...: Elements to be added (optional).
 */


// basicArr.splice(1, 3);
// console.log(basicArr, "....Splice ");           // [ 'swap', 20, 13, 'snap' ]

// basicArr.splice(0, basicArr.length)
// console.log(basicArr);                          // []

// basicArr.splice(3, 2, "Appu", "rajje");
// console.log(basicArr);                           // ['swap',  7,'neel',  'Appu','rajje', 13,'snap']
// -----------------------------------------------------------------------------------

let cart = ['Laptop', 'Mouse', 'Keyboard', 'Monitor'];

// A user removes the 'Mouse' from the cart.

// let removeMouse = cart.splice(1, 1);
// console.log(removeMouse);
// console.log(typeof removeMouse);
// console.log(Array.isArray(removeMouse));
// console.log(cart);

// A user decides to replace the 'Monitor' with 'Tablet'

// let replaceMonitor = cart.splice(3, 1, "Tablet");
// console.log(cart);

// ---------------------------------------------------------

// let todoList = ['Buy groceries', 'Clean the house', 'Finish project'];

// The user finishes a task and removes it from the list.

// let remFinishTask = todoList.splice(0, 1);
// console.log(todoList);

// The user adds a new task in the second position.

// let newTask = todoList.splice(1, 0, "Pay bills");
// console.log(todoList);
// ------------------------------------------------

let playlist = ['Song1', 'Song2', 'Song3', 'Song4'];

// Add new song in list
// let newSong = playlist.splice(playlist.length, 0, 'song5');
// console.log(playlist);

// remove Song3 from list

// let removeSong3 = playlist.splice(2, 1);
// console.log(removeSong3);
// console.log(playlist);

// add new song in 3rd poaition

// let addThird = playlist.splice(2, 0, 'SongNew');
// console.log(playlist);
// ------------------------------------------------

// :::::: indexOf()  ::

// let userRoles = ['user', 'moderator', 'admin'];

// find index of moderator

// let indOfModerator = userRoles.indexOf('moderator')
// console.log(indOfModerator);                           // 1
// let indOfAdmin = userRoles.indexOf('admin')
// console.log(indOfAdmin);                               // 2
// let indOfUser = userRoles.indexOf('user')
// console.log(indOfUser);                                // 0
// let indOfUnknown = userRoles.indexOf('developer')
// console.log(indOfUnknown);                             // -1

// ------------------------------------------------------------
// 1. Checking for User Roles in an Application
// Check whether admin is available or not

// let isAdminAvailable = 'admin';
// if (userRoles.indexOf(isAdminAvailable) !== -1) {
//       console.log('admin is available');
// } else if (userRoles.indexOf(isAdminAvailable === -1)) {
//       console.log("Admin is not available");
// }
// ------------------------------------------------------------

// 2. Finding the Position of a Product in a List
// Suppose you have an inventory of products and want to know the position of a particular product in the list

// let products = ['laptop', 'smartphone', 'tablet', 'desktop'];
// let productToFind = 'tablet';

// let position = products.indexOf(productToFind);

// if (position !== -1) {
//       console.log(`Position of the tablet is ${position}`);
// } else {
//       console.log("Poduct not found");
// }
// ------------------------------------------------------------
// 3. Verifying Whether a Number is in a Lottery Draw

// let lotteryNumbers = [4, 8, 15, 16, 23, 42];

// let myNumber = 20;

// if (lotteryNumbers.indexOf(myNumber) !== -1) {
//       console.log('Congratulations you won the lottery');
// } else {
//       console.log("Sorry better luck next time");
// }
// ------------------------------------------------------------

// 4. Checking If an Email Already Exists in a Subscription List

// let subscribers = ['swap@example.com', 'tejas@example.com', 'arnav@example.com'];
// let myEmail = 'arnav@example.com';

// if (subscribers.indexOf(myEmail) !== -1) {
//       console.log('Sorry emailId already registered');
// } else {
//       console.log("regitration sunccessfully");
// }
// ------------------------------------------------------------

// :::: includes() ::::

// const userRoles = ['admin', 'editor', 'viewer'];
// let isincludes = "admin..";
// if (userRoles.includes(isincludes)) {
//       console.log("Admin is includes");
// } else if (!userRoles.includes(isincludes)) {
//       console.log("Admin is not includes");
// }
// ------------------------------------------

// Search in a List of Favorite Items

// const favoriteItems = ['laptop', 'phone', 'tablet'];
// // let search = prompt("Enter favourite Item");
// let searchItem = "phone";
// let isFav = favoriteItems.includes(searchItem)
// let notFav = favoriteItems.includes("mobile")

// console.log(`Given item is favorite ${isFav}`);          // true
// console.log(`Given item is favorite ${notFav}`);         // false

// ------------------------------------------------------------

// ::::: find()  :::::

// The find() method is an iterative method.It calls a provided callbackFn function
// once for each element in an array in ascending - index order, until callbackFn returns a truthy value.
// find() then returns that element and stops iterating through the array.
// If callbackFn never returns a truthy value, find() returns undefined.

//  Finding a Customer by ID :

// const customers = [
//       { id: 1, name: "John Doe", age: 30 },
//       { id: 2, name: "Jane Smith", age: 25 },
//       { id: 3, name: "Mike Johnson", age: 40 }
// ];

// const Customer = customers.find(cust => cust.id === 2);
// console.log(Customer);
// ------------------------------------------------------------

// Finding the First Available Flight Seat :

// const seats = [
//       { seatNumber: '1A', class: 'First', available: false },
//       { seatNumber: '3C', class: 'Economy', available: true },
//       { seatNumber: '2B', class: 'Business', available: true }
// ];

// let firstAvailable = seats.find(seat => seat.class === "Business" && seat.available === true);
// console.log(firstAvailable);                // { seatNumber: '2B', class: 'Business', available: true }

// let firstNotAvailable = seats.find(seat => seat.class === "First" && seat.available === true);
// console.log(firstNotAvailable);             // undefined
// ------------------------------------------------------------






