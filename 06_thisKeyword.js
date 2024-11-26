
// this :::  Represent current instance of the object.
 
// Note -->
// this does not always represent an object’s current instance.
// Its behavior depends on how and where the function is invoked.

//// method : nothing but a function inside the object.
//// this : Represent current instance of object.

console.log(this, "print this");              // Window object is print
console.log(window, "print window");          // Window object is print

console.log(this === window);                 // true

// ------------------------------------------------------------------------------------

const employObj = {
    empId: 1,
    empName: "Swapnil",
    empAbout: function () {
        console.log("this : is the current obj :", this);
        ////  { empId: 1, empName: 'Swapnil', empAbout: [Function: empAbout] }

        console.log(`Employ name : ${this.empName} and id : ${this.empId}`);
    }
}
// employObj.empAbout();
// ------------------------------------------------------------------------------------

const studentObj1 = {
    enrolNo: 1,
    name: "Swapnil",
    about: studentInfo
}

const studentObj2 = {
    enrolNo: 2,
    name: "Neel",
    about: studentInfo
}
const studentObj3 = {
    enrolNo: 3,
    name: "Siddd",
    about: studentInfo
}

const studentObj4 = {
    enrolNo: 4,
    name: "Arnav",
    about: studentInfo
}

function studentInfo() {
    console.log(`Student Enrollment No : ${this.enrolNo} and Name : ${this.name}`);
}

// studentInfo();          // undefined undefined
studentObj1.about();    // 1    swapnil
studentObj2.about();    // 2    Neel
studentObj3.about();    // 3    Siddd
studentObj4.about();    // 4    Arnav
// ------------------------------------------------------------------------------------

// without use strict ::
function myFunction() {
    console.log('this function is auto add in window obj');
    console.log(this, "prints window obj");
}

myFunction();
//// Or we can call function in another way window.function();
// window.myFunction();

// with use strict ::

function myFunction2() {
    "use strict";
    console.log(this, "if use Strict it prints undefined");
}
myFunction2();
// ------------------------------------------------------------------------------------
