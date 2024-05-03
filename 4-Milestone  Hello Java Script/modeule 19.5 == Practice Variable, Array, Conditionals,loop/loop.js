/*
------------
LOOP
------------
1.you will display "ajke amar mon valo ace alhamdulillah " for 39 time 
2.you will dispay numbers between 58 to 98
3.show all even number form 412 to 456
4.show all odd numbers 581 to 623
5.you will try to know difference between while loop and for loop 
6.declare an array which have you learnt last few days [example: HTML, CSS, BOOSTRAP, JS, ETC]
7.creat an array array that mobails brand have you used last 1 years by the while loop
8.you will run a loop form 30 to 86 . this loop will stop if the values get hight than 44
9.diclare an array for some books prices,you will run a loop ,
you will display book price, those are price lower then 200 


*/

// problem solve ::::::::::::
// 1.problem
// var num = 1;
// while (num <= 39) {
//     console.log(num, ' ajke amar mon valo ace alhamdulillah ');
//     num++;
// }

// for (var i = 1; i <= 39; i++) {
//     console.log(num, '.ajke amar mon valo ace alhamdulillah ');
// }

///2.problem
// var num = 58;
// while (num <= 98) {
//     console.log(num);
//     num++;
// }

// for(var i = 58; i < 99; i++){
//     console.log(i);
// }

// // 3.porblem
// var num = 412;
// while (num <= 456) {
//     console.log(num);
//     num +=2; 
// }
// // 4.problem
// console.log("forloop");
// for(var i = 481; i <= 613; i+=2 ){
//     console.log(i);
// }

// //6.problem
// var iLearnt = ['HTML', 'CSS', 'BOOTSTAP', 'JS'];
// for(var i = 0; i < iLearnt.length; i++ ){
//     console.log(iLearnt[i]);
// }

// //7.problem 
// var usedBreand = ['symphony', 'itel', 'bontel'];
// var num = 0;
// while (num < usedBreand.length) {
//     console.log(usedBreand[num]);
//     num++;
// }

// // 8.problem 
// for(var i = 30; i <= 86; i++){
//     if (i > 44) {
//         break;
//     }
//     console.log(i);
// }

//9.problem 
var bookPrice = [100, 40, 300, 200, 140, 130];
for(var i = 0; i < bookPrice.length; i++){
    if (bookPrice[i] > 199) {
        continue;
    }
    console.log(bookPrice[i]);
}