// Write a JavaScript function (both regular and arrow) which takes an array of integers as paramater, 
// to get the largest even number. 
// Return -1 if no even numbers are found.

// regular function

const arr = [101, 89, 567, 890, 98, -34, 65];

let curr = -1;
function maxEven() {
    arr.forEach(function (item, index) {
        if (item > curr && item % 2 == 0)
            curr = item;
    })
    return curr
}

console.log(maxEven());