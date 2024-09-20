// :::::::::::::: String and String methods :::::::::::::::

// String is useful for holding data that can be represented in text format.

// ::: 1. String Primitive :::::

// ::: Behavior: String primitives are immutable, meaning once created, their value cannot be changed.

// let fname = "Swap";
// const lname = 'Kuthe';
// let location = `Nagpur`;

// console.log(typeof fname);   /// String

// console.table([fname, lname, location]);
// console.log(fname.length);
// console.log(lname.charAt(0));
// console.log(lname[0]);
// console.log(lname.charAt(3));
// console.log(location.indexOf("N"));
// console.log(location.indexOf("g"));

// :::: Immutable ::::

// let Name = "Sneel";
// Name[0] = "N";
// console.log(Name, "....Name");  // Sneel - Remains same

// Creating a new string by reassignment
// Name = "Swap";
// console.log(Name, "Name.....");  // swap - Changed



// ::: 2. String Object :::::

// ::: String object remains immutable, just like a string primitive.
// ::: The key difference is that the String object is a wrapper around a string primitive,
// ::: and the object itself can have additional properties and methods, but the actual string data it holds cannot be changed.

// let accoundHolder = new String("Swapnil");

// console.log(accoundHolder, "....Name of Holder");
// console.log(typeof accoundHolder);    /// Object

// --------------------------------------------------------------------

// :: String comparision ::::

// let a = "a";
// let b = "b";

// console.log(a < b); // true
// console.log(a > b); // false


// let char1 = "a";
// let char2 = "B";
// let char3 = "b";

// console.log(char1 < char2);    // false - case sensitive
// console.log(char1 < char3);    // true - case sensitive
// console.log(char2 == char3);   // false
// console.log(char2 === char3);   // false
// console.log(char2.toUpperCase() == char3.toUpperCase());  // true

//  ::: Note : that all comparison operators, including === and ==, compare strings case-sensitive

// ::: function to compare string :::

// function areEqual(str1, str2) {
//     const isTrue = str1.toUpperCase() === str2.toUpperCase();
//     return isTrue;
// }

// console.log(areEqual("a", "A"));   // true
// console.log(areEqual("l", "L"));   // true
// console.log(areEqual("i", "I"));   // true
// --------------------------------------------------

// let str1 = "swap";            // String Primitive
// let str2 = String(1);         // String Primitive
// let str3 = String(false);     // String Primitive

// console.group("Group Start");
// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);
// console.groupEnd();

// let str4 = new String("Neel");
// console.log(typeof str4);       // Object

// ------------------------------------------------------

// let s1 = "2 + 2";
// console.log(s1);
// console.log(eval(s1));

// let sn1 = "swap + 20";
// console.log(eval(sn1));   // swap - undefined
// ------------------------------------------------

// :::: eval() method --> used to execute a string

// let sk1 = "20";
// let sk2 = "13";

// console.log(typeof eval(sk1));            // number
// console.log(eval(sk1) + sk2);             // 2013
// console.log(eval(sk1) + eval(sk2));       // 33

// ------------------------------------------------------

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

////  ::::: String Methods :::

// 1. concat() ::   to combine 2 or more string and returns a new string.

// let fname = "Swap";
// let lname = "Kuthe";
// let age = 20;
// let result = fname.concat(lname);

// console.log(result, "....result");             // swapkuthe
// console.log(fname,'...unchnage');              // Swap

// console.log(fname.concat(age));                // Swap20
// console.log(fname.concat(lname, age));         // SwapKuthe20
// console.log(fname.concat(",", lname, "!"));    // comma seprate

// :: String Concate ::

// let name = "Swap";
// let surname = "Kuthe";

// let fullName = name.concat(surname);
// console.log(fullName, "....Fullname");

// :: Array Concate ::

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];

// let conArray = [...arr1, ...arr2]     // by using spread operator
// // console.log(conArray);

// let arrCon = arr1.concat(arr2);
// // console.log(arrCon);                 // by using concat method

// --------------------------------------------------------------

// // 2. toLowerCase(): Converts the string to lowercase.

// let name = "SWAP";
// console.log(name.toLowerCase());        // swap

// let city = "Nagpur";
// console.log(city.toLocaleLowerCase());  // nagpur

// let district = "BhanDaRA";
// console.log(district.toLowerCase());    // bhandara

// -------------------------------------------------------------------


// 3. toUpperCase(): Converts the string to upercase.

// let name = "SWAP";
// console.log(name.toUpperCase());         // SWAP

// let city = "Nagpur";
// console.log(city.toUpperCase());         // NAGPUR

// let district = "BhanDaRA";
// console.log(district.toUpperCase());     // BHANDARA
// -------------------------------------------------------------------

// 4. charAt(): Returns the character at the specified index.

// let StudentName = "Rohit";
// console.log(StudentName.charAt(4));   // t
// console.log(StudentName.charAt(0));   // R
// ---------------------------------------------------------------------

// 5. includes(): Checks if the string contains the specified substring.

// let greet = "Hello world !";

// console.log(greet.includes("world"));       // true
// console.log(greet.includes("WORLD"));       // false - case sensituve
// console.log(greet.includes("World"));       // false - case sensituve
// console.log(greet.includes(" "));           // true
// -----------------------------------------------------------------------------------

// 6. indexOf(): Returns the index of the first occurrence of the specified substring.

// let employName = "Ramu Kaka";
// console.log(employName.indexOf("R"));       // 0
// console.log(employName.indexOf("K"));       // 5
// console.log(employName.indexOf("k"));       // 7

// console.log(employName.indexOf("Kaka"));       // 5 (case sensitive)
// console.log(employName.indexOf("kaka"));       // -1 ---> if not found. (case sensitive)
// -------------------------------------------------------------------------------------

// 7. lastIndexOf(): Returns the index of the last occurrence of the specified substring.

// let str = "Hello, World! Hello!";        // it takes last "Hello"
// let index = str.lastIndexOf("Hello");
// console.log(index);  // Output: 13
// -----------------------------------------------------------------------------------------------------------------

// 8. slice():  extract a portion of an array or string and returns the extracted portion as a new array or string.
//              The original array or string remains unchanged.

// :::: Syntax--
//             array.slice(start, end);
//             string.slice(start, end);

// start: The index at which to begin extraction.
// end: The index before which to end the extraction (optional).
// If omitted, extraction continues to the end of the array or string.


// ::: Array Slicing :

// let fruits = ["apple", "banana", "cherry", "dates", "fig"];
// let slicedFruits = fruits.slice(1, 4);
// console.log(slicedFruits);  // Output: ["banana", "cherry", "dates"]

// ::: String Slicing :

// let text = "JavaScript is awesome!";
// let slicedText = text.slice(0, 10);

// console.log(slicedText);                  // Output: "JavaScript"
// console.log(text.slice(5));               // cript is awesome!   (End ommit --> it takes upto last char)


// Note ::: Negative indices
// Negative indices can be used to slice from the end of the array/string.

// console.log(text.slice(-8));                // awesome!


// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(-1));                    // negative index start from -1.

// -----------------------------------------------------------------------------------------------------------------

// :: Practice que on slice method ::

// let numbers = [10, 20, 30, 40, 50, 60];
// create a new array with only the first two and the last two elements (use slice twice and concatenate the results)

// let numbers = [10, 20, 30, 40, 50, 60];

// let first2 = numbers.slice(0, 2);
// // console.log(first2);

// let last2 = numbers.slice(-2);
// // console.log(last2);

// // let conArray = [...first2, ...last2]
// // console.log(conArray, "...concater Array");         // concate --> By using spread operator.

// let arrConcate = first2.concat(last2)
// console.log(arrConcate);                              // concate ---> By using concate method.

// ------------------------------------------------------------------------------------------------------------------

// 9. substring(): Similar to slice() but doesn't accept negative indices.

// ::: RealWorld substring() Examples ::::

// :: 1. Extracting Usernames from Email Addresses

/* If you have a list of email addresses and you need to extract just the usernames(the part before the "@" symbol),
 you can use substring(). */

// let email = "swapkuthe20@gmail.com";
// console.log(email.indexOf("@"));

// let extractUserName = email.substring(0, email.indexOf("@"));
// console.log(extractUserName, '...userName is');                  //swapkuthe20

// ----------------------------------------------------

// 2. Formatting Phone Numbers

/* If phone numbers are stored as strings with extra characters (e.g., "+1 (123) 456-7890"),
you might want to extract just the numeric part. */

// let phoneNumber = "+1 (123) 456-7890";
// let digits = phoneNumber.substring(4).replace(/\D/g, '');
// console.log(digits); // "1234567890"

// ----------------------------------------------------

// 3. Parsing Dates

/* Assuming dates are stored as strings in the format "YYYY-MM-DD",
    you can extract different components like the year, month, or day. */

// let date = "18-09-2024";
// let day = date.substring(0, 2);
// let month = date.substring(3, 5)
// let year = date.substring(6, 11)
// console.log(day);                   // 18
// console.log(month);                 // 09
// console.log(year);                  // 2024
// ----------------------------------------------------

// 5. Extracting Search Keywords ::

// When you have a search query or a snippet of text, and you want to highlight or extract a part of it.

// let text = "The quick brown fox jumps over the lazy dog";

// let searchKeyword = "dog";
// let start = text.indexOf(searchKeyword);
// // console.log(start);
// let end = start + searchKeyword.length;
// console.log(end);

// let result = text.substring(start, end)
// console.log(result, '....searchKeyword');
// ----------------------------------------------------

// 6. Extracting File Extensions :::

// When dealing with file names and you need to get the file extension.

// let filename = "report_2024.pdf";
// let extension = filename.indexOf(".") + 1;
// console.log(extension);
// let resultExtension = filename.substring(extension);
// console.log(resultExtension, "....extension format");


// let song = "sairam.mp3";
// let start = song.indexOf(".") + 1;
// let songExtension = song.substring(start);
// console.log(songExtension, "...Song format");
// -------------------------------------------------------

// 7. Display Substrings of Long Text

// When displaying a preview of a long text, you might want to show only a part of it.

// let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// let short = longText.substring(0, 20) + "....more";
// console.log(short);
// -------------------------------------------------------


// :::: 10. substr(): Extracts a substring starting from a specific index and of a given length.

// -------------------------------------------------------
// :::: 11. split(): split() method in JavaScript is used to split a string into an array of substrings,
//                   based on a specified separator. The original string is not modified.

/*
:::: Syntax :::
string.split(separator, limit);

    separator: (Optional) Specifies the character, or regular expression, that is used to determine where the string is split.
                If omitted, the entire string is returned as an array with one element.
    limit: (Optional) An integer specifying the maximum number of splits.
            If provided, the resulting array will contain no more than the specified number of elements.
 */

// :::: Examples :::::

// let name = "Swapnil";
// 1. No separator passed :::

// console.log(name.split());                          // [ 'Swapnil' ]
// console.log(typeof name.split());                   // object
// console.log(Array.isArray(name.split()));           // true

// 2. Splitting without specifying a separator ::::

// console.log(name.split(""));             // ['S', 'w', 'a','p', 'n', 'i','l']

// 3. Splitting by space ::::

// let welcome = "Hello World";
// console.log(welcome.split(" "));        // [ 'Hello', 'World' ]

// let greet = "Good-morning";
// console.log(greet.split("-"));             // [ 'Good', 'morning' ]

// 4. Splitting with a comma as the separator ::::

// let str = "apple,banana,orange";
// console.log(str.split(","));                // [ 'apple', 'banana', 'orange' ]
// console.log(str.split(",", 2));                // Limit

// console.log(str);                           // apple,banana,orange

// --------------------------------------------------------------------------------------

// 5.  Extracting Query Parameters from a URL ::::

// You can use split() to get key-value pairs from a URL's query string.

// let url = "https://example.com?name=John&age=25";

// let first = url.split("?")[1];
// // console.log(first);
// // console.log(Array.isArray(first));      // false

// let second = first.split("&").map(item => item.split("="))
// console.log(second);
// // console.log(Array.isArray(second));

// -------------------------------------------------------------------------------------

// 12. trim() :::: Removes whitespace from both ends of a string.

// let greetings = "    Hello, Good     Morning        ";
// let greet = "  hey Hiii      ";

// console.log(greetings.trim());          // Hello, Good     Morning
// console.log(greet.trim());              // hey Hiii

// 13. trimStart() / trimEnd() :::: Removes whitespace from the start or end of a string.

// let name = "     Swapnil Kuthe    ";
// console.log(name.trimStart());
// console.log(name.trimEnd());
// -------------------------------------------------------------------------------------

// 14. replace() :::: Replaces a substring with a new string.

// let name = "Swapnil sarve";
// console.log(name.replace("sarve", "Kuthe"));
// console.log(name);
// -------------------------------------------------------------------------------------

// 15. replaceAll() :::: Replaces all occurrences of a substring with a new string.

// let names = " swapnil girish swapnil Akshay Kunal Lucky";
// console.log(names.replaceAll("swapnil", "swap"));
// -------------------------------------------------------------------------------------

// 16. repeat() :::: Repeats a string a specified number of times.

// let str = "Hello!";
// let result = str.repeat(3);
// console.log(result);          // Output: "Hello!Hello!Hello!"

// -------------------------------------------------------------------------------------
// 17.  The startsWith() ::::
//  used to check if a string starts with a particular sequence of characters.
// It returns true if the string starts with the specified characters, and false otherwise.

// let website = "https://www.google.com";
// let result = website.startsWith("https");
// console.log(result);                            // true


/*   Filtering Phone Numbers by Country Code
    You might want to filter phone numbers that start with a specific country code (e.g., +1 for US, +44 for the UK).
// */

// function checkPhone(no) {
//     let result = no.startsWith("+1")
//     return result;
// }

// console.log(checkPhone("+18978767"));           // true
// console.log(checkPhone("+918978767"));          // false

// -------------------------------------------------------------------------------------

// 18. endsWith() :::: used to determine whether a string ends with a specified set of characters.
//                     It returns true or false based on whether the string ends with the given target string.


// 1. Checking File Extensions
// A common use case is to verify if a filename has a particular extension, such as .jpg, .pdf, .txt, etc.

// let doc = "documents.pdf";
// let filetype = doc.endsWith(".pdf");
// console.log(filetype);                  // true


// 2. Validating Email Domains
// // You can use the endsWith() method to check if an email address belongs to a specific domain (e.g., for a business that only accepts company emails).

// let email = "swapnil@gmail.com";

// if (email.endsWith('gmail.com')) {
//     console.log("It is google mail id");
// }
// else {
//     console.log("It is not a valid email id");
// }

// -------------------------------------------------------------------------------------

































