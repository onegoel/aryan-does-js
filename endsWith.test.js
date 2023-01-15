const myFunc = require('./endsWith')

describe('tests for isEndingScript() that checks if a str ends in \'Script\' (case-sensitive)', () => {

    test('should return true if given str is \'JavaScript\'', () => {
        expect(isEndingScript('JavaScript')).toBe(true);
    });

    test('should return false if given str is \'JavaScript \'', () => {
        expect(isEndingScript('JavaScript ')).toBe(false);
    });

    test('should return false if given str is \'Javascript\'', () => {
        expect(isEndingScript('Javascript')).toBe(false);
    });
    
})