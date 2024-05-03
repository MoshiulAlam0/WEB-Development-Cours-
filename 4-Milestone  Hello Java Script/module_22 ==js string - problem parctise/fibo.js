// fibonacci sequence / fibo mane holo dhara ar ki 

/* 
let fibo = [1, 1, 2, 3, 5, 8, 13, 21];
fibo number ber korar niyom holo je (n) sonkhar jodi ber korte chai tobe (n-1) +(n-2).

n = (n-1) + (n-2).

fibo[2] = fibo[1] + fibo[0]
fibo[3] = fibo[2] + fibo[1];
fibo[4] = fibo[3] + fibo[2];
fibo[4] = fibo[4 - 1] + fibo[4 - 2];
fibo[n] = fibo[n -1 ] + fibo[n - 2];
fibo[i] = fibo[i - 1] + fibo[n - 2];

*/
/* 
৩ নং সংখ্যার fibo  বের করতে হলে 
আর আগের ২ তা সংখ্যা লাগবেই 
কারণ এই ২ টা  সংখ্যা যোগ করেই তো 
৩ নং সংখ্যার fibo বের হবে।
 তাই আগে ০ এবং ১ ধরে নিতে হবে 
আর পরের সংখ্যা গুলার fibo  বের করার জন্য 
*/
let fiboArray = [0, 1]; //০ এবং ১ ধরে নিতে হবে
for (let i = 2; i < 15; i++) {
    let fiboNumber = fiboArray[i - 1] + fiboArray[i -2];
    fiboArray.push(fiboNumber);
}
console.log(fiboArray);