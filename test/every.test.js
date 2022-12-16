

import assert from 'assert'
import every from '../src/every.js';

describe('CamelCaseTest', function(){
    it('Should return false when null value in the list as its not truthy', function(){
        var result = every([true, 1, null, 'yes'], Boolean)
        assert.equal(result, false);
    });

    it('Should return true when empty array', function(){
        var result = every([], Boolean)
        assert.equal(result, true);
    });
    it('Should return false when false value in the array', function(){
        var result = every([true, false, true, true], Boolean)
        assert.equal(result, false);
    });
    it('Should return true when only truthy values in the array', function(){
        var result = every([true, 1, true, true], Boolean)
        assert.equal(result, true);
    });
    it('Should return false when only truthy falsey in the array', function(){
        var result = every([null, 0, '',], Boolean)
        assert.equal(result, false);
    });
    it('empty string should count as falsey', function(){
        var result = every([''], Boolean)
        assert.equal(result, false);
    });
    it('num 0 should count as falsey', function(){
        var result = every([0], Boolean)
        assert.equal(result, false);
    });
    it('0 as text should count as truthy', function(){
        var result = every(['0'], Boolean)
        assert.equal(result, true);
    });
    it('Text in the array should return false when predicate is a number', function(){
        var result = every([1,'3453','dfglkhgf'], Number)
        assert.equal(result, false);
    });
    it('Everything should return true when predicate is string', function(){
        var result = every([true, 'two', 1, '1', false, 0], String)
        assert.equal(result, true);
    });
});