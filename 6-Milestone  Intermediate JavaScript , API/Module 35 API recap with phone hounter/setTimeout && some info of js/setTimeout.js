 /* js ar sokol code gula mota moti dui wayte chole arki  
 1.synchronous : pralaly aita cholbe, aita aku kicu somi por cholbe, aije akek ta akek time a run kora 
 ai tai holo synchronous 
 2. asynchronous : one by one / aktar pore akta kora / chalano / run {kono time ar proyojon nai }

 
 */
/* 
 setTimeout() function holo kono kicuke akta niddisto somoi porjoto wait koranor jonno use kora hoi 
 ar paramitar dui ta ar ki :
1. function
2. time (mili secound) */
console.log(1);
setTimeout(() =>{
    console.log(2);
}, 4000)
console.log(3);
console.log(4);