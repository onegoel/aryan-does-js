// Write a JavaScript function ( both regular and arrow function) which takes a string as 
// parameter to count the number of vowels in a given string.

const intro = "Aryan, Code Academy, McKinsey"

isVowel = (letter) => {
    let flag = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    vowels.forEach( (item) => {
        // console.log(letter, item)
        if (item === letter) {
            flag = 1;
        }
    })
    return (flag === 1);
}

/*
isVowel = (letter) => {
    let condition = (
        letter === 'a' || letter === 'A' ||
        letter === 'e' || letter === 'E' ||
        letter === 'i' || letter === 'I' ||
        letter === 'o' || letter === 'O' ||
        letter === 'u' || letter === 'U'
    )
    return condition;
}
*/

// arrow
numVowels = (str) => {
    let i = 0
    let count = 0;
    while (i < str.length) { // !!!
        if (isVowel(str[i])) {
            count += 1;
        }
        i += 1;
    }
    return count;
}


/* 
// regular

function numVowels (str) {
    console.log(isVowel(str[0]));
    let i = 0
    let count = 0;
    while (i < str.length) { // !!!
        if (isVowel(str[i])) {
            count += 1;
        }
        i += 1;
    }
    return count;
}
*/

// console.log(isVowel('a'));
console.log(numVowels(intro));