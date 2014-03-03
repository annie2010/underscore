var _=require('underscore')

console.log("==begin");

console.log("\n\n=alias: collect");
var a=_.map([1,2,3], function(num){return num*3 });
console.log(a)

var b=_.map({one: 1, two: 2, three: 3}, function(num, key){ return num*3});
console.log(b)
// map_.map(list, iterator, [context]) Alias: collect 
// http://underscorejs.org/#map

console.log("==completed ok");

/*** Sample runtime

==begin


=alias: collect
[ 3, 6, 9 ]
[ 3, 6, 9 ]
==completed ok
***/

// ref
// http://stackoverflow.com/questions/4946456/underscore-js-eachlist-iterator-context-what-is-context 

