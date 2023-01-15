const rollStr = require('./nextLetter')

describe('tests for rollStr() that replaces every char in a given str with the char following it in the alphabet.', () => {

    test("should return 'lfoesjdl dpmf esblf' if given str is 'kendrick cole drake'", () => {
        expect(rollStr('kendrick cole drake')).toBe('lfoesjdl dpmf esblf');
    });

    test("should return 'abab' if given str is 'zaza'", () => {
        expect(rollStr('zaza')).toBe('abab');
    });
    
    test("should return 'ZazA' if given arr is 'YzyZ'", () => {
        expect(rollStr('YzyZ')).toBe('ZazA');
    });

    test("should return '!%^&()' if given arr is '!%^&()'", () => {
        expect(rollStr('!%^&()')).toBe('!%^&()');
    });
})
    