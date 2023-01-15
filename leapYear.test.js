const isLeap = require('./leapYear')

describe('tests for isLeap() that checks if a given year is leap/not', () => {

    test('should return true if given year is 2000', () => {
        expect(isLeap(2000)).toBe(true);
    });

    test('should return false if given year is 1777', () => {
        expect(isLeap(1777)).toBe(false);
    });

    test('should return false if given year is 1600', () => {
        expect(isLeap(1600)).toBe(true);
    });
})