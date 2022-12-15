import assert from 'assert';
import castArray from '../src/castArray.js';

describe('castArray', function(){
    it('Num 1 should be only element in array as num 1', function(){
        assert.deepEqual(castArray(1), [1]);
    });
    it('Object to array as only element', function(){
        var result = castArray({ 'a': 1 })
        assert.deepEqual(result, [{ 'a': 1 }]);
    });
    it('string to array', function(){
        var result = castArray('abc')
        assert.deepEqual(result, ['abc']);
    });
    it('Null to array should work without problems', function(){
        var result = castArray(null)
        assert.deepEqual(result, [null]);
    });
    it('Undefined to array should work without problems', function(){
        var result = castArray(undefined)
        assert.deepEqual(result, [undefined]);
    });
    it('Array should be left as is', function(){
        var result = castArray([1, 2, 3])
        assert.deepEqual(result, [1, 2, 3]);
    });


});