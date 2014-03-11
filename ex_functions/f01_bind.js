_=require('underscore')

console.log("=====begin=====")

console.log("\n\n===Part 1, bind")
// bind, _.bind(function, object, *arguments)
// Bind a function to an object that whenever the function is called
func = function(f_greeting){return f_greeting +': ' + this.name}
func=_.bind(func, {name:'moe'}, 'hi') // func, obj, *arg
a=func()
console.log(a)

console.log("\n\n===Part 2, bindAll")
// bindAll, _.bindAll(object, *methodNames)
// Binds a number of methods on the object
buttonView={
  label: 'underscore',
  onClick: function(){console.log('CALLED clicked: ' + this.label)},
  onHover: function(){console.log('CALLED hovering: ' + this.label)}
}
a=_.bindAll(buttonView, 'onClick', 'onHover')
console.log("_.bindAll :: ",a)

b=a.label
console.log("\na.label :: ",b)

c=a.onClick()
d=a.onHover()

console.log("\n\n===Part 3, partial")
// partial, _.partial(fnction, *arguments)
// Partially apply a function by filling in any number of its arguments
add = function(a,b){return a+b}
add5=_.partial(add,5)
a=add5(10)
console.log("add5(10) :: ",a)


console.log("\n\n===Part 4, memoize")
// memoize, _.memoize(function, [hashFunction])
// Memoizes a given function by caching the computed ressult
f = _.memoize(function(n){
  return n < 2 ? n: f(n-1) + f(n-2)
});
a=f(1)
console.log("f(1) :: ",a)
a=f(2)
console.log("f(2) :: ",a)
a=f(3)
console.log("f(3) :: ",a)
a=f(4)
console.log("f(4) :: ",a)
a=f(5)
console.log("f(5) :: ",a)

console.log("=====end successfully=====")


/*** sample runtime

=====begin=====


===Part 1, bind
hi: moe


===Part 2, bindAll
_.bindAll ::  { label: 'underscore', onClick: [Function], onHover: [Function] }

a.label ::  underscore
CALLED clicked: underscore
CALLED hovering: underscore


===Part 3, partial
add5(10) ::  15


===Part 4, memoize
f(1) ::  1
f(2) ::  1
f(3) ::  2
f(4) ::  3
f(5) ::  5
=====end successfully=====

***/
