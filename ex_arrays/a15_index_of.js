var _=require('underscore')

console.log("=====begin====")

console.log("\n\n===Part 1: indexOf")
// index, _.indexOf(array, value, [isSorted])
// Returns the index at which value can be found in the array
var a1=[1,2,3,1,2,3]
var i=2
var a=_.indexOf(a1,i)
console.log("indexOf :: ",a ,", arr ::",a1, ", i :: ",i)

console.log("\n\n===Part 2: lastIndexOf")
// lastIndexOf, _.lastIndexOf(array, value, [fromIndex])
// Returns the index of the last occurance of value in the array
var a1=[1,2,3,1,2,3]
var i=2
var a=_.lastIndexOf(a1,i)
console.log("lastIndexOf :: ",a ,", arr ::",a1, ", i :: ",i)

console.log("\n\n===Part 3: sortedIndex")
// sortedIndex, _.sortedIndex(list, value, [iterator], [context])
// uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order
var arr= [10,20,30,40,50]
var i = 35
var a=_.sortedIndex(arr, i)
console.log("index :: ",a,", arr ::", arr, ", i :: ",i)

var persons =[{name:'moe', age:40},{name:'curly',age:60}]
var p={name:'larry',age:50}
var a=_.sortedIndex(persons, p, 'age')
console.log("index :: ",a,", persons ::", persons, ", p :: ",p)

console.log("\n\n===Part 4: range")
// range, _.range([start], stop, [step])
// a function to create flexibly-numbered lists of integers, handy for each and map loops
var a=_.range(10)
console.log("_.range(10) :: ",a)
var a=_.range(1, 11)
console.log("_.range(1, 11) :: ",a)
var a=_.range(0,30,5)
console.log("_.range(0,30,5) :: ",a)
var a=_.range(0,30,5)
console.log("_.range(0,30,5) :: ",a)
var a=_.range(0)
console.log("_.range(0) :: ",a)


console.log("=====end successfully====")


/***

=====begin====


===Part 1: indexOf
indexOf ::  1 , arr :: [ 1, 2, 3, 1, 2, 3 ] , i ::  2


===Part 2: lastIndexOf
lastIndexOf ::  4 , arr :: [ 1, 2, 3, 1, 2, 3 ] , i ::  2


===Part 3: sortedIndex
index ::  3 , arr :: [ 10, 20, 30, 40, 50 ] , i ::  35
index ::  1 , persons :: [ { name: 'moe', age: 40 }, { name: 'curly', age: 60 } ] , p ::  { name: 'larry', age: 50 }


===Part 4: range
_.range(10) ::  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
_.range(1, 11) ::  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
_.range(0,30,5) ::  [ 0, 5, 10, 15, 20, 25 ]
_.range(0,30,5) ::  [ 0, 5, 10, 15, 20, 25 ]
_.range(0) ::  []
=====end successfully====

**/
