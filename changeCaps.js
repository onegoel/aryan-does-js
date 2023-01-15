let someStr = "tHe lIonS aNd soMe leOPaRds aNd a LOt of bIrDs";

// arrow
/*
changeCaps = (myStr) => {
    console.log(myStr);
    let strArr = myStr.split('');
    strArr.forEach(function (item, index) {
        let curr = myStr.charCodeAt(index);
        if (curr >= 65 && curr <= 90) {
            item = item.toLowerCase();
        }
        else if (curr >= 97 && curr <= 122) {
            item = item.toUpperCase();
        }
        else {

        }
        strArr[index] = item.charAt(0);          
    })
    myStr = strArr.join('');
    return myStr;
}
*/
// regular

changeCaps = function (myStr) {
    console.log(myStr);
    let strArr = myStr.split('');
    strArr.forEach(function (item, index) {
        let curr = myStr.charCodeAt(index);
        if (curr >= 65 && curr <= 90) {
            item = item.toLowerCase();
        }
        else if (curr >= 97 && curr <= 122) {
            item = item.toUpperCase();
        }
        else {

        }
        strArr[index] = item.charAt(0);          
    })
    myStr = strArr.join('');
    return myStr;
}

console.log(changeCaps(someStr));