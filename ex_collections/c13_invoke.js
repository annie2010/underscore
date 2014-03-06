var _=require('underscore')

console.log("===begin===")

console.log("\n\n==== Part 1, invoke")
// invoke, _.invoke(list, methodName, *arguments) 
// Calls the method named by methodName on each value in the list.  
var a=_.invoke([[5,1,7],[3,2,1]],'sort')
console.log("_.invoke :: ",a)

console.log("\n\n==== Part 2, pluck")
// pluck, _.pluck(list, propertyName) 
// A convenient version of what is perhaps the most common use-case for map:   
var c1=[{name: 'moe', age:40}, {name:'larry', age:50},{name:'curly', age:60}]
var a=_.pluck(c1,'name')
var b=_.pluck(c1,'age')
console.log("_.plunk :: ",a)
console.log("_.plunk :: ",b)

var c2=[{person:{name: 'moe', age:40}}, {person:{name:'larry', age:50}},{person: {name:'curly', age:60}}]
var a=_.pluck(c2,'person')
var b=_.pluck(a,'name')
var c=_.pluck(a,'age')
console.log("_.plunk :: ",a)
console.log("_.plunk :: ",b)
console.log("_.plunk :: ",c)

console.log("\n\n==== Part 3, max")
// max, _.max(list, [iterator], [context]) 
// Returns the maximum value in list.   
var c1=[{name: 'moe', age:40}, {name:'larry', age:50},{name:'curly', age:60}]
var a=_.max(c1,function(person){return person.age})
console.log("_.max :: ",a)

console.log("\n\n==== Part 4, min")
// min, _.min(list, [iterator], [context]) 
// Returns the minimum value in list.   
var c1=[{name: 'moe', age:40}, {name:'larry', age:50},{name:'curly', age:60}]
var a=_.min(c1,function(person){return person.age})
console.log("_.min :: ",a)

console.log("===end successfully===")


/***

Sample runtime

===begin===


==== Part 1, invoke
_.invoke ::  [ [ 1, 5, 7 ], [ 1, 2, 3 ] ]


==== Part 2, pluck
_.plunk ::  [ 'moe', 'larry', 'curly' ]
_.plunk ::  [ 40, 50, 60 ]
_.plunk ::  [ { name: 'moe', age: 40 },
  { name: 'larry', age: 50 },
  { name: 'curly', age: 60 } ]
_.plunk ::  [ 'moe', 'larry', 'curly' ]
_.plunk ::  [ 40, 50, 60 ]


==== Part 3, max
_.max ::  { name: 'curly', age: 60 }


==== Part 4, min
_.min ::  { name: 'moe', age: 40 }
===end successfully===
***/
