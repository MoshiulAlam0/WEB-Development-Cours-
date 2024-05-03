// game of case 
let userName = 'noman';
let userInput = 'nOmaN';
console.log(userInput.toLocaleLowerCase());
console.log(userInput.toUpperCase());
console.log(userInput.toLocaleLowerCase());

if(userName === userInput){
    console.log('valide');
}
else{
    console.log('invalide');
}

if (userName.toLowerCase() === userInput.toLowerCase()){
    console.log('this is valide ');

}
else{
    console.log('this is invalide');
}