var _=require('underscore')

console.log("=====begin=====")

console.log("\n\n=== Part 1: compact")
// compact, _.compact(array) 
// Returns a copy of the array with all false values removed.
var a=_.compact([0,1,false, 2,'',3])
console.log(a)

console.log("\n\n=== Part 2: flatten")
// flatten, _.flatten(array, [shallow]) 
// Flattens a nested array
// if you pass shallow, the array will be flatterned 1 level
var a=_.flatten([1,[2,[3,[4]]]])
console.log("flattern all levels",a)
var a=_.flatten([1,[2,[3,[4]]]], true)
console.log("flattern shallow",a)

console.log("\n\n=== Part 3: without")
// without, _.without(array, *values) 
// Returns a copy of the array with all instacne of the values removed
var a=_.without([1,2,1,0,3,1,4], 0, 1)
console.log(a)


console.log("\n\n=== Part 4: partition")
// partition, _.partition(array, predicate) 
// Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
var a=_.partition([1,2,1,0,3,1,4], function(num){return num %2 ===0 ?true:false}) 
console.log("partition isEven",a)
var a=_.partition([1,2,1,0,3,1,4], function(num){return num %2 ===0 ?false:true}) 
console.log("partition isOdd",a)


console.log("=====end successfully=====")


/***
=====begin=====


=== Part 1: compact
[ 1, 2, 3 ]


=== Part 2: flatten
flattern all levels [ 1, 2, 3, 4 ]
flattern shallow [ 1, 2, [ 3, [ 4 ] ] ]


=== Part 3: without
[ 2, 3, 4 ]


=== Part 4: partition
partition isEven [ [ 2, 0, 4 ], [ 1, 1, 3, 1 ] ]
partition isOdd [ [ 1, 1, 3, 1 ], [ 2, 0, 4 ] ]
=====end successfully=====
***/
