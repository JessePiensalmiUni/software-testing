/* const object = { 'a': [{ 'b': { 'c': 3 } }] }
*
* get(object, 'a[0].b.c')
* // => 3
*
* get(object, ['a', '0', 'b', 'c'])
* // => 3
*
* get(object, 'a.b.c', 'default')
* // => 'default'
* Gets the value at `path` of `object`. If the resolved value is
* `undefined`, the `defaultValue` is returned in its place.
*/

import assert from 'assert'
import get from '../src/get.js';
const object = { 'a': [{ 'b': { 'c': 3 } }] }
const object2 = {'a' :[{'b': {'c':3}}, undefined]}
const object3= []
describe('the get function', function(){
    it('should return 3 which is the value of given path which is represented in string form', function(){
        assert.equal(get(object, 'a[0].b.c'),3)
    });
    it('should return 3 which is the value of the given which is represented in array form', function(){
        assert.equal(get(object, ['a', '0', 'b', 'c']),3)
    });
    it('should return defined which is the given defaultValue for the function', function(){
        assert.equal(get(object2,'a[1]','default'),'default')
    });
    it('should return the default value when it cannot access a value in this case defaultValue is default', function(){
        assert.equal(get(object3,'[0]','default'),'default')
    });   
});