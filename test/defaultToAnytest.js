import assert from 'assert'
import defaulToAny from '../src/defaultToAny.js';

describe('the defaulToAny function', function(){
    it('should return the first value when array has only non default values', function(){
        assert.equal(defaulToAny(1,10,20),1)
    });
    it('should return the second value when the first value of array is a default value', function(){
        assert.equal(defaulToAny(undefined, 10, 20),10)
    });
    it('should return the third value when the first two values of array are default values', function(){
        assert.equal(defaulToAny(undefined, null, 20),20)
    });
    it('should return the last value if all values in the array are default values', function(){
        assert.equal(defaulToAny(undefined, null, NaN),NaN)
    });
    it('should return the first value which is 1 even if there is an undefined value further back', function(){
        assert.equal(defaulToAny(1,10,undefined,20),1)
    });
});