// some math functionality 
// power (x^2) ai rokom
let power = Math.pow( 10, 2); // 10 = x: is value, 2 = y: is power 
console.log(power);

// ignor (+ or -) with Math
let num = 24;
let num2 = 50;

let defarence = num - num2;
console.log(defarence);

let defarence2 = Math.abs(num - num2);
console.log(defarence2);
if (defarence2 < 10){
    console.log('i will fight with you');
}
else{
    console.log('you will not be able to fight with me , you are a old man');
}



// doshomik sonkhake porno sonkha te convert korte 

let convert = Math.round(3.444444); // .5 ar niche hole jei porno sonkha ace sei tai dhore nei 
console.log(convert);
let convert2 = Math.round(3.5); // .5 ar uopore  hole jei purno sonkha tar uporer sonkha dhore nei 
console.log(convert2);
let convert3 = Math.ceil(3.3); // upore nite Math.ceil() use hoi
console.log(convert3);
let convert4 = Math.floor(3.7) // niche nite Math.floor() use hoi
console.log(convert4);


// random sonkha dekhate 
let random1 = Math.random();
console.log(random1);

let random2 = Math.random()* 100; // jekono sonkhar moddhe random sonkkha dekhte
console.log(random2);// 100 ar akhane jekono man 


let random3 = Math.round(Math.random()*100);  // jodi 100 ar vitore purnno sonkha pete chai 
console.log(random3);

for (let i = 0; i <= 20; i++) {
    console.log(Math.round(Math.random()*10));
    
    
}

// pi ar man jante 
// Here value of Math.PI is printed.
console.log(Math.PI);

