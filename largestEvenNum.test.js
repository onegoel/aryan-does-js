const myFunc = require('./largestEvenNum')

describe('tests for maxEven() that finds largest even num in an arr', () => {

    test('should return 890 if given arr is [101, 89, 567, 890, 98, -34, 65]', () => {
        expect(maxEven([101, 89, 567, 890, 98, -34, 65])).toBe(890);
    });

    test('should return -1 if given arr is [101, 89, 567, 89, 987, -341, 65]', () => {
        expect(maxEven([101, 89, 567, 89, 987, -341, 65])).toBe(-1);
    });
    
    test('should return -130 if given arr is [101, 89, -562, 89, 987, -130, -65]', () => {
        expect(maxEven([101, 89, -562, 89, 987, -130, -65])).toBe(-130);
    });
})