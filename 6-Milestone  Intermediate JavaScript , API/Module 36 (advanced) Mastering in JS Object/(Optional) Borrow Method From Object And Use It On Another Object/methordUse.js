/* 
akta object ar method ke / funtion ke onno akta obj ar kiabe use korbo :
ar 3ta way hote para 
1. methord ke [call] kore 
2. methord ke [apply ] kore
3. methord ke [bind] kore    // bind nijei akta function banai fele arki , jokhon icca seta ke use kora jai
*/
const noman = {
    name : 'noman',
    age: '33',
    isMerried : false,
    monney: 5000,
    exam: function(){  //it's a methord
        return `${this.name} will take the exam.`
    },
    treat : function(monyforTreat, tips = 0 ){  // methord peramitars
    const remaining =  this.monney = this.monney - (monyforTreat + tips); // set property value inside the methord
    return remaining;
    }

}

let emran = {
    name: 'emran',
    monney: 6000,
}
// 1.method ke [call] kore:
let emranRemainingMonney = noman.treat.call(emran, 550, 50);
console.log(emranRemainingMonney);

// 2.methord ke [apply ] kore:
let emranRemainingMonney2 = noman.treat.apply(emran,[150, 50]);
console.log(emranRemainingMonney2);


// 3.methord ke [bind] kore
let emranRemainingMonney3 = noman.treat.bind(emran);
 let result = emranRemainingMonney3(500, 100)
 console.log(result);
