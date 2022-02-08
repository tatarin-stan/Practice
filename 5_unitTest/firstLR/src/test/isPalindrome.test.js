const isPalindrome = require('../../isPalindrom');


describe('isPalindrome', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('isPalindrome', () => {
        expect(isPalindrome("assdssa")).toEqual('yes');
    })
    test('isntPalindrome', () => {
        expect(isPalindrome("testFalse")).toEqual('no');
    })
})


