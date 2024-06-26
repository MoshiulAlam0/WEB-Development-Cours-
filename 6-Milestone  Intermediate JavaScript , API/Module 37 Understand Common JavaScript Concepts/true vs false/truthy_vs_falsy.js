/*  ============= true VS false ====================
    ## true / truthy: {note: je value gula true hobe tader ke bola hoi [truthy]} 
        0. variaible value jodi (true)
        1. any number(+ve, -ve) acept (0).
        2. any string and (' ') acept ('') <emty> 
        3. ('false'), ('undifined'), ('null'), ('0')
        4. arry and obj true return korbe, jodi <emty> [], {}  o hoi


    ## false / falsy : {note: je value gula false hobe tader ke bola hoi [falsy]}
        0. variaible value jodi (false)
        1. (0)
        2. ('') <emty>
        3. undified
        4. null 
 */
    let x = [];

    if(x){  /// (x === true) shortHeand ====> (x)
        console.log(`value of ${x} is truty`);
    }else{
        console.log(`value of ${x} is falsy`);    
    }

// -======================short heand ==============

//   ++++++++++++++++++++++++ [! vs !!] ++++++++++++++++++++++++++++

/* noto: ! symble ta condition ta ke ultaidey:
        1.if(y === true) ----->//ar mane y jodi true hoi (full form) 
        
        2.if(y)  ---->//ar mane y jodi true hoi (short form)
        
        3.if(!y) ------>// ! (bang) use korle condition ultai debe, ar mane y jodi false hoi

        4.if(!!y)  ----->// !! (bang) use korle condition 2 bar ultai debe,
                            1st ! ar jonno false [jeta no: 3 a dekhlam],
                            2nd ! diye jodi abar ultai deoya hoi false theke true hoye jabe.
                            total hisab holo je !! use korle condition ta hobe y jodi true hoi.
 */

// for get falsy value:
const y = 0;
if(!y){    
    console.log('value is falsy');
} 


// for get truthy value :
let z = {};
if(!!z){
    console.log('value is truthy');

}
