/**
* This method is like `defaultTo` except that it accepts multiple default values and returns the first one that is not
* `NaN`, `null`, or `undefined`.
*
* defaultToAny(1, 10, 20)
* // => 1
*
* defaultToAny(undefined, 10, 20)
* // => 10
*
* defaultToAny(undefined, null, 20)
* // => 20
*
* defaultToAny(undefined, null, NaN)
* // => NaN
*/

import assert from 'assert'
import CamelCase from '../src/camelCase.js';

describe('CamelCaseTest', function(){
    it('Should remove all spaces and lowercase very first letter', function(){
        var result = CamelCase('Foo Bar')
        assert.equal(result, 'fooBar');
    });
    it('Should remove all spaces and lowercase very first letter', function(){
        var result = CamelCase('--foo-bar--')
        assert.equal(result, 'fooBar');
    });
    it('Should remove all spaces and lowercase very first letter', function(){
        var result = CamelCase('__FOO_BAR__')
        assert.equal(result, 'fooBar');
    });
});