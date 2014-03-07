var _=require('underscore')

console.log("====begin====")

console.log("\n\n===Part 1: union")
// union, _.union(*array)
// Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays
var a=_.union([1,2,3], [101,2,1,10], [2,1])
console.log(a)

console.log("\n\n===Part 2: intersection")
// intersection, _.intersection(*array)
// Computes the list of values that are the intersection of all the arrays
var a=_.intersection([1,2,3], [101,2,1,10], [2,1])
console.log(a)

console.log("\n\n===Part 3: difference")
// difference, _.difference(*array)
// Similar to without, but returns the values from array that are not present in the other arrays
var a1=[1,2,3,4,5]
var a2=[5,2,10]
var a=_.difference(a1,a2)
console.log("a1 :: ",a1, ", a2 :: ", a2, ", diff :: ",a)

console.log("\n\n===Part 4: unique")
// unique, _.unique(array, [isSorted], [iterator])
// Produces a duplica-free version of the array
var a=_.unique([1,2,1,3,1,4])
console.log(a)

console.log("====end successful====")


/***

Sample runtime

===begin====


===Part 1: union
[ 1, 2, 3, 101, 10 ]


===Part 2: intersection
[ 1, 2 ]


===Part 3: difference
a1 ::  [ 1, 2, 3, 4, 5 ] , a2 ::  [ 5, 2, 10 ] , diff ::  [ 1, 3, 4 ]


===Part 4: unique
[ 1, 2, 3, 4 ]
====end successful====


***/
