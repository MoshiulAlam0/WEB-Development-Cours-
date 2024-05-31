let buttol = {
    color: 'red',
    price: 300,
    date: '22/03/2024',
    maleOrFemale: 'male'
};
for(key in buttol){
    // console.log(buttol[key]);
}



// for chalieo amara korte pari aktu advance vabe 

for(const[key, value] of Object.entries(buttol)){
    // console.log(key, value);
}

// explane:
const result = Object.entries(buttol);
// console.log(result);
for(const property of result){
    console.log(property);
    let [no1, no2] = property;   /// akhane destructuring kora hoyece 
    console.log(no1, no2);
}

