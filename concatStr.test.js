const myFunc = require('./concatStr')

describe('tests for myFunc() that concats 2 str from an arr', () => {

    test('should return \'amascuseirut\' if given arr is [damascus, beirut]', () => {
        expect(myFunc(['damascus', 'beirut'])).toBe('amascuseirut');
    });

    test('should return \'endrickamar\' if given arr is [kendrick, lamar]', () => {
        expect(myFunc(['kendrick', 'lamar'])).toBe('endrickamar');
    });

    test('should return \'\' (empty str) if given arr is [k, l]', () => {
        expect(myFunc(['k', 'l'])).toBe('');
    });
    
})