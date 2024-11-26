
//// this keyword is not work in Arrow function.
//// In Arrow function me, this apne suurounding ka lega, ek level up...

//// Arrow functions do not have their own this.
//// Instead, they inherit this from the surrounding lexical scope (the context in which they were defined)

const frontend = {
    name: "Swap",
    age: 22,
    about: function () {
        console.log(this, 'this in frontend');
        console.log(`In Arrow, name :${this.name} age: ${this.age}`);
    }
}

const backend = {
    name: "Swap",
    age: 22,
    about: () => {
        console.log(this, 'this in backend');
        console.log(`In Arrow, name :${this.name} age: ${this.age}`);
    }
}

frontend.about();   // {name: 'Swap', age: 22, about: ƒ}
backend.about();    // window object  <-- coz of window obj

const AWS = {
    lang: "html",
    database: {
        db: "sql",
        about: () => {
            console.log(this, 'this inside database');
        }
    }
}

AWS.database.about();

//// Lexical Scope of this: In above example, the arrow function about is defined inside the AWS.database object.
//// However, this refers to the surrounding scope of where the AWS object is declared, which is the global context.

//// ----------------------------------------------------------------------------------------------------------------
// Summary Table for Use Cases:::

// Method	            Use Case	                                     Key Feature
// call 	Borrowing methods, invoking with this.	            Arguments passed individually.
// apply	Invoking functions with arrays, like Math.      	Arguments passed as an array.
// bind	    Fixing this for later use, partial functions.   	Returns a new function, not called immediately.


//// ----------------------------------------------------------------------------------------------------------------


