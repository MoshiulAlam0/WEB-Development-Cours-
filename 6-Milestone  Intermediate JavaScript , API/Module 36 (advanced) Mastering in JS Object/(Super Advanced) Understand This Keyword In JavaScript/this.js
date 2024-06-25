    //   ----------------------------consept of this key word ----------------------------

/* 
    // 1. window ta ki ?
    ata holo total javascript arki. ar mane ata akta object akhan theke 
    document , console.log() etc amra use kori 
    jehetu window ta alda kore lekha lage na ti amra 
    direct a gula use kori.
 */
// ex:
// console.log(this);





// Object methods  function regular vs arrow ar sathe [this] ar sathe behavior --->
/* 
1.regular function:
a [this] log korle se nijekey provite kore .
2. arrow function:
arrow te [this] log korle se nijeke provite na kore akbare sob level take sariye 
direct window take log kore fele .
 */
const user ={
    name :'noman',
    examRegular: function regular(){
        console.log(this);
        console.log(`${this.name} will take IELTS exam.`);
    },
    examArrow:() =>{
        console.log(this);
        console.log(`${this.name} will take IELTS exam.`); // this take use korte parbo na 
    }
    
}
user.examRegular(); 

user.examArrow();





//    event heandelar ar khetre [this] ar behavior:-------> 

 /* 
 1.on[event] form the html file : 
HTML file theke jodi amara kono event heandelar use kori 
 hok seta onclick , onblur etc , event a use kora function 
 regular / arrow jai hok na kno ar vitor theke console.log (this )
 korle ata out put dibe [window] 
 */
// regular function 
function btn1(){
console.log(this);
}
// arrow function 
const btn2 = () =>{
console.log(this);
}



/* 
2. addEventLestaner: 
rgular function a console.log(this) korle nijekey log korbe 
arrow function a console.log(this ) korle window ke log korbe
*/
// regular function
const btn3 = document.getElementById('btn3')
btn3.addEventListener('click', function(){
    console.log(this);
})
// arrow function
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', ()=>{
    console.log(this);
})
