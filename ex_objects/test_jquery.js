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
        console.log(title);
     });
});

/***
sample runtime

[ubuntu@chicago::ip-10-167-6-127:~/myrepo/underscore/ex_objects]$node test_jquery.js 
jQuery

***/

// B. motes
//
//  jsdom, nodejs server side dom,
//  jquery needs a window which supplied by jsdom when running on server entirely
//  jquery mostly used in browser to parse dom

// A. prep
//
// sudo su - 
// npm install jquery -g
// npm install jsdom -g

// validation
// npm ls
