const numVowels = require('./numVowels')

describe('tests for numVowels() that counts num of vowels in a str', () => {

    test("should return 4 if given str is 'aryan goel'", () => {
        expect(numVowels('aryan goel')).toBe(4);
    });

    test("should return 4 if given str is 'Aryan Goel'", () => {
        expect(numVowels('Aryan Goel')).toBe(4);
    });
    
    test("should return 0 if given arr is 'YzyZ'", () => {
        expect(numVowels('YzyZ')).toBe(0);
    });

    test("should return 1 if given arr is '!%^&(u)'", () => {
        expect(numVowels('!%^&(u)')).toBe(1);
    });
})