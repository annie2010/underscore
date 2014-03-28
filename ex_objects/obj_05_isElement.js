_=require('underscore')

console.log('=====begin=====')

console.log('\n\n===1. isElement, _.isElement(obj), Returns true if obj is a DOM ele')

var http = require('http');
var jsdom = require('/usr/local/lib/node_modules/jsdom');
var window = jsdom.jsdom().createWindow();
var $ = require('/usr/local/lib/node_modules/jquery/dist/jquery')(window);
var options = {
    host: 'jquery.com',
    port: 80,
    path: '/'
};
var html = '';
http.get(options, function(res) {
    res.on('data', function(data) {
        // collect the data chunks to the variable named "html"
        html += data;
    }).on('end', function() {
        // the whole of webpage data has been collected. parsing time!
        var title = $(html).find('title').text();
        console.log('title',title);
        var body = $(html).find('body').text();
        //console.log('body',body);
        a=$(html)
        //b=_.isElemet(a('body')[0]) // <-------- goal
        //console.log($)
        //console.log(a)
        //console.log(a['0'])
        //console.log(a['0']['_ownerDocument'])
        //b=a['0']['_ownerDocument']['_parentWindow']['jQuery']
        b=a['0']['_ownerDocument']['_parentWindow']['document'] // <---- b obj
        //console.log(b)
        // _.isElement(jQuery('body')[0]); // true
     });
});

// TBD
//a=_.isElemet(jQuery('body'[0]))
//console.log(a)

console.log('\n\n===2. isArray')
a=[1,2,3];
b=_.isArray(a);
console.log(a,b)

a=(function(){ return _.isArray(arguments); })();
b=_.isArray(a);
console.log(a,b)

a=function(){ return _.isArray(arguments); };
b=_.isArray(a);
console.log(a,b)

console.log('\n\n===3. isObject')
a=[1,2,3];
b=_.isObject(a);
console.log(a,b)

console.log('\n\n===4. isArguemnts')
a=function(){ return _.isArguments(arguments); }
b=(1,2,3)
c=(a)(b);
console.log(a,b,c)


a=[1,2,3]
b=_.isArguments(a);
console.log(a,b)

console.log('\n\n===5. isFunction')
a=function(){ return _.isArray(arguments); };
b=_.isFunction(a);
console.log(a,b)

console.log('\n\n=====end successfully=====')
