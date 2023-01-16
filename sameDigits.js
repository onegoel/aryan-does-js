// Write a JavaScript function (both regular and arrow) which takes a number as param to 
// check whether all the digits in a given number are the same or not, and print true or false. 
// Consider numbers to have 2 digits or more.

// monodigit - a number with repeated digits

// regular
/*
isMonoDigit = function (num) {
    let curr = num % 10;
    num = parseInt(num / 10);
    while(num > 0) {
        let rem = num % 10;
        if(rem === curr) {
            curr = rem;
            num = parseInt(num / 10);
        }
        else
            return false;
    }
    return true;
}
*/

// arrow
const isMonoDigit = (num) => {
    let numStr = num.toString();
    let lenNum = numStr.length;
    console.log(lenNum);
    let i = 0;
    if(num < 0) {
        i += 1;
    }
    if(lenNum === 1) {
        return false;
    }
    while (i < lenNum - 1) {
        if(numStr.charAt(i) !== numStr.charAt(i + 1)) {
            return false;
        }
        i += 1;
    }
    return true;
};

// console.log(isMonoDigit(999));
// console.log(isMonoDigit(3));


module.exports = isMonoDigit;