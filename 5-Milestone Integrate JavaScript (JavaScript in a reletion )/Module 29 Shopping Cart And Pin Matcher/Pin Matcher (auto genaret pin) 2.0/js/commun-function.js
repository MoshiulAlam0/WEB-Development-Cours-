// for  Auto genaret pin 
function autoPinGenaretor (){
    const pinFlout = Math.random()*10000;
    const pin = Math.round(pinFlout)+'';
    
    if(pin.length === 4){
        const field = document.getElementById('genretor-input');
        field.value = pin;
    }
    else{
        autoPinGenaretor();
    }  
}

// for number set inside the number input 
function setNumber(event){
    const charecter = event.target.innerText;
    const field = document.getElementById('number-input');
    if(isNaN(charecter)){
        if(charecter === 'C'){
            field.value = '';
        }
        else if(charecter === '-'){
            const value = field.value;
            const newFieldVlaue = value.substring(0, value.length-1);
            field.value = newFieldVlaue;
        }
    }
    else{
        field.value += charecter;
    }
}