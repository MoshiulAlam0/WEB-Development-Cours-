// array ba string ar vitore kono values ace ki na ta chack korar jonno 'includes' use hoi 

//with array
var names = [ 'noman', 'emran', 'osama', 'emran vai'];
var chack = names.includes('noman', 'osama');
var chack2 = names.includes('shipon');
console.log(chack);
console.log(chack2);
// with string
var nemes1 = 'i will go to makka ';
var chack3 = nemes1.includes('go');
var chack4 = nemes1.includes('Go');
console.log(chack3);
console.log(chack4);