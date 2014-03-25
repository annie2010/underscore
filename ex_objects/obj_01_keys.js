_=require('underscore')

console.log('=====begin')

console.log("\n\n===1. keys, _.keys(obj), Retrieve all the names of the obj properties")
a= _.keys({one:1, two:2});
console.log(a)

console.log("\n\n===2. values, _.values(obj), Retrieve all the values of the obj properties")
a= _.values({one:1, two:2});
console.log(a)

console.log("\n\n===3. pairs, _.pairs(obj), Convert an object into a list of key,value pairs")
a= _.pairs({one:1, two:2});
console.log(a)


console.log("\n\n===4. invert, _.invert(obj), Retrieve a copy of object where the keys have become values, and the values have become keys")
a= _.invert({one:1, two:2});
console.log(a)

console.log('=====end successfully')


/****
sample runtime

$node obj_01_keys.js
=====begin


===1. keys, _.keys(obj), Retrieve all the names of the obj properties
[ 'one', 'two' ]


===2. values, _.values(obj), Retrieve all the values of the obj properties
[ 1, 2 ]


===3. pairs, _.pairs(obj), Convert an object into a list of key,value pairs
[ [ 'one', 1 ], [ 'two', 2 ] ]


===4. invert, _.invert(obj), Retrieve a copy of object where the keys have become values, and the values have become keys
{ '1': 'one', '2': 'two' }
=====end successfully


***/

