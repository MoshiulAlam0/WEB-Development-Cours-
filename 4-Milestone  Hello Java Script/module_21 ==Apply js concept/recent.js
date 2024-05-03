// all object Informetion
let myFamily = {
    house: 3,
fother: 1, 
mother: 2,
brother: 2,
dada: 1, 
granMother: 1
};
// find object values by the poparty name 
// console.log(myFamily['mother']);
let objectPoparty = 'dada';
// console.log(myFamily[objectPoparty]);

// console.log(myFamily.granMother);

// poparty value set
let setValue = myFamily['house'] = 33
// console.log(myFamily);
myFamily.granMother = 3;
// console.log(myFamily);

// add poparty in object 
myFamily['haveCar'] = false;
console.log(myFamily);

// show up all poparty together
let allPoparty = Object.keys(myFamily); //aguloke amra acces korte pari ak ki 
console.log(allPoparty);
let allValues = Object.values(myFamily)//aguloke amra acces korte pari ak. ki if you to need
console.log(allValues);


// all array Information 
let name = ['noman', 'emran', 'faither',]



