/*Hoisting ta ki?
    hoisting ta hole kono akta kicuke opore niye jaoya .
        1. var jodi block scope baire declear kori globaly hoisting kore fale 
        2. function tao same nije ke golobali hoisting kore fele 
           code ar jeno jaiga theke acsses korte parbo.
        3. but jodi function ke function ke jodi expration a write kora hoi tobe 
            se ar hoisting hoye jabe na.
        
 */
hoist();
// expration(); //hoisting kore na 

for (var index = 0; index < 3; index++) {
    console.log(index);  
}
console.log('outside form the block scope . var allways hoisting kore fele', index);


function hoist (){
    console.log('function hoisting', 5 + 5);
}

let expration = function (){
    console.log( 'expration function hoisting hoi na ' , 5+ 10);
}
expration()