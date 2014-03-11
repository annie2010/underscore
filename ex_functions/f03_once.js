_=require('underscore')

console.log("====begin====")

console.log("\n===Part 1: once")
// once, _.once(function)
// creates a version of the function that can only be called one time
function createApp(){ console.log("create an app") }
init=_.once(createApp)
init()
init()
init()

console.log("\n===Part 2: after")
// after, _.after(count, function)
// creates a version of the function that will only be run after first being called count times
notes=['hello annie', 'hello wei']
function render(){console.log('render is called')}
var renderNotes = _.after(notes.length, render);
// _.each(notes, function(note) { note.asyncSave({ success: renderNotes })});
// to figure out

console.log("\n===Part 3: now")
console.log(_.now())

console.log("\n===Part 4: wrap")
// wrap, _.wrap(function, wrapper)
// wraps the first function inside of the wrapper function
hello = function(name){return "hello " + name};
hello=_.wrap(hello, function(func){ // hello=func
  return "before, " + func("moe") + ":, after"
})
a=hello()
console.log(a)

console.log("\n===Part 5: compose")
// compose, _.compose(*functions)
// returns the composition of a list of functions
greet = function(name){return "hi " + name;}
exclaim=function(stmt){return stmt.toUpperCase() + "!"}
var welcome=_.compose(greet, exclaim)
a=welcome('annie')
console.log(a)

console.log("====end successfully====")

/*** sample runtime

====begin====

===Part 1: once
create an app

===Part 2: after

===Part 3: now
1394556990101

===Part 4: wrap
before, hello moe:, after

===Part 5: compose
hi ANNIE!
====end successfully====

***/
