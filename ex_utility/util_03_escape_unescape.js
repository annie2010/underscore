_=require('underscore')

console.log("=====begine=====")

console.log("\n\n===1. escape")
console.log("Escapes a string for insertion into HTMP, replacing &, <, <, \" and '")
a=_.escape('Curly, Larry & Annie');
console.log(a)

console.log("\n\n===2. unescape")
a=_.unescape('Curly, Larry &amp; Annie');
console.log(a)


console.log("\n\n===3. result")
a={name: 'annie', city: function(){return 'shanghai';},};
b=_.result(a,'name')
console.log(b)
c=_.result(a,'city')
console.log(c)

console.log("\n\n===4. template")
console.log("Compiles JS templates into functions that can be evaluated for rendering")

a=_.template("hello: <%= name %>")
b=a({name: 'annie'})
console.log(b)


console.log("\n\n=====successfully end=====")

/***
[ubuntu@chicago::ip-10-167-6-127:~/myrepo/underscore/ex_utility]$node util_03_escape_unescape.js
=====begine=====


===1. escape
Escapes a string for insertion into HTMP, replacing &, <, <, " and '
Curly, Larry &amp; Annie


===2. unescape
Curly, Larry & Annie


===3. result
annie
shanghai


===4. template
Compiles JS templates into functions that can be evaluated for rendering
hello: annie


=====successfully end=====
***/
