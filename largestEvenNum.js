// Write a JavaScript function (both regular and arrow) which takes an array of integers as paramater, 
// to get the largest even number. 
// Return -1 if no even numbers are found.

// filter will give array of even vals


// regular function

// const arr = [101, 89, 567, 890, 98, -34, 65];

/*
// regular function 
function maxEven() {
    arr.forEach(function (item, index) {
        if (item > curr && item % 2 == 0)
            curr = item;
    })
    return curr;
}
*/

// arrow function
const getMaxEvenNum = (arr) => {
    let curr =  Number.MIN_SAFE_INTEGER;
    arr.forEach((item) => {
        if (item > curr && item % 2 == 0) 
            curr = item;
        // curr = (item > curr && item % 2 == 0) ? item : curr; // use ternary only in if-else not if
    });
    if(curr === Number.MIN_SAFE_INTEGER)
        return -1;
    else
        return curr;
};

// console.log(getMaxEven());


module.exports = getMaxEvenNum;