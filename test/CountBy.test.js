import assert from 'assert'
import countBy from '../src/countBy.js';

const users = [
{ 'user': 'barney', 'active': true },
{ 'user': 'betty', 'active': true },   
{ 'user': 'fred', 'active': false }
 ]
 const user = [
    {'user': 'timmy', 'active': true}
 ]
 const mobility= [
    {'toyota': 'model1','year':'1999','type':'motorcycle'},
    {'mitsubishi': 'yando', 'year':'2005','type':'car'},
    {'harlem': 'mark7','year':'2011', 'type':'bike'},
    {'punkd':'skeet8','year':'2000','type':'skateboard'}

]
const cars= [
    {'mitsubishi': 'yando', 'year':'2005','type':'car'},
    {'chevrolet': 'stallion', 'year': '2002', 'type':'car'},
    {'volvo': 'compact', 'year':'2015','type': 'car'}
]
const weird= [
    {'what':"the","type":undefined},
    {'who':"is",'type':null},
    {'what':'no','type':0}
]
const zero=[
    {undefined:undefined,undefined:undefined},
    {undefined:undefined,undefined:0}
]
const empty=[

]

describe('the countBy function', function(){
    it('should return a map of true and false where the value for true is 1 and false is 0', function(){
        assert.deepEqual(countBy(user, value => value.active),{ 'true': 1})
    });
    it('should return a map of true and false where the value for true is 2 and false is 1', function(){
        assert.deepEqual(countBy(users, value => value.active),{ 'true': 2, 'false': 1 })
    });
    it('should return a map of motorcycle, car, bike and skateboard that has values 1, 1, 1, 1', function(){
        assert.deepEqual(countBy(mobility,value => value.type),{'motorcycle':1,'car':1,'bike':1,'skateboard':1})
    });
    it('should return a map of undefined with a value of 4', function(){
        assert.deepEqual(countBy(mobility,value => value.no),{'undefined':4})
    });
    it('should return a map of car that has value 3', function(){
        assert.deepEqual(countBy(cars,value => value.type),{'car':3})
    });
    it('should return a map of the that has value 1', function(){
        assert.deepEqual(countBy(weird,value => value.what),{'the':1})
    });
    it('should return a map of {undefined:1,null:1,0:1} that have value 1', function(){
        assert.deepEqual(countBy(weird,value => value.type),{undefined:1,null:1,0:1})
    });
    it('should return a map of {undefined:0,0:0} that have value 1', function(){
        assert.deepEqual(countBy(zero,value => value.undefined),{undefined:0,0:0})
    });
    it("should return {} when given an empty array and a value that doesn't exist in the variable",function(){
        assert.deepEqual(countBy(empty,value => value.type),{})
    });
})
