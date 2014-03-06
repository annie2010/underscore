var _=require('underscore')

console.log("==begin");

// where_.where(list, properties) 
// Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.
console.log("\n\nwhere");
var listOfPlays = [
  {title: "Cymbeline", author: "Shakespeare", year: 1611},
  {title: "The Tempest", author: "Shakespeare", year: 1611}, 
  {title: "Gone with the Wind", author: "M", year: 1611}] 
var a = _._.where(listOfPlays, {author: "Shakespeare", year: 1611});
console.log(a)


// findWhere_.findWhere(list, properties) 
// Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.
console.log("\n\findWhere");
var publicServicePulitzers = [
  {title: "Cymbeline", author: "Shakespeare", year: 1611},
  {title: "The Tempest", author: "Shakespeare", year: 1611}, 
  {title: "Gone with the Wind", author: "M", year: 1611},
  {year: 1918, newsroom: "The New York Times", reason: "For its public service in publishing in full so many official reports, documents and speeches by European statesmen relating to the progress and conduct of the war."}

] 
var b= _.findWhere(publicServicePulitzers, {newsroom: "The New York Times"});
console.log(b)
  
console.log("==completed ok");


/***
==begin


where
[ { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
  { title: 'The Tempest', author: 'Shakespeare', year: 1611 } ]


indWhere
{ year: 1918,
  newsroom: 'The New York Times',
  reason: 'For its public service in publishing in full so many official reports, documents and speeches by European statesmen relating to the progress and conduct of the war.' }
==completed ok
***/

