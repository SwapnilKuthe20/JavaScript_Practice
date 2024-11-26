//// Call , Apply , Bind ::::

// The call, apply, and bind methods are essential for mastering how to manipulate this in JavaScript.

// 1. call() -->
// Purpose: Invokes a function, allowing you to specify the this context and pass arguments individually.
// Syntax: functionName.call(thisArg, arg1, arg2, ...)

//// call : koi fn ko call kr skte h.

// 2. apply() -->
// Purpose: Similar to call(), but arguments are passed as an array.
// Syntax: functionName.apply(thisArg, [arg1, arg2, ...])

// 3. bind()
// Purpose: Returns a new function with this bound to the specified context. It does not invoke the function immediately.
// Syntax: const boundFunction = functionName.bind(thisArg, arg1, arg2, ...)
// -----------------------------------------------------------------------------------------------------------
// Key Differences
// call: Calls the function immediately with a specific this and arguments.
// apply: Same as call, but takes arguments as an array.
// bind: Creates a new function with a specific this but doesn’t call it immediately.
// -----------------------------------------------------------------------------------------------------------


const stdObj = {
    name: "Swap",
    age: 21
}
const stdObj1 = {
    name: "Sidd",
    age: 22
}
const stdObj2 = {
    name: "Neel",
    age: 23
}

function about(hobby, game) {
    console.log(`Std Name : ${this.name}..age :${this.age} hobby: ${hobby} game :${game}`);
}

// stdObj.about();     // undefined
// --------------------------------------------------------------------------------
//// call(ObjName, argument, argument);     // syntax
//// in call we have to pass arguments in string 

about.call(stdObj, "sport", "cricket");     // Std Name : Swap..age :21 hobby: sport game :cricket
// ----------------------------------------------------------------------------------------------------

//// apply(ObjName, [argument, argument]);  // syntax
//// in apply we have to pass arguments in array

about.apply(stdObj1, ["sport", "football"]);     // Std Name : Swap..age :21 hobby: sport game :cricket
// ----------------------------------------------------------------------------------------------------

//// bind() :: returns function() and store result in that function

const func = about.bind(stdObj2, "sport", "hockey");

//// in func function is stored which is returned by bind()

console.log(func);
// ƒ about(hobby, game) {
//     console.log(`Std Name : ${this.name}..age :${this.age} hobby: ${hobby} game :${game}`);
// }

func();
// ----------------------------------------------------------------------------------------------------

//// Scenario 1 : 

const user1 = {
    name: "User 1",
    age: 21,
    about: function () {
        console.log(this, "here this represent user1 obj");
        console.log(`name is ${this.name} ..age is ${this.age}`);
    }
}

// it is call
user1.about();   // name is User 1 ..age is 21

//// if we store this function in any variable,
//// in this case this represent window obj,
//// coz, this will be execute at the runtime

var storeAbout = user1.about;
storeAbout();               // name is undefined ..age is undefined

//// Note : Note to execute this storeAbout() properly,
//// we have to binding with storeAbout() method  

const storeAboutBinding = user1.about.bind(user1);
storeAboutBinding();       // name is undefined ..age is undefined
// ------------------------------------------------------------------------------


