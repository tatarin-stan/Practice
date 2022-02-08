const twoArguments = require('../twoArguments');


describe('twoArguments', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('twoArgOne', () => {
        expect(twoArguments(13, 12)).toEqual(25);
    })
    test('twoArgTwo', () => {
        expect(twoArguments(15, 12)).toEqual(-3);
    })
})
