/* <<---------------------try catch------------------------->>
try catch হলো যে যদি কখনো মনে হয় যে কোনো কোড যা error খেতে পারে,
তাহলে কোড তকে try এর ভিতরে রাকা and এর সাথে catch/ finali সেট করা আর কি.
এখন যদি কোনো কারণে try এর ভিতরের কোড error খেয়ে যাই তবে catch আর ভিতরে যাবে,
আর যদি error না খায় তবে catch আর ভিতরে যাবে না.
[আর error থাক বা না থাক finalite যাবেই যাবে আর কি]


[note: সাধারণ error আর error এর ভিতরে রাখা error মধ্যে পার্থক্য হলো যে,
i.সাধারণ error তে যদি error খায় তবে নিচের সব কোড কে বন্ধ করে দেয় / 
নিচের কোড গুলারে আর চালাই না আর কি.
ii.try error তে যদি এরর খায় তবে নিচের সব কোড গুলারে ঠিক থাক মতো চালায় আর কি
(catch এর ভিতরে সেই এরর কে show করানো যায় আর কি). ]
*/


// genarel error-------------------- :
// const name = 'noman';
// const name0 = 'emran';
// const num = 400404;
// console.log(name);
// console.log(name0);
// console.log(num);

// console.log(name2);
// const name2 = 'baizit';

// console.log(300000);
// console.log(300000);
// console.log(300000);
// console.log(300000);
// console.log(300000);
// console.log(300000);
// console.log(300000);



// try catch ------------------------:
try {
    console.log('i am here ');
    console.log(333333);
    console.log('wellcome to try catch ');
    console.log(name2); //<<-error is here 
    const name2 = 'baizit';
    console.log(448447);

}
catch (error) {        ///catch ar paramitar hoi ai paramitar kon error holo setare dhore ar ki 
    console.log('error khaiche');
    console.log(error);
}

finally {
    console.log('finally code done');
}
console.log(300000);
console.log(300000);
console.log(300000);
console.log(300000);
console.log(300000);
console.log(300000);
console.log(300000);
console.log('last line of the code ');
