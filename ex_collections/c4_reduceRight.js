var _=require('underscore')

console.log("==begin");

// reduceRight_.reduceRight(list, iterator, memo, [context]) Alias: foldr  
console.log("\n\n=alias: reduceRight");

var list = [[0, 1], [2, 3], [4, 5]];
var f1 = _.reduceRight(list, function(a, b) { return a.concat(b); }, []); // var a is declared as []
var f2 = _.reduce(list, function(a, b) { return a.concat(b); }, []); // var a is declared as []
console.log("org. list::", list)
console.log("flat from right::",f1)
console.log("flat from left::",f2)

console.log("==completed ok");


/***

==begin


=alias: reduceRight
org. list:: [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]
flat from right:: [ 4, 5, 2, 3, 0, 1 ]
flat from left:: [ 0, 1, 2, 3, 4, 5 ]
==completed ok

***/

