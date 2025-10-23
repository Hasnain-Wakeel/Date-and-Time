// ----------------------------  How to Generate Date and Time :  ----------------------------

// ----------------------------  Date() :  ----------------------------

// let date = Date();
// console.log(date);

// 1.Date() (without new keyword) :

// When you call 'Date()' like a normal function,
// it returns a 'string', not a Date 'object'.

// ----------------------------  new Date() :  ----------------------------

// let date = new Date();
// console.log(date);

// 2. new Date() (with new keyword) :

// When you use the 'new' keyword,
// you’re calling the 'Date constructor' to create a 'Date object'.

// ----------------  Difference between 'Date()' and 'new Date()' :  ----------------

// Date() just tells you the time as text,
// while new Date() gives you the time as a tool you can work with.

// ----------------------

// | Expression        | Type          | Returns                   | Can use Date methods? |
// | ------------      | --------      | --------------------      | --------------------- |
// | Date()            | string        | current date as text      | No                    |
// | new Date()        | object        | Date object               | Yes                   |

// -----------------------

// Checking Types of Date() and new Date() :

// console.log(typeof Date());         // "string"
// console.log(typeof new Date());     // "object"

// --------------------------------------------------------------------------------------------

//  Question : What is AM and PM in Time ??
//  Answer :  AM and PM are just two terms used to describe the time of day.

//  AM --> Ante Meridiem
//  PM --> Post Meridiem

//  Ante Meridiem = Before Noon
//  Post Meridiem = After Noon

//  AM means "Ante meridiem", which means before Mid-day.
//  PM means "Post meridiem", which means after Mid-day.

//  -------------------------------------------------------------------------------------------------------------

// --------------- If we want to only show the Day of the Week : ----------------

// 1. Through Date() ---------------

// let date = Date();
// let day = date.slice(0,3)       // Thu
// console.log(day);

// 2. Through new Date() : -----------

// let date = new Date();
// let day = date.slice(0, 3);
// console.log(day);

// -----------  // This will throw an error that : "date.slice" is not a function.
// -----------  // This means that the method of slice is just for the Strings, it's not for Objects (and here date is an object).


// ------- "Fixing This Error" : --------

// To fix this, we convert our object to String :

// let date = new Date();
// let dateInString = date.toString()           // We converted our object to string.
// let day = dateInString.slice(0, 3);          // Now using '.slice' method (method of string).
// console.log(day)                             // Here is a problem that it gives Number of the Day (0-6) instead of Day Name (Sun - Sat).


// ---------- Extracting "Day", "Month" and "Date" from this Date Object : -----------

// let date = new Date();
// let dateInString = date.toString()           // We converted our object to string.
// let part = dateInString.slice(0, 10);
// console.log(part);

// --------------------------------------------------------------

// ---------- We can also extracts different parts (pieces) of/from the Date (object) through pre-defined Methods : ----------

// let date = new Date();

// let dateNumber = date.getDate();
// console.log(`Date : ${dateNumber}`);

// let month = date.getMonth() + 1;
// console.log(`Month : ${month}`);

// let year = date.getFullYear();
// console.log(`Year : ${year}`);   


// ----------------- Years from 1900 to now : ------------------

// let date = new Date();
// let year = date.getYear();
// console.log(`Year : ${year}`);       // 125 (because 2025 - 1900 = 125)
// // In other words, getYear() thinks the year 1900 is “year zero.”


// ------------------------- Showing Current Time in 24 hours Format : -------------------

// let date = new Date();
// console.log(`The Time is : ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);


// ----------- More Pre-defined Methods : ----------


// // console.log(date.getMilliseconds());
// // console.log(date.getTime());
// // console.log(date.getUTCFullYear());
// // console.log(date.getUTCMonth());
// // console.log(date.getUTCDate());
// // console.log(date.getUTCDay());
// // console.log(date.getUTCHours());
// // console.log(date.getUTCMinutes());
// // console.log(date.getUTCSeconds());
// // console.log(date.getUTCMilliseconds());


// --------------------------------------------------------------


// ------------ Now we access the "Day" {0-6} of the Week through pre-defined Method : ------------

// let date = new Date();
// let day = date.getDay();
// console.log(`Day : ${day}`);        

// Here, this method is returning a number (index), because the Days are pre-defined for this method :
// like : 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday.

// --------------------------

// So, to show the Day Name, we use the following code :

// const Days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

// let dayIndex = new Date().getDay() - 1;

// if (dayIndex === -1) {      // For Sunday : if the value of the day is 0 (Sunday), it subtracts 1 from 0 [0 - 1] = [-1], which returns "Undefined". So we added this condition. 
//   dayIndex = 6;             // wrap around to Sunday
// }

// let todayDay = Days[dayIndex];
// console.log(todayDay);


// -----------------------  Most Reliable, Efficient and Accurate Method(s) : -------------------------------


// const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let rightNow = Days[new Date().getDay()];
// // let dayIndex = rightNow.getDay();            
// // let dayName = Days[rightNow]; 
// console.log(rightNow);    


// ------------------------


// const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// // let rightNow = new Date();
// let todayDay = Days[(new Date().getDay() + 6) % 7];
// console.log(todayDay);

// ------------------------


// const Days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// let todayDay = Days[(new Date().getDay() + 6) % 7];
// console.log(todayDay);

// ------------------------


// const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let dayName = Days[(new Date().getDay() + 6) % 7];
// // let rightNow = new Date();
// // let dayIndex = (rightNow.getDay() + 6) % 7;          // shifts [Sunday (0) to 6, Monday (1) to 0 ...]
// //let dayName = Days[dayIndex];
// console.log(dayName);


// ----------------------------------------- Showing 12-hour time format : -----------------------------------------


let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
// let milliseconds = date.getMilliseconds();

let ampm;

// IF-ELSE for AM or PM :
if (hours >= 12) {
  ampm = "PM";
} else {
  ampm = "AM";
}

// Converts 24-hour to 12-hour format :
hours = hours % 12;
if (hours === 0) {
  hours = 12; // midnight or noon case
}

// Add leading zeros for neat display
minutes = minutes.toString().padStart(2, "0");
seconds = seconds.toString().padStart(2, "0");
// milliseconds = milliseconds.toString().padStart(3, "0");

// Print formatted time
console.log(`Current Time of Pakistan is : ${hours}:${minutes}:${seconds} ${ampm}`);
