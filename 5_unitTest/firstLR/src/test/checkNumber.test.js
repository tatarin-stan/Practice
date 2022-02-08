const checkNumber = require('../checkNumber');


describe('checkNumber', () => {

    test('checkNumber1', () => {
        expect(checkNumber(-10)).toEqual([ false, true, true ]);
    })
    test('checkNumber2', () => {
        expect(checkNumber(7)).toEqual([true, false, false]
        );
    })
})
