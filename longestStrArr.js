// Write a JavaScript function (both regular and arrow) which takes an array of string as parameter 
// to find the longest string from a given array (read about string methods)

// we can do it using REDUCE

const countries = ['argentina', 'belgium', 'cameroon', 'dr of congo', 'england'];

/*
const lexicoCheck = (str1, str2) => {

};
*/

// arrow
const longestStr = (arrOfStr) => {
    let curr = '';
    arrOfStr.forEach((item) => {
        /*
        if (item.length >= curr.length) {
            curr = item;
        }
        */
        
        let condition = (item.length >= curr.length);
        curr = condition ? item : curr;
        
        /*
        conditionLonger = (item.length > curr.length);
        curr = conditionLonger ? item : curr;
        
        conditionEqual = (item.length === curr.length)
        */
            
    });
    return curr;
};
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
console.log(longestStr(countries));


module.exports = longestStr; // export classes like this by convention
// module.exports = {longestStr}; // exporting as an object, export funcs like this by convention
