var _=require('underscore')

console.log("==begin");

// reduce_.reduce(list, iterator, memo, [context]) Aliases: inject, foldl 
console.log("\n\n=alias: reduce");
var a=_.reduce([1,2,3], function(memo,num){return  memo+num},0);
console.log(a)

console.log("==completed ok");


/***
Sample output

==begin


=alias: reduce
6
==completed ok

***/

