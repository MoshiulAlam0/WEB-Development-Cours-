/* 
Object ar Vitore kono property jodi Function hoi oii take Mathord bola hoi 
1. Mathord ar vitore kono property ke acesss korte this.property likhte hobe 
2. Mathord ar vitore Mathordkeo call kora jai (this.Mathord)
3. mathord ar vitor theke kono property value o set kora jai 

*/

const student = {
    name : 'noman',
    age: '33',
    isMerried : false,
    monney: 5000,
    exam: function(){  //it's a methord
        return `${this.name} will take the exam.`
    },
    treat : function(monyforTreat, tips = 0 ){  // methord peramitars
    const whoseExam = this.exam(); // call method
    console.log(whoseExam);
    const remaining =  this.monney = this.monney - (monyforTreat + tips); // set property value inside the methord
    return remaining;
    }

}

// const examOfNoman = student.exam();
// console.log(examOfNoman);
const remainingMonney = student.treat(2000, 20);
// console.log(remainingMonney);

const pratyDey = student.treat(500, 20)
// console.log(pratyDey);
// console.log(student.monney);