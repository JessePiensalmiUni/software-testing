import assert from 'assert';
import chunk from '../src/chunk.js';


describe('chunk', function(){
    it('Should split array to two element arrays when size is 2', function(){
        let result = chunk(['a', 'b', 'c', 'd'], 2)
        assert.deepEqual(result, obj1);
    });
    it('Should split array to 3 element arrays when size is 3', function(){
        let result = chunk(['a', 'b', 'c', 'd'], 3)
        assert.deepEqual(result, [['a', 'b', 'c'], ['d']]);
    });
    it('Should be same array when size is  len of arr', function(){
        let result = chunk(['a', 'b', 'c', 'd'], 4)
        assert.dppequal(result, obj1);
    });
    it('Should be every elem in its owwn array when size is 1', function(){
        let result = chunk(['a', 'b', 'c', 'd'], 1)
        assert.deepEqual(result, [['a'], ['b'], ['c'], ['d']]);
    });

});