/* what is the closer ?
    akta functio ar vitor theke jokhon onno akta function ke 
    main functioner variable / glober variable ke  retun kora hoi 
    tokhon oi ta ke closer bole ;
 */


function main(){ /// akhane jodi amra main function ke call dei tobe se return hisbe  
    let x = 0;
    return function(){ /// ai function take pabe 
        x++; /// ai function main function ar x variaible take acsses kortece 
        console.log(x); /// abai ai function ar return hisabe x ar value pabo 
    }
}
//note: {ai main ke amra jotobar call korbo pottek barer jonno akta kore noton function return korbe}
let closer1 = main(); // main ke call deoyar por akta function ke pabo 
// console.log(closer1);

console.log('closer1 start');
closer1() // ata jehetu akta function tai atake function ar moto call dite hobe 
closer1()
closer1()
closer1()
closer1()

console.log('closer2 start');
let closer2 = main()   
closer2()
closer2()
closer2()
closer2()

console.log('closer3 start');
let closer3 = main()   
closer3()
closer3()
closer3()
closer3()

console.log('rendom call');
closer1()
closer3()
closer2()