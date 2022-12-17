import assert from 'assert';
import compact from '../src/compact.js';

describe('compact', function(){
    it('Should return empty list when param is an empty list', function(){
        assert.deepEqual(compact([]), []);
    });
    it('Only truthy values in the list so should remain as is', function(){
        assert.deepEqual(compact([1, 2, 3]), [1, 2, 3]);
    });
    it('Should remove falsey elements', function(){
        assert.deepEqual(compact([0, 1, false, 2, '', 3]), [1, 2, 3]);
    });
    it('should remove all values from', function(){
        assert.deepEqual(compact(["",0,'',false]),[])
    });
});
