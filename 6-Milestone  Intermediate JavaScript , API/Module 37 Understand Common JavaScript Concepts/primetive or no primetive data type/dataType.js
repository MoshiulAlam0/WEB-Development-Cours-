/* programing lenguage 2 type hoye thake :
    1. strongly / static type  lenguage
       [ strongly type lenguage a kono valiaible diclear korte gele 
        menualy data type ke bole dite hoy.]
        ex:
            1. int a = 33;
            2. string b = 'hello bangla'
            3. bool c = true;
            4. int[]  d = [33, 45, 62, 64]
            5. obj{} e = {name : 'noman', age : 23}

    2. dinamic type lenguage
        [JS jehetu dinamic type lenguage tai valiaible diclear korte gele 
        menualy data type ke bole dite hoy na.]

        js data type 2 type ar :
            1.primetive: [aigula single valu dharon kore]
                1.int       let x = 33;
                2.string     let y = 'hey boys'
                3. boolean      let z = true;
                4. null
                5. undefined
            2.non primetive: [aigula multiple valu dharon kore]
                1. array    let p = [22, 44, 55, 'noman', true]
                2. object   let q = {name: 'emran', age : 45}

 */

// 1.primetive data type refarence dhore rakhe na 
let x = 44;
let y = x;
// console.log(x, y);
 y = 55;
// console.log(x, y); 


/*  2.non primetive data type a {arry or obj} ara refarence dhore rakhe
        i. jodi arry / obj ar specific kono kicu change / modify kori 
        tobe refance tao change/modify hobe
        ii. jodi totaly reassign / value change kori
        tode se ar reference ta ar dhore rakhbe na nijei noton value create korbe   
 */

// i. 
let a = [33, 55, 65, 6]
let b = a;
// console.log(a,b);
b[3] = 99999;
// console.log(a, b); // specific kicu change korar jonno a, b dutai change hoice 
b = [11, 32, 666, 877, ]
// console.log(a, b); // reassing korar jonno a change hoi ni , b alada akta arry banaice


// ii   [arrr or obj ar bepartao totali same] 
let g ={name: 'gio', subName: 'metree', unite: 23, class : 12}
let h = g
console.log(g, h);

h.subName = 'Math'
h.teacher = 'samiul sir'
console.log(h, g); // change hoice 

h = {name: 'history', subName: 'islamic',  unite: 30, class: 11};
h.teacher = 'habibullah sir'
console.log(g, h);