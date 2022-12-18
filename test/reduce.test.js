import assert from 'assert'
import reduce from '../src/reduce.js'


describe('the reduce function', function(){
    it('should return 3 when given an array of [1,2] and summed up', function(){
        assert.equal(reduce([1, 2], (sum, n) => sum + n, 0),3)
    });
    it('should return 3 when given an array of [1,2] and summed up even when start value parameter is not provided', function(){
        assert.equal(reduce([1, 2], (sum, n) => sum + n),3)
    });
    it('should return 3 when given an array of [1,2] and summed up even when start value parameter is not provided', function(){
        assert.equal(reduce([1, 2,4,-1,null], (sum, n) => sum + n),6)
    });
    it('should return map with arrrays with values and keys switched', function(){
        assert.deepEqual(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
               (result[value] || (result[value] = [])).push(key)
               return result
                }, {}),{ '1': ['a', 'c'], '2': ['b'] })
    });
    it('should return the sum of values of the map', function(){
        assert.deepEqual(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => result+value, 0),4)
    });
})
