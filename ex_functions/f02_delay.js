_=require('underscore')

console.log("======begin=====")

console.log("\n===Part 1, delay")
// delay, _.delay(function, wait, *arguments)
// Much like setTimeout, invokes function after wait milliseconds
log=_.bind(console.log, console)
_.delay(log,1000, 'logged later') // appears after 1 sec
console.log('logged now') 

console.log("\n===Part 2, defer")
// defer, _.defer(function, *arguments)
// Defers invoking the function until the current call stak has cleared
// Useful for performing expensive computations or HTML renering in chunks
a=_.defer(function(){console.log('deferred');}) // returns from the function before the console.log runs
console.log("returned immediately",a)
b=2
console.log("returned immediately",b)

console.log("\n===Part 3, throttle for GUI")
// throttle, _.throttle(function, wait, [options])
// creates and returns a new, throttle version of the passed function
a=_.throttle(console.log("throttle hello"),100);
console.log(a)

console.log("\n===Part 4, debounce for GUI")
// debounce, _.debounce(function, wait, [immediate])
// Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked
a=_.debounce(console.log("debounce hello"),100);
console.log(a)


console.log("======end successfully=====")

/**** sample runtime

======begin=====

===Part 1, delay
logged now

===Part 2, defer
returned immediately { _idleTimeout: 1,
  _idlePrev: 
   { _idleNext: [Circular],
     _idlePrev: [Circular],
     msecs: 1,
     ontimeout: [Function: listOnTimeout] },
  _idleNext: 
   { _idleNext: [Circular],
     _idlePrev: [Circular],
     msecs: 1,
     ontimeout: [Function: listOnTimeout] },
  _idleStart: 1394554675325,
  _onTimeout: [Function],
  _repeat: false }
returned immediately 2

===Part 3, throttle for GUI
throttle hello
[Function]

===Part 4, debounce for GUI
debounce hello
[Function]
======end successfully=====
deferred
logged later

***/
