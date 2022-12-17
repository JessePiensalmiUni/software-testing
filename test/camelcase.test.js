
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