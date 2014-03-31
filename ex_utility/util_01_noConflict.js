_=require('underscore')

console.log("====begin=====")

console.log("\n\n==1. noConflict")
underscore=_.noConflict()
//console.log(underscore)
console.log(_.isObject(underscore))
console.log(_.isObject(_))

console.log("\n\n==2. identity")
console.log("Returns the same value that is used as the argument. In math: f(x) =x. This function looks useless, but is used throughtout Unserscore as a default iterator")
a={name:'annie'}
b=_.identity(a)
console.log('a=[',a,'], b=[',b,'], a===b[',a===b,']')

console.log("\n\n==3. constant")
console.log("Creates a function that returns the same value that is used as the argument of _.constant")
annie={name:'annie'}
c=_.constant(annie) // function _.constant(annie) 
b=c() // function _.constant(annie) returns object annie
console.log('annie=[',annie,'], b=[',b,'], annie===b[',annie===b,']')
console.log('_.isFunction(c)',_.isFunction(c))
console.log('_.isFunction(b)',_.isFunction(b))
console.log('_.isObject(b)',_.isObject(b))
console.log('_.isObject(a)',_.isObject(annie))

console.log("\n\n==4. times")
console.log("\n\n==4. _.times(n, iterator, [context])")
console.log("Invokes the given iterator function n times. Each invocation of iterator is called with an index argument. Produces an array of the returned values")

t1 = Date.now();
//loops = 3000000
loops = 300000
var i = 0;
f=function(n) { i++; }
_(loops).times(f);
t2 = Date.now();
console.log(t2-t1)

t1 = Date.now();
var i = 0;
for (var n = 0; n < loops; n++) { i++; }
t2 = Date.now();
console.log(t2-t1)


// http://jsperf.com/underscore-times-vs-for-loop

console.log("====end successfully=====")

// ref
// http://code.tutsplus.com/tutorials/getting-cozy-with-underscorejs--net-24581
// jQuery does a few things extremely well. DOM manipulation and animation are chief amongst those.
//
// socket io
// http://code.tutsplus.com/tutorials/connect-4-with-socketio--cms-19869

/**
sample runtime

[ubuntu@chicago::ip-10-167-6-127:~/myrepo/underscore/ex_utility]$node  util_01_noConflict.js
====begin=====


==1. noConflict
true
true


==2. identity
Returns the same value that is used as the argument. In math: f(x) =x. This function looks useless, but is used throughtout Unserscore as a default iterator
a=[ { name: 'annie' } ], b=[ { name: 'annie' } ], a===b[ true ]


==3. constant
Creates a function that returns the same value that is used as the argument of _.constant
annie=[ { name: 'annie' } ], b=[ { name: 'annie' } ], annie===b[ true ]
_.isFunction(c) true
_.isFunction(b) false
_.isObject(b) true
_.isObject(a) true


==4. times


==4. _.times(n, iterator, [context])
Invokes the given iterator function n times. Each invocation of iterator is called with an index argument. Produces an array of the returned values
39
3
====end successfully====
**/ 
