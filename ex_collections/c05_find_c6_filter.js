var _=require('underscore')

console.log("==begin");

// find_.find(list, predicate, [context]) Alias: detect 
// Looks through each value in the list, returning the first one that passes a truth test (predicate),
console.log("\n\n=alias: detect");
var a = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(a)

// filter_.filter(list, predicate, [context]) Alias: select 
// Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
console.log("\n\n=alias: select");
var b = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(b)
  
console.log("==completed ok");


/***
==begin


=alias: detect
2


=alias: select
[ 2, 4, 6 ]
==completed ok

***/

