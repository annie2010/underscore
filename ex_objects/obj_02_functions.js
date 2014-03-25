_=require('underscore')

console.log("=====begin=====")

console.log('\n\n===1. functions, _.functions(obj), alias: methods, Returns a sorted list of the names of every method in an obj')
a=_.functions(_)
console.log("total # of functions for an object in underscore = [",a.length,"]")
console.log(_.initial(a,a.length-5)) // the initial 5 functions
console.log(_.rest(a,a.length-5)) // the rest 5 functions

console.log('\n\n===2. extend, _.extend(dest, *obj), copy all of the properties in the source objects over to the dest obj, and return the dest obj')
a={age:20}
b={name:'annie'}
console.log("org obj:",b)
_.extend(b,a)
console.log("extended obj:",b)

console.log('\n\n===3. pick, _.pick(obj, *keys), Return a copy of the obj, filtered to only have values for the whitelisted keys')
a={one:1, two:2, three:3}
b=_.pick(a,'two','one')
console.log(b)

console.log('\n\n===4. omit, _.omit(obj, *keys), Return a copy of the obj, filtered to omit the blacklisted keys')
a={one:1, two:2, three:3}
b=_.omit(a,'two','one')
console.log(b)

console.log("=====end successfully=====")


/***

sample runtime

$node obj_02_functions.js
=====begin=====


===1. functions, _.functions(obj), alias: methods, Returns a sorted list of the names of every method in an obj
total # of functions for an object in underscore = [ 114 ]
[ '_', 'after', 'all', 'any', 'bind' ]
[ 'values', 'where', 'without', 'wrap', 'zip' ]


===2. extend, _.extend(dest, *obj), copy all of the properties in the source objects over to the dest obj, and return the dest obj
org obj: { name: 'annie' }
extended obj: { name: 'annie', age: 20 }


===3. pick, _.pick(obj, *keys), Return a copy of the obj, filtered to only have values for the whitelisted keys
{ two: 2, one: 1 }


===4. omit, _.omit(obj, *keys), Return a copy of the obj, filtered to omit the blacklisted keys
{ three: 3 }
=====end successfully=====


***/
