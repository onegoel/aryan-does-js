const lsaFunc = require('./longestStrArr');

// test -> it
describe('tests for longestStr() that finds longest str in an arr', () => {

    test('should return `dr of congo` if given arr is [\'argentina\', \'belgium\', \'cameroon\', \'dr of congo\', \'england\']', () => {
        expect(lsaFunc(['argentina', 'belgium', 'cameroon', 'dr of congo', 'england'])).toBe('dr of congo');
    });

    test('should return `united` if given arr is [\'united\']', () => {
        expect(lsaFunc(['united'])).toBe('united');
    });
    
    test('should return `two` if given arr is [\'one\', \'two\']', () => {       // !!! one -> two
        expect(lsaFunc(['one', 'two'])).toBe('two');
    });

    test('should return `` if given arr is []', () => {
        expect(lsaFunc([])).toBe('');
    });
});


// empty array
// not an array
// same length 
// arr contains no str

// two fixes?
// gitignore late

