const scores = [33, 53, 53, 64, 77, 77, 39, 92, 82, 92];
console.log(scores.slice(1, 7));


const cut = scores.splice(7, 9)
console.log(cut);
console.log(scores);



// cut and add 
// remove element and inset the new element in that place 

const scores2 = [ 22, 44, 24, 83, 90, 91, 92, 93, 83, 70, 80, 93];
const cutAdd = scores2.splice(3, 7, 44, 66, 88, 83, 83, 92, 82, 92, 55, 66, 7, 22, 98);
console.log(cutAdd);
console.log(scores2);