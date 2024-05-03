// frist way
function traficActivities(color){
    var notic = '';
    if(color == 'red'){
        // console.log('now denger , you stop');
        notic = 'now denger,stop. you wait for green signal';

    }
    else if (color === 'yellow'){
        notic = 'you should stop now'
    }
    else if ( color === 'green'){
        notic = 'now you should cross the road ';
    }
    else {
        notic = 'it is not a signal';
    }
    return notic;
}

var signal = 'red';

var noticForYou = traficActivities(signal);
console.log(noticForYou);

// second way 
var signal1 = 'parpol';
switch (signal1){
    case('red'):
    console.log('now denger,stop. you wait for green signal');
    break;

    case('yellow'):
    console.log('you should stop now ');
    break;

    case('green'):
    console.log('you should cross the road now ');
    break;

    default:
    console.log('this color is not a signal');
    
    
}
