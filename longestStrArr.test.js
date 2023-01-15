const lsaFunc = require('./longestStrArr')

describe('tests for longestStr() that finds longest str in an arr', () => {

    test("should return `dr of congo` if given arr is ['argentina', 'belgium', 'cameroon', 'dr of congo', 'england']", () => {
        expect(lsaFunc(['argentina', 'belgium', 'cameroon', 'dr of congo', 'england'])).toBe('dr of congo');
    });

    test("should return `united` if given arr is ['united']", () => {
        expect(lsaFunc(['united'])).toBe('united');
    });
    
    test("should return `one` if given arr is ['one', 'two']", () => {
        expect(lsaFunc(['one', 'two'])).toBe('two');
    });

    test("should return `` if given arr is []", () => {
        expect(lsaFunc([])).toBe('');
    });
})
    