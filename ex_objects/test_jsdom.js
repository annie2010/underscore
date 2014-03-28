var jsdom = require('/usr/local/lib/node_modules/jsdom');

//var jsdom = require("./node_modules/jsdom");
var window = jsdom.jsdom().createWindow();
//var $ = require('./node_modules/jquery/dist/jquery')(window);
var $ = require('/usr/local/lib/node_modules/jquery/dist/jquery')(window);
// http://stackoverflow.com/questions/20380958/browserify-with-jquery-2-produces-jquery-requires-a-window-with-a-document

jsdom.env({  
  html: "<html><body></body></html>",
  scripts: [
    'http://code.jquery.com/jquery-1.5.min.js'
  ],
  done:  function (err, window) {
    var $ = window.jQuery;

    $('body').append("<div class='testing'>Hello World</div>");
    console.log($(".testing").text()); // outputs Hello Worl
  }
});

// npm install jsdom
// npm install jquery


// notes:
// jquery to parse dom
// node.js jquery, jsdom

// details:

// node and jquery
// https://blog.nodejitsu.com/jsdom-jquery-in-5-lines-on-nodejs/
// jsdom, a server-side implementation of the DOM apis developed by


// better example for jsdom
// http://stackoverflow.com/questions/9419242/how-do-i-return-a-value-from-a-simple-jsdom-function  

/***

sample runtime

$node test_jsdom.js 
Hello World

***/
