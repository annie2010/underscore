// all array functions will also work on the arguments object
var _=require('underscore')

console.log("===begin===")

console.log("\n\n===== Arrays, Part 1 - _.first")
// first
// first, _.first(array, [n]) Alias: head, take
// Returns the first element of an array
var arr=[5,4,3,2,1]
var a=_.first(arr)
console.log("_.first :: ",a, ", arr ::", arr)

console.log("\n\n===== Arrays, Part 2 - _.initial")
// initial
// Returns the last element of an array 
var arr=[5,4,3,2,1]
var a=_.initial(arr)
console.log("_.initial :: ",a, ", arr ::", arr)


console.log("\n\n===== Arrays, Part 3 - _.last")
// last
// last_.last(array, [n]) 
// Returns the last element of an array  
var arr=[5,4,3,2,1]
var a=_.last(arr)
console.log("_.last :: ",a, ", arr ::", arr)
var arr=[5,4,3,2,1]
var n=2
var a=_.last(arr, n)
console.log("_.last :: ",a, ", arr ::", arr, ", n ::",n)

console.log("\n\n===== Arrays, Part 4 - _.rest")
// rest
// rest_.rest(array, [index]) Alias: tail, drop 
// Returns the rest of the elements in an array.  
var arr=[5,4,3,2,1]
var a=_.rest(arr)
console.log("_.rest :: ",a, ", arr ::", arr)
var arr=[5,4,3,2,1]
var i =2
var a=_.rest(arr, i)
console.log("_.rest :: ",a, ", arr ::", arr, ", index :: ",i)

console.log("===end successfully===")


/***

sample runtime

===begin===


===== Arrays, Part 1 - _.first
_.first ::  5 , arr :: [ 5, 4, 3, 2, 1 ]


===== Arrays, Part 2 - _.initial
_.initial ::  [ 5, 4, 3, 2 ] , arr :: [ 5, 4, 3, 2, 1 ]


===== Arrays, Part 3 - _.last
_.last ::  1 , arr :: [ 5, 4, 3, 2, 1 ]
_.last ::  [ 2, 1 ] , arr :: [ 5, 4, 3, 2, 1 ] , n :: 2


===== Arrays, Part 4 - _.rest
_.rest ::  [ 4, 3, 2, 1 ] , arr :: [ 5, 4, 3, 2, 1 ]
_.rest ::  [ 3, 2, 1 ] , arr :: [ 5, 4, 3, 2, 1 ] , index ::  2
===end successfully===
***/
