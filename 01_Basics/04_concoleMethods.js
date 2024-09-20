console.log("Hello world");

console.error("This is error message !")

console.info("This is info message !")

console.info("This is warn message !")

console.table(
    [
        { name: "Swap", age: 23 },
        { name: "Neel", age: 25 }
    ]
)
// ----------------------------------------------------------------------------
// ::: console.group() and console.groupEnd()  :::

console.group("Student Information");
console.log("Name: Alice");
console.log("Age: 25");
console.groupEnd();

// ---------------------------------------------------------------------------

// ::: console.time() and console.timeEnd() :::

console.time("Loop Time");
for (let i = 0; i < 1000000; i++) { }  // Simulating a process
console.timeEnd("Loop Time");  // Output: Loop Time: Xms

// ::: console.assert() :::
// Output=> Writes an error message to the console if the assertion is false. If the condition is true, nothing happens.

let age = 20;
console.assert(age >= 21, "Age is less than 21!");  // Output: Age is less than 21! (only if age < 21)
console.assert(age <= 21, "Age is less than 21!");  // empty

// ----------------------------------------------------------------------
// ::: console.trace() :::
// ::: Outputs a stack trace to the console, showing the function call path.


function a() {
    b();
  }
  
  function b() {
    c();
  }
  
  function c() {
    console.trace("Stack trace");
  }
  
  a();  // Output: Stack trace with the function call hierarchy
//   -------------------------------------------------------------------