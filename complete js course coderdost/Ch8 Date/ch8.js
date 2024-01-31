// Date and Time

// Date Object always carries both "Date" and "Time"

// Using Date method

// Date(Year, Month, Date, Hour, Minute, Seconds)

// Months starts with 0 to 11, like 0 - january to 11 - december
// let currentDate = new Date(2024, 0, 10, 11, 6, 12);
// console.log(currentDate)

// Using timestamp (integer number represents in "ms" from 1-1-1970)
// let currentDate = new Date(86400000) // 0 is time in ms (milliseconds)

// 1 day = 24 * 60 * 60 = 86400000ms
// console.log(currentDate)

// To get time in ms

// let currentDate = new Date().getTime();
// console.log(currentDate)

// getTime() method

// 1704777657186 - Total time in ms from 1-1-1970

let completeDateAndTime = new Date();

console.log(completeDateAndTime);

// Get Full Year

console.log(completeDateAndTime.getFullYear());

// Get month

console.log(completeDateAndTime.getMonth()); // retuns 0 means its january

// Week Day

console.log(completeDateAndTime.getDay()); // Tuesday means day 2 as it starts with 0

// Month day

console.log(completeDateAndTime.getDate());

// get Hours

console.log(completeDateAndTime.getHours());
console.log(completeDateAndTime.getMinutes());
console.log(completeDateAndTime.getSeconds());
