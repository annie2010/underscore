var _=require('underscore')

console.log("=====begin=====")

console.log("===Part 1: zip")
// zip, _.zip(*arrays)
// merges together the value of each of the arrays with the values at the corresponding postion
var a=_.zip(['moe','larry', 'curly'], [30,40,50],[true, false, false]);
console.log("_.zip()arr1, arr2, arr3, ...) :: ",a)
var a=_.zip.apply(null, [ ['foo','bar'], [0,1] ])
console.log(".zip.apply :: ",a)


console.log("\n\n===Part 2: object")
// object, _.object(list, values)
// converts arrays into objects
var a=_.object(['moe','larry', 'curly'], [30,40,50]);
console.log("_.object(list, values) :: ",a)
var a=_.object(['moe','larry', 'curly'], [30,40,50],[true, false, false]);
console.log("_.object(list, values) :: ",a)


console.log("\n\n=====end successfully=====")

/***
Sample runtime

=====begin=====
===Part 1: zip
_.zip()arr1, arr2, arr3, ...) ::  [ [ 'moe', 30, true ],
  [ 'larry', 40, false ],
  [ 'curly', 50, false ] ]
.zip.apply ::  [ [ 'foo', 0 ], [ 'bar', 1 ] ]


===Part 2: object
_.object(list, values) ::  { moe: 30, larry: 40, curly: 50 }
_.object(list, values) ::  { moe: 30, larry: 40, curly: 50 }


=====end successfully=====
**/
