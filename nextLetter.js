// Write a JavaScript program to replace every character in a given string with the character 
// following it in the alphabet.


// review
// break it up into funcs - isupper/lower
//
//

const rap = 'kendrick cole drake';

// rollStr will only roll alphabets not other characters
// arrow
const rollStr = (str, places) => {   // shiftStr would be better
    let arr = str.split(''); // [...str] 
    arr.forEach( (item, index) => {     // [...str].forEach 
        let curr = item.charCodeAt(0);
        if((curr >= 65 && curr <= 90) || (curr >= 97 && curr <= 122)) {
            if (curr === 90 || curr === 122) {
                arr[index] = String.fromCharCode((curr - 25) + places);
            }
            else {
                arr[index] = String.fromCharCode(curr + places);
            }
        }
    });
    str = arr.join('');
    return str;
};

/*
// regular
rollStr = function (str) {
    let arr = str.split('');
    arr.forEach( (item, index) => {
        let curr = item.charCodeAt(0);
        if((curr >= 65 && curr < 90) || (curr >= 97 && curr < 122)) {
            if (curr === 90 || curr === 122) {
                arr[index] = String.fromCharCode(curr - 25);
            }
            else {
                arr[index] = String.fromCharCode(curr + 1);
            }
        }
    });
    str = arr.join('');
    return str;
}
*/ 

console.log(rollStr(rap, 1));


module.exports = rollStr;