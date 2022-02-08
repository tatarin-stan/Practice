const annagramCheck = require('../annagramCheck');


describe('annagramCheck', () => {

    test('annagramCheck1', () => {
        expect(annagramCheck(['sdsr', 'ssd'])).toEqual('Не аннограма');
    })
    test('annagramCheck2', () => {
        expect(annagramCheck(['sds', 'ssd'])).toEqual('Аннограма');
    })
    test('annagramCheck3', () => {
        expect(annagramCheck([1])).toEqual('Не подходит');
    })
})
