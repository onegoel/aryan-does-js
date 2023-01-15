// Write a JavaScript function ( both regular and arrow function) which takes an array of 2 strings 
// as parameter to concatenate two strings except their first character.

const cities = ['damascus', 'beirut'];

// arrow
/*
myFunc = (arr) => {
    return arr[0].slice(1).concat('', arr[1].slice(1));
}
*/
// regular
myFunc = function (arr) {
    return arr[0].slice(1).concat('', arr[1].slice(1));
}

console.log(myFunc(cities));