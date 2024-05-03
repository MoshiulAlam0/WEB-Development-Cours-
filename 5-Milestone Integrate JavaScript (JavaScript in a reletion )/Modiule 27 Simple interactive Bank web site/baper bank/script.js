const deposideInput = document.getElementById('container-input1'); // input feald of deposide-container 
const deposideButton = document.getElementById('container-button1'); // Deposide button of deposide-container 
const withdrowInput = document.getElementById('container-input2'); // inpuut feald of withdrow-container 
const withdrowButton = document.getElementById('container-button2') // withdrow button of withdrow-container 


// deposide option is started form here -----------------
// deposide optioon 
let inputValue = 0; //value of  deposide-input button 
// input event of deposide 
deposideInput.addEventListener('keyup', function value(event) {
    // step 1
    const eventValue = event.target.value;
    // console.log(eventValue);
    if (eventValue !== '') {
        const convertEventValue = parseInt(eventValue);
        inputValue = convertEventValue;
    }
    else{
        inputValue = 0;
    }
});

// button event of deposide
deposideButton.addEventListener('click', function () {
    // step2
    const deposideMoney = document.getElementById('container1-money'); // Money text of deposid money container 
    let convertDeposideMoney = parseInt(deposideMoney.innerText);
    let addDeposideMoney = convertDeposideMoney += inputValue;
    deposideMoney.innerText = addDeposideMoney;
    

    // step3
    const mainBalance = document.getElementById('container3-money'); //Money text of  main balance container 
    let balance = parseInt(mainBalance.innerText);
    let addValue = balance += inputValue;
    mainBalance.innerText = addValue; 

})
// deposide option end ------------------------------------


// with drow option is started form here --------------------------
let valueOfWithdrowInput = 0;
// input event of deposide 
withdrowInput.addEventListener('keyup', function(event){
    // step 1
    if(event.target.value !== ''){
        const convertInt = parseInt(event.target.value);
        valueOfWithdrowInput =convertInt;
    }
    else{
        valueOfWithdrowInput = 0;
    }
    // console.log(valueOfWithdrowInput);
})

// button event of deposide
// step 2
withdrowButton.addEventListener('click', function(){
    const mainBalance = document.getElementById('container3-money');
    let convetIntMainBalance = parseInt(mainBalance.innerText);
    if(convetIntMainBalance >= valueOfWithdrowInput){
    let subtractFormMainBalance = convetIntMainBalance - valueOfWithdrowInput;
    mainBalance.innerText = subtractFormMainBalance;

    // step 3
    const moneyOfWithdrow = document.getElementById('container2-money');
    let moneyOfWithdrowConvertInt = parseInt(moneyOfWithdrow.innerText);
    let addWithdrowInput = moneyOfWithdrowConvertInt += valueOfWithdrowInput;
    moneyOfWithdrow.innerText = addWithdrowInput;
    
}
else{
    alert('you have'+convetIntMainBalance+' tk'+ '.   '+'please type the cuorect money')
    withdrowInput.value ='';
    

    }
})

// baper bank has been complited but there are some buge/problem in here 