// Write a JavaScript function ( both regular and arrow function) which takes a string as parameter to 
// test whether a string end with "Script"(case-sensitive). The string length must be greater or equal to 6.

// arrow
const isEndingScript = (str) => {
    if (str.length <= 6) {
        return false;
    }
    else {
        return str.toString().endsWith('Script');
        // return str.toString().trim().endsWith('Script');
    }
};

/*
// regular
function isEndingScript (str) {
    if (str.length <= 6) {
        return false;
    }
    else {
        return str.toString().endsWith('Script');
        // return str.toString().trim().endsWith('Script');
    }
}
*/
//console.log(isEndingScript('there is no Script'));
//console.log(isEndingScript('there is no Script '));

module.exports = isEndingScript;