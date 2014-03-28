_=require('underscore')

console.log('=====start=====')

console.log('\n\n===1. matches, _.matches(attrs), Returns a predicate function that will tell you if a passed in obj obtains all of key/val properties present in attrs')
obj=[{selected:true, visible:true,a:1, b:2}, {name:'annie', selected:true}, {name:'jing', visible:true}, {who:'shine', selected:true, visible:true}]
a=_.matches({selected:true, visible:true})
b=_.filter(obj, a)
console.log(b)


var arr = [{a: 1}, {a: 5}, {a: 9}, {a: 11}, {a: 15}]

console.log('\n\n===1a. matches')
var a=_.matches({a:1})
var b=_.filter(arr, a);
console.log(b)

console.log('\n\n===1b. matches')
var a=function(el) { return el.a > 10; }
var b=_.filter(arr, a);
console.log(b)

console.log('\n\n===1c. matches')
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens)

console.log('\n\n===2. property,_.property(key), Returns a function that will itself return the key prop ')
a={name:'annie'}
b='annie' === _.property('name')(a)
console.log(b)

console.log('\n\n===3. isEqual, _.isEqual(obj, other), Performs an opt deep compariosn btw the two objs')
a={name:'annie',luckNum:[12.13,14]}
b={name:'annie',luckNum:[12.13,14]}
console.log(a==b)
console.log(_.isEqual(a,b))

console.log('\n\n===4. isEmpty, _.isEmpty(obj), Returns true if obj contaons no values')
a=[1,2,3]
b=_.isEmpty(a)
console.log(a,b)
a={}
b=_.isEmpty(a)
console.log(a,b)

console.log('=====end successfully=====')

/***

Sample runtime

[ubuntu@chicago::ip-10-167-6-127:~/myrepo/underscore/ex_objects]$node obj_04_matches.js
=====start=====


===1. matches, _.matches(attrs), Returns a predicate function that will tell you if a passed in obj obtains all of key/val properties present in attrs
[ { selected: true, visible: true, a: 1, b: 2 },
  { who: 'shine', selected: true, visible: true } ]


===1a. matches
[ { a: 1 } ]


===1b. matches
[ { a: 11 }, { a: 15 } ]


===1c. matches
[ 2, 4, 6 ]


===2. property,_.property(key), Returns a function that will itself return the key prop 
true


===3. isEqual, _.isEqual(obj, other), Performs an opt deep compariosn btw the two objs
false
true


===4. isEmpty, _.isEmpty(obj), Returns true if obj contaons no values
[ 1, 2, 3 ] false
{} true
=====end successfully=====
***/
