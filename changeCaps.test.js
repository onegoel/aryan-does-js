const changeCaps = require('./changeCaps')

describe('changeCaps()', () => {
    test('should return \'giRaFFe\' if given string is \'GIrAffE\'', () => {
        expect(changeCaps('GIrAffE')).toBe('giRaFFe');
    });

    test('should return \'giRaFFe\' if given string is \'gIrAffE\'', () => {
        expect(changeCaps('gIrAffE')).toBe('GiRaFFe');
    });
    
    /*
    test('should return Type Error if integer is passed instead of string', () => {
        expect(changeCaps(2000)).toThrowError('TypeError: myStr.split is not a function');
    });
    */
    
    test('should return \'arYaN goEL\' if given string is \'ARyAn GOel\'', () => {
        expect(changeCaps('arYaN goEL')).toBe('ARyAn GOel');
    });
})