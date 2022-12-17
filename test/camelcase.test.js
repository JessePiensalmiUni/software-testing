
import assert from 'assert'
import CamelCase from '../src/camelCase.js';

describe('CamelCase', function(){
    it('Should remove all spaces and lowercase first letter and uppercase letters after a separator', function(){
        var result = CamelCase('Foo Bar')
        assert.equal(result, 'fooBar');
    });
    it('Should remove all "-" signs and lowercase first letter and uppercase after a separator', function(){
        var result = CamelCase('--foo-bar--')
        assert.equal(result, 'fooBar');
    });
    it('Should remove all spaces and lowercase first letter and uppercase after a separator', function(){
        var result = CamelCase('__FOO_BAR__')
        assert.equal(result, 'fooBar');
    });
    it('Empty string', function(){
        var result = CamelCase('')
        assert.equal(result, '');
    });
    it('one word -> should start with lowercase letter', function(){
        var result = CamelCase('Word')
        assert.equal(result, 'word');
    });
    it('Many spaces', function(){
        var result = CamelCase('Word   Test   one   two ----  three')
        assert.equal(result, 'wordTestOneTwoThree');
    });
});