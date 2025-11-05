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


// // ---------------------------------------------------------------------------------------------------------------

// console.log((new Date().getTime() / 1000) / 60 / 60 / 24 / 365);          // Years from 1970 to now

// // ---------------------------------------------------------------------------------------------------------------

// console.log((new Date().getTime() / 1000) / 60 / 60 / 24);       // days from 1970 to now

// // ---------------------------------------------------------------------------------------------------------------
 
// console.log((new Date().getTime() / 1000) / 60 / 60);            // hours from 1970 to now

// // ---------------------------------------------------------------------------------------------------------------

// console.log((new Date().getTime() / 1000) / 60);                 // minutes from 1970 to now

// // ---------------------------------------------------------------------------------------------------------------

// console.log((new Date().getTime() / 1000));                      // seconds from 1970 to now

// // ---------------------------------------------------------------------------------------------------------------

// console.log((new Date().getTime()));                            // milliseconds from 1970 to now

// // ---------------------------------------------------------------------------------------------------------------


// ------------ Now we access the "Day (indexes of the Days)" {0-6} of the Week through pre-defined Method : ------------

// let today = new Date();
// let day = today.getDay();
// console.log(`Day : ${day}`);        

// Here, this method is returning a number (index), because the Days are pre-defined for this method :
// like : 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday.

// --------------------------

// -----------------------  Most Reliable, Efficient and Accurate Method(s) : -------------------------------

// --------- This is best the approach because we are using the Pre-defined Javascript Arrangements of the days of the Week. ---------

// 1(a): LongHand Method :

// const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let rightNow = Days[new Date().getDay()];
// console.log(rightNow);    
// // let dayIndex = rightNow.getDay();            
// // let dayName = Days[rightNow]; 
// // console.log(rightNow);    

// 1(b): ShortHand Method :

// let Days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(Days[new Date().getDay()])

// ----------------------------------

// ----- Here, we are not using the pre-defined Javascript arrangements of the days, although we Declared our own Array. ------

// 2(a): LongHand Method :

// const Days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

// let dayIndex = new Date().getDay() - 1;

// if (dayIndex === -1) {      // For Sunday : if the value of the day is 0 (Sunday), it subtracts 1 from 0 [0 - 1] = [-1], which returns "Undefined". So we added this condition. 
//   dayIndex = 6;             // wrap around to Sunday
// }

// let todayDay = Days[dayIndex];
// console.log(todayDay);

// -----------------------------------

// 2(a): ShortHand Method (Alternate Method) :

// const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// // let rightNow = new Date();
// let todayDay = Days[(new Date().getDay() + 6) % 7];
// console.log(todayDay);

// ------------------------

// 2(a): Most Efficient Method :

// const Days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// let todayDay = Days[(new Date().getDay() + 6) % 7];
// console.log(todayDay);

// ----------------------------------------------------

// ----- Also, we are not using the pre-defined Javascript arrangements of the days here, instead we Declared our own Array. ------
// "OR"
// -------------- If we want to show the Day Name But according to our Declared Array : -------------

// 1. (Not Very) LongHand Method (Alternate ShortHand Method) :

// const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// let rightNow = new Date();
// let dayIndex = (rightNow.getDay() + 6) % 7;       // This Shifts (Monday [1] to [0], ... Sunday [0] to [6])
// let dayName = Days[dayIndex];
// console.log(dayName);

// ----------------------------------

// 2. Longhand Method(s) :

// const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// if (new Date().getDay() === 0) {
//   console.log(Days[6]);     // Sunday
// } else {
//   console.log(Days[new Date().getDay() - 1]);
// }

// -----------------

// 2. ShortHand Method :

// const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// let dayName = Days[(new Date().getDay() + 6) % 7];
// console.log(dayName);


// ------------------------- Showing Current Time in 24 hours Format : -------------------

// let date = new Date();
// console.log(`The Time is : ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);


// ------------------------- Showing Current Time in 12-hour time format : ----------------


// let date = new Date();

// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// // let milliseconds = date.getMilliseconds();

// let meridiem;

// // IF-ELSE for AM or PM :
// if (hours >= 12) {
//   meridiem = "PM";
// } else {
//   meridiem = "AM";
// }

// // Converting 24-hour to 12-hour format :
// hours = hours % 12;
// if (hours === 0) {
//   hours = 12;          // midnight or noon case
// }

// // Adding leading zeros for neat display :
// minutes = minutes.toString().padStart(2, "0");
// seconds = seconds.toString().padStart(2, "0");
// // milliseconds = milliseconds.toString().padStart(3, "0");

// // Printing formatted time :
// console.log(`Current Time of Pakistan is : ${hours}:${minutes}:${seconds} ${meridiem}`);


// ----------------------------------------- Showing 12-hour time format : -----------------------------------------


// let date = new Date()

// let hours = date.getHours()
// let minutes = date.getMinutes()
// let seconds = date.getSeconds()

// let meridiem;

// if(hours >= 12){
//   meridiem = "PM"
// }
// else{
//   meridiem = "AM"
// }

// hours = hours % 12;

// if(hours === 0){
//   hours = 12;
// }

// // // .padStart() Method : 

// // // .padStart() Method adds leading zeros to the beginning of the string.

// // // {.padStart(targetLength, stringToPad)} => {.padStart(2, "0")} 

// hours = hours.toString().padStart(2, "0");         
// minutes = minutes.toString().padStart(2,"0");
// seconds = seconds.toString().padStart(2, "0");

// console.log(`Current Time of Pakistan is : ${hours}:${minutes}:${seconds} ${meridiem}`);


// -----------------  Get Months of the Year : -------------------

// let today = new Date()
// let month = today.getMonth()
// console.log(month)               // printing indexes same as '.getDay()' :


// ---------------------------------- "Printing Current Month Name" : ----------------------------------

// let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let today = new Date();
// let monthIndex = today.getMonth();
// console.log(Months[monthIndex]);

// ----------------- Showing Month Number Also : ----------------

// let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let today = new Date();
// let monthIndex = today.getMonth();
// console.log(`The number of Current Month is: '${monthIndex + 1}' and its type is: '${typeof (monthIndex + 1)}'`);     
// // +1 because monthIndex starts from 0 (index of the months) and we need the name of the month (monthIndex + 1);
// // console.log(typeof monthIndex);
// console.log(`The name of Current Month is: '${Months[monthIndex]}' and its type is: '${typeof Months[monthIndex]}'`);    // Months[monthIndex]);
// // console.log(typeof Months[monthIndex]);


// ------------------------------- Mapping Months with 1 (except December): ---------------------------

// const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let today = new Date();
// let monthIndex = today.getMonth();          // 1-based index

// if (monthIndex >= 11) {
//   // Agar December se aage chala jaaye toh :
//   monthIndex = 11;          // December he dikha do 
// }

// console.log(`${monthIndex + 1} --> ${Months[monthIndex]}`);


// --------------------- Mapping December Also (Maps December to January) : ----------------------


// const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let today = new Date();
// let monthIndex = today.getMonth() + 1;

// if (monthIndex === 12) {
//   monthIndex = 0;
// }
// else{
//   monthIndex = today.getMonth()
// }
// console.log(`Index of ${Months[monthIndex]} is ${monthIndex}`);
// console.log(`    ${monthIndex} --> ${Months[monthIndex]}`);

// -------------------------------------------------------------------------------------------------------------

// -------------------------------  Showing Time of Different Time Zones : --------------------------------------


// function showWorldTime() {

// let now = new Date();

// // // -----------  By Default, it shows 12-hour format : -----------
// let options = {hour: "2-digit", minute: "2-digit", second: "2-digit",};

// // // -----------  If you want 24-hour format : -----------
// // // let options = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };

// //   1. Default:        (en-US)	        10:45:23 AM       // 12-hour format (by default)
// //   2. 12-hour:         true	        10:45:23 PM       // 12-hour format
// //   3. 12-hour:         false	          22:45:23        // 24-hour format

// let pakistanTime = now.toLocaleTimeString("en-US", {...options, timeZone: "Asia/Karachi",});
// let usaTime = now.toLocaleTimeString("en-US", {...options, timeZone: "America/New_York",});
// let japanTime = now.toLocaleTimeString("en-US", {...options, timeZone: "Asia/Tokyo",});
// let londonTime = now.toLocaleTimeString("en-US", {...options, timeZone: "Europe/London",});

// // ------------ Hindi locale : ------------

// // pakistan = (now.toLocaleTimeString("en-IN", { ...options, timeZone: "Asia/Karachi" }));

// console.clear();                        // clears the console for updated display
// console.log("----------- World Clock -----------");
// // console.log("----------------------------");
// console.log("Pakistan Standard Time: ", pakistanTime);
// console.log("American Standard Time: ", usaTime);
// console.log("Tokyo Standard Time: ", japanTime);
// console.log("London Standard Time: ", londonTime);
// }

// // Shows Time Once :
// // showWorldTime();

// // ----------- show/Updates Time Every Second : ------------
// setInterval(showWorldTime, 1000);

// ---------- Show/Updates Time Every Minute : ----------
// setInterval(showWorldTime, 60000);

// -----------------------------------------------------------------------


// ---------- Why we are not calling the 'showWorldTime()' function inside the 'setInterval()' function ?? ------------

// Question : Why we are not using parenthesis for the 'showWorldTime' function inside the 'setInterval()' function ??
// Answer : Because we are not calling the function inside the 'setInterval()' function. 
// The 'setInterval()' function is already calling the function automatically after the specified interval of time.

// Question : 'setInterval()' kya chahta hai ??
// Answer : 'setInterval()' ek function ka naam (reference) chahta hai, taake wo khud us function ko baar-baar call kare.

// ---------------- "Syntax" of Using 'setInterval()' Function : ----------------

// setInterval(functionToCall, timeInMilliseconds);

// First argument --> wants the function name to be called (without ()).
// Second argument --> wants the time in milliseconds to be called (ms).

// This means that the 'setInterval()' function is already calling the 'showWorldTime()' function after every 1000 milliseconds (1 second).:

// --------------- "Example" of Using 'setInterval()' Function : ---------------

// function sayHello() {
//   console.log("Hello Boss!");
// }
// // Invoking Directly (called directly) :
// sayHello();                         // output: "Hello Boss!"

// // Invoking as a Reference ('setInterval' Function will call it automatically after every 2 seconds) : 
// setInterval(sayHello, 2000);        // output: "Hello Boss!" [every 2 seconds]

// -------------------------------------------------------------------------------------------------------


// --------------  Printing Custom or Specified Date : ---------------

// Formats For Giving A Custom Date : 

// let customDate = new Date("21 Apr 2025");
// let customDate = new Date("21 April 2025");
// let customDate = new Date("21 april 2025");
// let customDate = new Date("4 21 2025");
// let customDate = new Date("04 21 2025");
// let customDate = new Date("January 21 2025");
// let customDate = new Date("Jan 21 2025");
// let customDate = new Date("Jan 21 2025");
// let customDate = new Date("21 jan 2025");

// console.log(customDate);

