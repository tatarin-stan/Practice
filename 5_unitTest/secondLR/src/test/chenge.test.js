const chenge = require('../chenge');

describe('chenge', () => {
    test('check1', () => {
        expect(chenge(5)).toBe('1 2 three 4 five ');
    });
    test('check2', () => {
        expect(chenge(15)).toBe('1 2 three 4 five three 7 8 three five 11 three 13 14 threeFive ');
    });
    test('check3', () => {
        expect(chenge(null)).toBe(false);
    });

});