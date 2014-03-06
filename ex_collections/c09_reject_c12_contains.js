var _=require('underscore')

console.log("===begin")

console.log("\n\n==== part 1, _.reject vs _.filter")
// reject_.reject(list, predicate, [context])
// reject_.reject(list, predicate, [context])
// Returns the values in list without the elements that the truth test (predicate) passes.   
//the opposite of filter
var a= _.reject([1,2,3,4,5,6], function(num){return num %2 ===0;});
console.log("_.reject :: ",a)

var b= _.filter([1,2,3,4,5,6], function(num){return num %2 ===0;});
console.log("_.filter :: ",b)

console.log("\n\n==== part 2, _.every vs _.some")
// every_.every(list, [predicate], [context]) Alias: all 
// Returns true if all of the values in the list pass the predicate truth test.  
var c1 = _.identity
var c2 = [true, 1, null, 'yes']
var c=_.every(c2, c1)
console.log("_.every :: [",c, "], c2 :: ", c2, ", c1 :: ",c1)


var c2 = [true, 1, null, 'yes']
var c=_.every(c2)
console.log("_.every :: [",c, "], c2 :: ", c2)


var c2 = [true, 1, null, 'yes']
var c=_.some(c2)
console.log("_.some :: [",c, "], c2 :: ", c2)

// contains_.contains(list, value) Alias: include
// Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. 
var a=_.contains([1,2,3],3)
console.log("_.contains ::", a)

console.log("===end")

