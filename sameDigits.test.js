const isMonoDigit = require('./sameDigits');

describe('tests for isMonoDigit() that checks if a given num is composed of repeated digits only (monodigit or not)', () => {

    test('should return true if given num is 3333', () => {
        expect(isMonoDigit(3333)).toBe(true);
    });

    test('should return false if given num is 3', () => {
        expect(isMonoDigit(3)).toBe(false);
    });

    test('should return false if given num is 232', () => {
        expect(isMonoDigit(true)).toBe(false);
    });

    test('should return true if given num is -3333', () => {
        expect(isMonoDigit(-3333)).toBe(true);
    });
});