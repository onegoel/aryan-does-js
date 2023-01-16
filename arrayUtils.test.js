const arrayUtilObj = require('./arrayUtils');
// destructured it

describe('Array Utilities', () => {
    describe('doubleNumbers()', () => {
        it('should throw an error if method is called without a param', () => {
            expect(() => arrayUtilObj.doubleNumbers()).toThrow('Err! You must provide an input parameter');
        });

        it('should double the numbers in a given arr', () => {
            const res = arrayUtilObj.doubleNumbers([1, 2, 3, 10, 21, 32]);
            expect(res).toEqual([2, 4, 6, 20, 42, 64]);         // toEqual for array
        });

        it('should throw an error if input is not an array', () => {
            // const res = arrayUtilObj.doubleNumbers('abc'); // jest will catch err here and not proceed
            expect(() => arrayUtilObj.doubleNumbers('abc')).toThrow('Err! Input is not an array');
        });

        it('should throw an error if input is an array but does not contain only numbers', () => {
            expect(() => arrayUtilObj.doubleNumbers([2, 7.8, 'abc', true])).toThrow('Err! Input is not an array of only numbers');
        });
    });

    describe('tripleNumbers()', () => {
        it('should throw an error if method is called without a param', () => {
            expect(() => arrayUtilObj.tripleNumbers()).toThrow('Err! You must provide an input parameter');
        });

        it('should triple the numbers in a given arr', () => {
            const res = arrayUtilObj.tripleNumbers([1, 2, 3, 10, 21, 32]);
            expect(res).toEqual([3, 6, 9, 30, 63, 96]);         // toEqual for array
        });

        it('should throw an error if input is not an array', () => {
            expect(() => arrayUtilObj.tripleNumbers('abc')).toThrow('Err! Input is not an array');
        });

        it('should throw an error if input is an array but does not contain only numbers', () => {
            expect(() => arrayUtilObj.tripleNumbers([2, 7.8, 'abc', true])).toThrow('Err! Input is not an array of only numbers');
        });
    });

    describe('tripleNumsFilterEvenNums()', () => {
        it('should throw an error if method is called without a param', () => {
            expect(() => arrayUtilObj.tripleNumsFilterEvenNums()).toThrow('Err! You must provide an input parameter');
        });

        it('should triple the numbers in a given arr and filter out odd numbers', () => {
            const res = arrayUtilObj.tripleNumsFilterEvenNums([0, 1, 2, 3, 10, 21, 32]);
            expect(res).toEqual([0, 6, 30, 96]);  // toEqual for array
        });

        it('should empty the given arr if it contains only odd numbers', () => {
            const res = arrayUtilObj.tripleNumsFilterEvenNums([1, 3, 21]);
            expect(res).toEqual([]);  // toEqual for array
        });

        it('should throw an error if input is not an array', () => {
            expect(() => arrayUtilObj.tripleNumsFilterEvenNums('abc')).toThrow('Err! Input is not an array');
        });

        it('should throw an error if input is an array but does not contain only numbers', () => {
            expect(() => arrayUtilObj.tripleNumsFilterEvenNums([2, 7.8, 'abc', true])).toThrow('Err! Input is not an array of only numbers');
        });
    });
});
