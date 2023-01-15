// Write a JavaScript function (both regular and arrow) which takes an array of string as parameter 
// to find the longest string from a given array (read about string methods)

const countries = ['argentina', 'belgium', 'cameroon', 'dr of congo', 'england'];

// arrow
longestStr = (arrOfStr) => {
    let curr = '';
    arrOfStr.forEach((item, index) => {
        if (item.length >= curr.length) {
            curr = item;
        }
    })
    return curr;
}
// regular
/*
function longestStr (arrOfStr) {
    let curr = '';
    arrOfStr.forEach((item, index) => {
        if (item.length >= curr.length) {
            curr = item;
        }
    })
    return curr;
}
*/
console.log(longestStr(countries))