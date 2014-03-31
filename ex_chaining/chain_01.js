_=require('underscore')

console.log("=====begin=====")

console.log("\n\n===1. chain")
console.log("Returns a wrapped object. Calling methods on the obj will cont to return wrapped obj until value is used")
var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
var youngest = _.chain(stooges)
  .sortBy(function(stooge){ return stooge.age; })
  .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
  .first()
  .value(); // Extracts the value of a wrapped obj
console.log(youngest)

console.log("\n\n===2. value")
console.log("Extracts the value of a wrapped obj")
a=[1, 2, 3]
console.log(a)

b=_(a).value();
console.log(b)

console.log("=====end successfully=====")
