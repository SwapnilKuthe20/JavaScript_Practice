// ****** Comparison ******

// console.log('2' == 2);                    // true -- does not check datatype
// console.log('2' === 2);                   // false -- it checks datatype also

// console.log('2' == 2);                    // true
// console.log('2' > 2);                     // false
// console.log('2' < 2);                     // false
// console.log('2' >= 2);                    // true
// console.log('2' <= 2);                    // true

// console.log(null == 0);     // false      // equality check is differently works in js
// console.log(null > 0);      // false
// console.log(null < 0);      // false
// console.log(null >= 0);     // true       // in comparision null is converted into 0.
// console.log(null <= 0);     // true       // in comparision null is converted into 0.



// console.log(2 == '2');
// console.log(2 > '2');
// console.log(2 < '2');
// console.log(2 >= '2');
// console.log(2 <= '2');

// console.log(undefined == 0);        // false
// console.log(undefined > 0);         // false
// console.log(undefined < 0);         // false
// console.log(undefined >= 0);        // false
// console.log(undefined <= 0);        // false


// _______________ DATA - TYPES __________________

//:::::  Symbol :::::
// :::::   Symbol is used to defined uniqueness...

// const id = Symbol('1234')            // This is how we declared symbol data-types
// const anotherId = Symbol('1234')

// compared above both symbols are not equal :::: coz symbol definen uniqueness :::

// console.log(id == anotherId);  // false --- both are different (Unique value due to symbol data-types)

// console.log(typeof id);  // symbol


// =============================================================================

// :::::::::::::: Stack and Heap Memory :::::::::::::::::

// 1. stack :  Primitive  --> It alllocates copy

// let name = "swap";
// let myname = name;
// myname = "Neel";

// console.log(name);      // doesn't change because it stored in stack memory
// console.log(myname);    // It allocates copy of the variable



// 2. Heap : Non-primitive   ---> It allocates reference

// let languages = ["js", "reactjs", "Angular", "C++"]

// let anotherLanguages = languages;
// console.log(anotherLanguages);    // ["js", "reactjs", "Angular", "C++"]

// anotherLanguages = ["cpp", "nextjs", 'nodejs']

// console.log(anotherLanguages);   // ["cpp", "nextjs", 'nodejs']
// console.log(anotherLanguages);   // ["cpp", "nextjs", 'nodejs']

// ===============================================================================

// ::::: How to declare variable:::::

// let name = "Swapnil";
// console.log(name, "...name");

// let name = "swap", age = 28, email = "swap@gmail.com", contact = 7972021968;

// console.log(name, "....name");
// console.log(age, "....age");
// console.log(email, "....email");
// console.log(contact, "....contact");
// ------------------OR -----------------------

// console.table([name, age, contact, email]);

// -------------------------------------------------------------------


// :::::: Diff between var and let ::::::

// var num = 20;
// {
//     console.log(num, '...numBlock');    // execute - 20

// }
// console.log(num, '...numGlobal');       // execute - 20

// -----------------------------------------------

// let fname = "Neel";
// {
//     console.log(fname, '...fnameBlock');    // Neel

// }
// console.log(fname, '...fnameGlobal');      // Neel
// -------------------------------------------------


// let fname = "Sneel";
// {
//     let fname = "Kuthe";
//     console.log(fname, '....fnameBlock');   //Kuthe
// }
// console.log(fname, '....fnameGlobal');      // Sneel

// --------------------------------------------------


// var age = 20;
// console.log(age, '.....age');        // 20

// {
//     var age = 30
//     console.log(age, '.....ageBlock');     //  30
// }
// console.log(age, '.....ageBlockBelow');    // 30
// ----------------------------------------------------

// let location = " ";

// let nullish = location ?? "Maharastra";
// let andand = location && "Maharastra";
// let OROR = location || "Mouda";
// let check = location ? "BHndara" : "Warthi"

// console.log(nullish, '.....nullish');
// console.log(andand, '.....andand');
// console.log(OROR, '.....OROR');
// console.log(check, '.....check');

// --------------------------------------------------










