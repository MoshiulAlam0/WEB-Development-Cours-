/* 
Extends Class:
1.akta class ar commoun jei jei bishoi ace oi gula diye akta class banaye 
oii take abar main class a extends kore use kora jai ar ki. 
2.ar abar supar name ar akta jinis ace oii ta diye constructor ar peramitar gulare excess kora 
jai ar ki.
*/

// class amimels {
//     name;
//     legs;
//     color;
//     sound;
//     foods;
//     home = 'ground';
//     constructor(aminelName, aniLegs, anicolor, anisound, anifoods){
//         this.name = aminelName;
//         this.legs = aniLegs;
//         this.color = anicolor;
//         this.sound = anisound;
//         this.foods = anifoods;
//     }
// }


 class TeamMember {
    name;
    depertment;
    id;
    locetionl;
    constructor(name, depertment, id, location){
        this.name = name;
        this.depertment = depertment;
        this.id = id;
        this.locetionl = location;
    }
    feedback(){
        console.log(`Thanks for your feedback ${this.name}`);
    }
 }


class Student extends TeamMember {
friend = 'noman';
constructor(name, depertment, id, location){
    super(name, depertment, id, location)
}
}



class Developer extends TeamMember {
    develop = `app develoment, web development`;
    constructor(name, depertment, id, location){
        super(name, depertment, id, location)
    }
    project(prjName){
        console.log(`now runnig project ${prjName}`);
    }
}
class Instrutor extends TeamMember {
    instruct = `teaching korano  `;
    constructor(name, depertment, id, location){
        super (name, depertment, id, location);
    }
    project(prjName){
        console.log(`now runnig project ${prjName}`);
    }
}
class Ceo extends TeamMember {
    works = `dekha sona kora `;
    constructor(name, depertment, id, location){
        super (name, depertment, id, location);
    }
    project(prjName){
        console.log(`now runnig project ${prjName}`);
    }
}
class Menegar extends TeamMember {
    menegpent = `all caluletion`;
    constructor(name, depertment, id, location){
        super (name, depertment, id, location);
    }
}

const noman = new Student('noman', 'development', 182, 'bogura');
// console.log(noman);
const baizit = new Instrutor('baizt', 'Instructor', 162, 'bogura');
console.log(baizit);
const emran = new Ceo('emran', 'ceo', 14, 'bogura');
console.log(emran);
const selim = new Menegar('selim', 'manegar', 139, 'avrod');
console.log(selim);