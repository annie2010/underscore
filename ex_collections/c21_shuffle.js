var _=require('underscore')

console.log("===begin===")

console.log("\n\n=====Part 1: shuffle=====")
// shuffle, _.shuffle(list) 
// Returns a shuffled copy of the list 
var c=[1,2,3,4,5,6]
var a=_.shuffle(c)
console.log("_.shuffle ::",a, ", org col :: ", c)

console.log("\n\n=====Part 2: sample=====")
// sample, _.sample(list, [n]) 
// Produce a random sample from the list.  
var c=[1,2,3,4,5,6]
var a=_.sample(c)
console.log("_.sample ::",a, ", org col :: ", c)


console.log("\n\n=====Part 3: toArray=====")
var a=(function(){return _.toArray(arguments).slice(1);})(1,2,3,4);
console.log("_.toArray (way 1):: ",a)

function f1(){
 var a = arguments
 console.log("\nf1 :: 1 : ",a)
 console.log("f1 :: 2 : ",_.toArray(a))
 console.log("f1 :: 3 : ",_.toArray(a).slice(1))
 return  _.toArray(a).slice(1)
}
var a=f1(1,2,3,4)
console.log("_.toArray (way 2):: ",a)

console.log("\n\n=====Part 4: size=====")
var c=({one:1, two:2, three:3})
var a=_.size(c)
console.log("_.size ::",a, ", org col :: ", c)


console.log("===end successfully===")


/***

sample runtime

===begin===


=====Part 1: shuffle=====
_.shuffle :: [ 5, 3, 1, 2, 6, 4 ] , org col ::  [ 1, 2, 3, 4, 5, 6 ]


=====Part 2: sample=====
_.sample :: 3 , org col ::  [ 1, 2, 3, 4, 5, 6 ]


=====Part 3: toArray=====
_.toArray (way 1)::  [ 2, 3, 4 ]

f1 :: 1 :  { '0': 1, '1': 2, '2': 3, '3': 4 }
f1 :: 2 :  [ 1, 2, 3, 4 ]
f1 :: 3 :  [ 2, 3, 4 ]
_.toArray (way 2)::  [ 2, 3, 4 ]


=====Part 4: size=====
_.size :: 3 , org col ::  { one: 1, two: 2, three: 3 }
===end successfully===

***/
