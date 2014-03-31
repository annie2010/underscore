_=require('underscore')

console.log("=====begine=====")

console.log("\n\n===1. random")
a=_.random(0,100)
console.log(a)

console.log("\n\n===2. mixin, Allows you to extned Underscore with your own util functions")
_.mixin({ cap:function(f_s){return f_s.charAt(0).toUpperCase()+f_s.substring(1).toLowerCase()} });
a='annie'
b=_(a).cap()
console.log(a,b)
a='SHANGHAI'
b=_(a).cap()
console.log(a,b)

console.log("\n\n===3. uniqueid")
a=_.uniqueId('person_')
console.log(a)
a=_.uniqueId('person_')
console.log(a)
a=_.uniqueId('person_')
console.log(a)

console.log("\n\n===4. escape")
console.log("Escapes a string for insertion into HTMP, replacing &, <, <, \" and '")
a=_.escape('Curly, Larry & Annie');
console.log(a)


console.log("\n\n=====successfully end=====")


/***
[ubuntu@chicago::ip-10-167-6-127:~/myrepo/underscore/ex_utility]$node util_02_random.js
=====begine=====


===1. random
18


===2. mixin, Allows you to extned Underscore with your own util functions
annie Annie
SHANGHAI Shanghai


===3. uniqueid
person_1
person_2
person_3


===4. escape
Escapes a string for insertion into HTMP, replacing &, <, <, " and '
Curly, Larry &amp; Annie


=====successfully end=====
***/
