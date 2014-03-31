_=require('underscore')

console.log('=====begin=====')

console.log('\n\n===1. isFunction')
a=function(){ return _.isArray(arguments); };
b=_.isFunction(a);
console.log(a,b)

console.log('\n\n===2. isString')
a="hello"
b=_.isString(a)
console.log(a,b)

console.log('\n\n===3. isNumber')
a=8.1*5
b=_.isNumber(a)
console.log(a,b)

console.log('\n\n===4. isFinite')
a=-101
b=_.isFinite(a)
console.log(a,b)
a=Infinity
b=_.isFinite(a)
console.log(a,b)

console.log('\n\n===5. isBoolean')
a=true
b=_.isBoolean(a)
console.log(a,b)
a=null
b=_.isBoolean(a)
console.log(a,b)

console.log('\n\n===6. isDate')
a=new Date()
b=_.isDate(a)
console.log(a,b)


console.log('\n\n=====end successfully=====')


/***
runtime sample

[ubuntu@chicago::ip-10-167-6-127:~/myrepo/underscore/ex_objects]$node obj_06_isFunc.js 
=====begin=====


===1. isFunction
[Function] true


===2. isString
hello true


===3. isNumber
40.5 true


===4. isFinite
-101 true
Infinity false


===5. isBoolean
true true
null false


===6. isDate
Mon Mar 31 2014 15:50:29 GMT+0000 (UTC) true


=====end successfully=====
***/
