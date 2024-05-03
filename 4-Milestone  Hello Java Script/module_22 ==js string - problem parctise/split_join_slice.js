let text ='amder coto nodi chole bake bake , chik chik kore bali kotha nai kada';
// :::split:::
// split holo string ke alada alada onkshe part a vag kora 
let sentenceParts = text.split(',');
console.log(sentenceParts);
let singulWords = text.split(' ')
console.log(singulWords);
let singulChars = text.split('');
console.log(singulChars);

// :::join:::
// join alda alda string ke akta kicu diye join kora ar ki 
let text2 = [
'amder coto nodi chole bake bake ',
' chik chik kore ba',
' chik chik kore bali kotha nai kada',
' chik chik kore baa'
];
let join = text2.join(' = ');
console.log(join);

//::: slice 
// slice kono string ke kete alda kora 
let text3 = 'andor kelir bandar ban';
let tukra = text3.slice(0, 7);
console.log(tukra);

// ::: subsstring :::
// slice and substring pray kaca kaci ar ki 
let tukra2 = text3.substring(0, 9);
console.log(tukra2);