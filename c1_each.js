var _=require('underscore')

console.log("==begin");

console.log("\n\n=alias: forEach");
_.each([1,2,3], function(val){ console.log(val); });
_.each({one: 1, two: 2, three: 3}, function(val){ console.log(val); });
console.log("=alias: forEach done");
// each_.each(list, iterator, [context]) Alias: forEach 
// http://underscorejs.org/#each

 
console.log("==completed ok");


/*** sample runtime

==begin


=alias: forEach
1
2
3
1
2
3
=alias: forEach done
==completed ok

***/

// ref
// http://stackoverflow.com/questions/4946456/underscore-js-eachlist-iterator-context-what-is-context 

