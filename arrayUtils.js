// take an arr of numbers and double each of them

/**
 * I should be able to throw an error on supported input types
 * Filter an array of numbers for all even numbers
 * Combine the above two in this way:
    - Triple every element in an array, 
    - and filter out even numbers -> Basically combine the above 2
    And try to do the above using map and filter, and then do the same using reduce.
 */
const arrayUtilities = {
    doubleNumbers : (numbers) => {
        if (numbers === undefined) {
            throw new Error('Err! You must provide an input parameter');
        }
    
        if (!(Array.isArray(numbers))) {    // accounts for if arg type is not array
            throw new Error('Err! Input is not an array');
        }
    
        numbers.forEach((item) => {         // accounts for if array contents are not numbers
            if (isNaN(item)) {
                throw new Error('Err! Input is not an array of only numbers');
            }
        });
        return numbers.map(num => num * 2);         // MAP
    },
    
    tripleNumbers : (numbers) => {
        if (numbers === undefined) {
            throw new Error('Err! You must provide an input parameter');
        }
    
        if (!(Array.isArray(numbers))) {    // accounts for if arg type is not array
            throw new Error('Err! Input is not an array');
        }
    
        numbers.forEach((item) => {         // accounts for if array contents are not numbers
            if (isNaN(item)) {
                throw new Error('Err! Input is not an array of only numbers');
            }
        });
    
        return numbers.map(num => num * 3);         // MAP
    },
    
    tripleNumsFilterEvenNums : (numbers) => {
        if (numbers === undefined) {
            throw new Error('Err! You must provide an input parameter');
        }
    
        if (!(Array.isArray(numbers))) {    // accounts for if arg type is not array
            throw new Error('Err! Input is not an array');
        }
    
        numbers.forEach((item) => {         // accounts for if array contents are not numbers
            if (isNaN(item)) {
                throw new Error('Err! Input is not an array of only numbers');
            }
        });
    
        let res = numbers.map(num => num * 3);         // map
        return res.filter((item) => item % 2 === 0);    // filter
    }
}


module.exports = arrayUtilities;