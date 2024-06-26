/* Block Scope ta ki ?
    simple vashai bolle {} secound bracket ar vitore poratai akta block scope .
    seta hote pare function, loop , if else etc;

    let / const :
        1.let / const diye jodi kono variaible diclear kora hoi seta ke block scope ar 
          vitorei acsess korte parbo ar bahire parbona.

    var :
        1.  var nijeke hoisting kore fale. ay karone ai jonno block scope ar baire theke 
            acsess kora jai. 
        2. but main block scope ar baire theke acsess korte parbo na .
        
 */


function hello (a, b){
    let result  = a + b ;
      if (a > b) {
         const  total = a - b;
      }else {
        var multi  = a * b;
      }
      console.log(multi);
    //   console.log(total);
}
// console.log(multi);
hello(1, 3);

// console.log(result);
