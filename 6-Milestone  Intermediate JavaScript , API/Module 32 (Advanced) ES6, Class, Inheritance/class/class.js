/*        --------------->>>>  class  <<<-------------------
to class ta ki asole : 
*. class ke  javaScript a bola hoy syntactic suger
1. class hocce akta templeate ar moto 
2.class theke multiple object create korte pari 
3.akta form a jemon sobkicu deoyai thake, jegula proyojo oii gulan bosaie ar ki form ta fill up 
korte pari. thik temoni class a form a releted/similar subject gulo sob thekei jei gulan proyojoi 
oii gula menualy bosaie multiple object create kora jai. 
*/

class student {
    name;
    depertment = 'Web  Development';
    teacher = 'junkar mahmud';
    bestFiend;
    nowLearn = 'ES6 Consept';
    constructor(userName, userBestu){
        this.name = userName;
        this.bestFiend = userBestu;
    }
    stad0yTime(time) { // classs ar vitore ai function gulare bola hoi [methord]
        console.log(`I stady at ${time}`);
    }
    hobby(name){
        console.log(`my best hobby is ${name}`);
    }
}

const noman = new student('noman', 'emran');
const selim = new student('selim', 'shiful');
const baizit = new student('baizit', 'noman');
const shipon = new student('shipon', 'unknown');
// noman.hobby('reade books');
// noman.stad0yTime(`${9.00} pm`);
console.log(noman);
console.log(selim);
console.log(baizit);
console.log(shipon);

