// Write a JavaScript function ( both regular and arrow function) which takes year as parameter 
// to determine and print whether a given year is a leap year or not. Try using ternary operator

// arrow
isLeap = (year) => {
    const condition = (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
    condition ? console.log(`${year} is a leap year`) : console.log(`${year} is not a leap year`);
}

// regular
/*
function isLeap (year) {
    const condition = (year % 4 === 0) && (year % 100 !== 100) && (year % 400 === 0);
    condition ? console.log(`${year} is a leap year`) : console.log(`${year} is not a leap year`);
}
*/

isLeap(2001);
isLeap(1972);