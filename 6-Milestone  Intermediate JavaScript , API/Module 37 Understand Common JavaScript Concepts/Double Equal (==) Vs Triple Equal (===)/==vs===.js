/*   ==================  double equal == vs === triple equla ===============
    1. double equal dui tar value tare chack kore 
            1. true  mane 1 dhore ney, false mane 0 dhore ney
            2. string and number a value ta same theke tobe se mone kore aita same (se type ignore kore)
            3. truthy kono value thakle se setake 1 dhorbe and falsy kono value thekle setake 0 dhorbe
                abar string a jonno alada '' / ' ' mane  0 dhorbe 
                such as : 
                    undifined = 0, null = 0 etc
                    

            
    2. triple equal dui tar value and type chack kore     
            1. allways triple equal use kora e better       

    ai comparision ke bola hoi 
    1. type coercion
    2. type conversion
    3. type casting
*/


let x = ' ';
let y = 0;

if(x == y){
    console.log('values are equal');
}else{
    console.log('values are not equal');
}

