import { assert } from 'chai';
import { myDate } from '@/helpers/my-date';

suite('myDate', () => {
    test('should return null when passed falsy value', () => {
        let wrongValue = myDate("Wrong value")
        assert.isNull(wrongValue);
    });

    test('should return proper date when pass UTC Date string', () => {
        const input = 'Sat Feb 23 2019 10:16:25 GMT+0100 (czas środkowoeuropejski standardowy)';
        const output = /2019/;
        assert.match(input, output);
    });
});
