var _=require('underscore')

console.log("==begin");

var person = {};
person.friends = {
  name1: true,
  name2: false,
  name3: true,
  name4: true
};

// context
console.log("\n\n=regard context in each method for collection");
_.each(['name4', 'name2'], function(name){
  // this refers to the friends property of the person object
  console.log(name, this[name]);
}, person.friends);


// context
console.log("\n\n=disregard context in each method for collection");
_.each(['name4', 'name2'], function(name){
  console.log(name);
} );


console.log("==completed ok");


// ref
// http://stackoverflow.com/questions/4946456/underscore-js-eachlist-iterator-context-what-is-context 

