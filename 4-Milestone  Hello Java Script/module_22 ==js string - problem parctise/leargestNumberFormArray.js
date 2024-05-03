// frist way for find leargest / max number 

// -------------------max---------------------
// function leargestNumber (numbers) {
//      let max = Math.max(...numbers);
//      return max;
// }

// const hight = [ 33, 55, 39, 14, 44, 37];
// const tolestMan = leargestNumber(hight);
// console.log(tolestMan);
// ----------------------------min--------------------------------
// min :::::
// function minimumYear (years){
//     const min = Math.min(...years);
//     return min;
// }

// const years = [2011, 2001, 1900, 3393, 1901, 1023];
// const smollYear = minimumYear(years);
// console.log(smollYear);

// scond way for find leargest/max number form array using function 

function findTolestMan(hights ){
    let element1 = hights[0];
    for(let i = 0; i < hights.length; i++){
        let element = hights[i];
        if(element > element1){
            element1 = element;
        }
    }
    return element1;
}

const hights = [22, 33, 43, 53, 66, 93, 20, 10];
const tolestManAmongOfFriend = findTolestMan(hights);
// console.log(tolestManAmongOfFriend);

// -----------------min----------------------
function findShortestMan(hights ){
    let element1 = hights[0];
    for(let i = 0; i < hights.length; i++){
        let element = hights[i];
        if(element < element1){
            element1 = element;
        }
    }
    return element1;
}

const hight1 = [22, 33, 43, 53, 66, 93, 20, 10];
const shortestManAmongOfFriend = findShortestMan(hight1);
console.log(shortestManAmongOfFriend);