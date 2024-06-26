/* 8 way to ge undifined
    1. jodi valiaible ar value set na kori 
    2. function theke return na kore console.log() kore felle 
    3. function ar paramitar ace but pass kora nahole segula undefined dibe 
    4. function theke blank return korle 
    5. obj a je property nai take acssses korte gele
    6. obj or arry ar delete kora property ke acesss kotle gele 
    7. arry ar vitore index renge ar bahire kono value find korte gele 
    8. jodi kono variaible ar value undifined set kori 
 */

/* 
    9. kono variable ar value jodi kokhono 
       undifined / fala set korte hoi sekhtre [undifined] set na kore [null] tai better
    10, undifined or null ar type of ki hobe 
        10.1: type of undifined ====> undifined
        10.2: type of null =====> object
                kew kew bole null ar type of ata js compuny vull korece.
                programera request korle ata thik koro tara bole ata fix 
                korle hota pare je internet ar onek kicu nosto hoya jabe.
 */

// 1. jodi valiaible ar value set na kori
let x;
// console.log(x); 


// 2. function theke return na kore console.log() kore felle  
function hello (){
    let name = 'emran ' + 'khan';
}
let result = hello();
// console.log(result);


// 3. function ar paramitar ace but pass kora nahole segula undefined dibe 
function withOutPass(a, b, c, d, e){
    console.log(a, b, c, d, e,);
}
// withOutPass(3, 5, 3, )


// 4. function theke blank return korle 
function blank(a, b){
    if(a < 0 || b > 0){
        return;
    }
}
let total = blank(3, -4);
// console.log(total);


// 5.obj a je property nai take acssses korte gele
let person ={
 name : 'noman', 
 age : 34, 
}
// console.log(person.name, person.location);


// 6. obj or arry ar delete kora property ke acesss kotle gele 
delete person.age
// console.log(person, person.age);
let names = ['emran', 'baizit', 'selim']
delete names[1];
// console.log(names, names[1]);


// 7. arry ar vitore index renge ar bahire kono value find korte gele 
let nums = [33, 5, 22,  ,55]
// console.log(nums[2], nums[3], nums[4], nums[499]);


// 8. jodi kono variaible ar value undifined set kori
let string = undefined;
// console.log(string);


/*  9. kono variable ar value jodi kokhono 
       undifined / fala set korte hoi sekhtre [undifined] set na kore [null] tai better */
let commit = undefined; // it's not better
let user = {
    name: 'kiran', 
    update: null // it's a good way
}
// console.log(user.update);



/* 10, undifined or null ar type of ki hobe 
        10.1: type of undifined ====> undifined
        10.2: type of null =====> object
                kew kew bole null ar type of ata js compuny vull korece.
                programera request korle ata thik koro tara bole ata fix 
                korle hota pare je internet ar onek kicu nosto hoya jabe. */
let ridoy = {
    name : 'ridoy', 
    age : undefined
}
// console.log(typeof ridoy.age);

console.log(typeof undefined);

console.log(typeof null);