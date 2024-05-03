// for pin genarate 
function autoPinGenaret(){
    const pin = Math.round(Math.random()*10000)+''; // ('') ke jog kore lenght check korte pari 
    if(pin.length === 4){
        const field = document.getElementById('genretor-input');
        field.value = pin;
    }
    else{
        autoPinGenaret();
    }

}

// for number pad 
function setNumberByEvent(event){
        const field = document.getElementById('number-input');
        if(event.target.innerText !== ('-'||'+')){
            field.value += event.target.innerText;
        }
        else if(event.target.innerText === 'C'){
            field.value ='';
        }
        else if(event.target.innerText === '-'){
            const fieldVlaue = field.value;
            //  const newVlaue = fieldVlaue.slice(0,-1);// 1st way
            //  field.value = newVlaue;  

            //  const newVlaue = fieldVlaue.substring(0, fieldVlaue.length-1);  // 2nd way
            //  field.value = newVlaue;  
            
            const makeArray = fieldVlaue.split('');
            makeArray.pop()
            // console.log(makeArray);
            const newValue = makeArray.join('')
             field.value = newValue;  
            

        }

}