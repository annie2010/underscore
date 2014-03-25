_=require('underscore')

console.log('=====begin')

console.log("\n\n=== 1. defaults, _.defaults(obj, *default), Fill in undefined properties in obj iwth values from the defaults objects, and return the obj")
a={flavor:'chocolat'}
b=_.defaults(a,{flavor:'vanilla', sprinkles:'lots'});
console.log(b)

console.log("\n\n=== 2. clone, _.clone(obj), Create a shallow-copied obj")
a={name:'annie'}
b=_.clone(a)
console.log(b)

console.log("\n\n=== 3. tap, _.tap(obj, interceptor), Invokes interceptor with the obj, and return obj")
a=_.chain([1,2,3,200]).filter(function(num){console.log("== 1]",num, num%2===0);return num%2===0;}).map(function(num){console.log("== 2]",num,num*num);return num*num}).value()
console.log(a)

console.log("\n\n=== 4. has, _.has(obj, key), Does the obj contain the given key?")
a=_.has({a:1,b:2,c:3},'b')
console.log(a)

console.log('\n\n=====end successfully')


/***

$node obj_03_defaults.js 

=====begin


=== 1. defaults, _.defaults(obj, *default), Fill in undefined properties in obj iwth values from the defaults objects, and return the obj
{ flavor: 'chocolat', sprinkles: 'lots' }


=== 2. clone, _.clone(obj), Create a shallow-copied obj
{ name: 'annie' }


=== 3. tap, _.tap(obj, interceptor), Invokes interceptor with the obj, and return obj
== 1] 1 false
== 1] 2 true
== 1] 3 false
== 1] 200 true
== 2] 2 4
== 2] 200 40000
[ 4, 40000 ]


=== 4. has, _.has(obj, key), Does the obj contain the given key?
true


=====end successfully


***/
