/* 
parChair = 3 cft
parTaible = 10 cft
parBed = 50 ctf
*/
function woodCalculator(chairQuntity, taibleQuntity, bedQuntity) {
    const parChair = 3;
    const parTaible = 10;
    const parBed = 50;

    const chairWood = parChair * chairQuntity;
    const taibleWood = parTaible * taibleQuntity;
    const bedWood = parBed * bedQuntity;

    const totalWood = chairWood + taibleWood + bedWood;


    return {
        totalchairwood: chairWood, 
        totaltaiblewood: taibleWood,
        totalbedwood: bedWood, 
        totalwood: totalWood
    }
    
}

let totalWood = woodCalculator(3, 4, 2);
console.log(totalWood);