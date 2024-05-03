/* 
Reduce :
1. ati sompornno array ke return kore na 
2. sobgula element a loop chaliye kicu akta kore total akta element ke return kore 
3. ar peramitar holo duita (.reduce(accumulatorFunction, initial value);).
4. accumulatorFunction ar abar peramitar dui ta 
        1.element ar sathe calcultioon kore jei result thakbe sei ta,
        2.ar element gulat jonno akta paramitar 
5.initial value thakbe 0, 0 thekei calculation ta shuru hobe ar ki 
*/

const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((calculation, element) => calculation + element , 0 );
const sum = numbers.reduce((calculation, element) =>{
        console.log(calculation, element);
        return calculation + element 
        }, 0 );
console.log(sum);