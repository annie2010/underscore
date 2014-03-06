var _=require('underscore')


console.log("===begin===")


console.log("\n\n=====Part 1:: _.sortBy, _.map, _.each")
var a = _.sortBy([1,2,3,4,5,6], function(num){return Math.sin(num);})
console.log("_.sortBy (Math.sin(num)) :: ",a)

var a = _.map([1,2,3,4,5,6], function(num){return Math.sin(num);})
console.log("_.map (Math.sin(num)):: ",a)

var a = _.each([1,2,3,4,5,6], function(num){return Math.sin(num);})
console.log("_.each :: ",a)


console.log("\n\n=====Part 2:: _.groupBy")
// Splits a collection into sets, grouped by the result of running each value through iterator.
var a=_.groupBy([1.3,2.1,2.4], function(num){return Math.floor(num);});
console.log("_.groupBy (Math.floor) :: ",a)
var b=_.groupBy(['one','two','three'], 'length');
console.log("_.groupBy (length of a word) :: ",b)
var c=_.groupBy(['one','two','three'], function(f_item){return f_item[0]});
console.log("_.groupBy (first letter) :: ",c)


console.log("\n\n=====Part 3:: _.indexBy")
// Given a list, and an iterator function that returns a key for each element in the list (or a property name), returns an object with an index of each item. 
var c1 =[{name:'moe', age:40}, {name:'larry',age:50}, {name:'curly',age:60}]
var a=_.indexBy(c1,'age')
console.log("_.indexBy (age) ::")
console.log(a)
var a=_.indexBy(c1,'name')
console.log("_.indexBy (name) ::")
console.log(a)

console.log("\n\n=====Part 4:: _.countBy")
var c=[1,2,3,4,5]
var a=_.countBy([1,2,3,4,5], function(num){
  return num %2 ===0 ? 'even' :' odd';
});
console.log("_.countBy ( even, odd) ::",a, ", org. collection :: ", c)


console.log("===end===")


/****

sample runtime

===begin===


=====Part 1:: _.sortBy, _.map, _.each
_.sortBy (Math.sin(num)) ::  [ 5, 4, 6, 3, 1, 2 ]
_.map (Math.sin(num))::  [ 0.8414709848078965,
  0.9092974268256817,
  0.1411200080598672,
  -0.7568024953079282,
  -0.9589242746631385,
  -0.27941549819892586 ]
_.each ::  [ 1, 2, 3, 4, 5, 6 ]


=====Part 2:: _.groupBy
_.groupBy (Math.floor) ::  { '1': [ 1.3 ], '2': [ 2.1, 2.4 ] }
_.groupBy (length of a word) ::  { '3': [ 'one', 'two' ], '5': [ 'three' ] }
_.groupBy (first letter) ::  { o: [ 'one' ], t: [ 'two', 'three' ] }


=====Part 3:: _.indexBy
_.indexBy (age) ::
{ '40': { name: 'moe', age: 40 },
  '50': { name: 'larry', age: 50 },
  '60': { name: 'curly', age: 60 } }
_.indexBy (name) ::
{ moe: { name: 'moe', age: 40 },
  larry: { name: 'larry', age: 50 },
  curly: { name: 'curly', age: 60 } }


=====Part 4:: _.countBy
_.countBy ( even, odd) :: { ' odd': 3, even: 2 } , org. collection ::  [ 1, 2, 3, 4, 5 ]
===end===
***/
