import assert from 'assert';
import memoize from '../src/memoize.js';
describe('the memoize function', function(){
    it('should return an array [1,2] when given a map and and a memoized values function', function(){
        const values = memoize(values)
        assert.deepEqual(values(object),[1,2])
    });
 })