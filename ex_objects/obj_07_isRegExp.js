_=require('underscore')

console.log('=====begin=====')

console.log("\n\n 1. isRegExp")
a=/moe/
b=_.isRegExp(a)
console.log(a,b)

a='/moe/'
b=_.isRegExp(a)
console.log(a,b)
b=_.isString(a)
console.log(a,b)

console.log("\n\n 2. isNaN")
a=NaN
b=_.isNaN(a)
console.log(a,b)

console.log("\n\n 3. isNull")
a=null
b=_.isNaN(a)
console.log(a,b)
a=undefined
b=_.isNaN(a)
console.log(a,b)

console.log("\n\n 4. isUndefined")
a=undefined
b=_.isUndefined(a)
console.log(a,b)
//b=_.isUndefined(window)
//console.log(b)

console.log("\n\nbefore try for undefined [c]");
try {
  b=_.isUndefined(c)
  console.log("a] in try, result:", b)
}
catch (e) {
  console.log("b] in catch, error:", e)
}
finally{
  console.log("c] in finally, result:", b)
}
console.log("after finally");


console.log("\n\nbefore try for undefined [window]");
try {
  b=_.isUndefined(window)
  console.log(b)
}
catch (e) {
  console.log("b] in catch, error:", e)
}
finally{
  console.log("c] in finally, result:", b)
}



console.log('\n\n=====end successfully=====')

// node try-catch
// http://docs.nodejitsu.com/articles/errors/what-is-try-catch

/***
[ubuntu@chicago::ip-10-167-6-127:~/myrepo/underscore/ex_objects]$node obj_07_isRegExp.js
=====begin=====


 1. isRegExp
/moe/ true
/moe/ false
/moe/ true


 2. isNaN
NaN true


 3. isNull
null false
undefined false


 4. isUndefined
undefined true


before try for undefined [c]
b] in catch, error: [ReferenceError: c is not defined]
c] in finally, result: true
after finally


before try for undefined [window]
b] in catch, error: [ReferenceError: window is not defined]
c] in finally, result: true


=====end successfully=====
***/
