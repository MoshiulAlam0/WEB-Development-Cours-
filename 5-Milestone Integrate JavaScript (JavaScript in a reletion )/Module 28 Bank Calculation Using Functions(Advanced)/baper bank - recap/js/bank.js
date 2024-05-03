/* 
step is here ------------->>-->>--->>-->>
1.  add even heandelar with the deposit buttton 
2.  get deposit input field and value of input field 
2:1.conver to parse flout 
2:2.nun check
3. get depsit main balance and convert balance 
4.calulet and  set input convert value as deposit main balance 
5. get main balnce, convert , calculet, set input value as main balance innerText 

5.clear the input field

*/

// deposit option is started form here 
// step-1
document.getElementById('deposit-button').addEventListener('click', function () {
    // step-2
    const depositField = document.getElementById('deposit-field');
    const depositFieldValue = parseFloat(depositField.value);
    // depositField.value = '';
    if (isNaN(depositFieldValue) === true) {
        alert('please provite the number');
        // depositField.value = '';
        return;
    }
    else if (depositFieldValue < 0) {
        alert('Please Provite The Posetive Number');
        // depositField.value = '';
        return;
    }

    // step-3
    const depositMainBalance = document.getElementById('deposit-balance');
    const depositBalance = parseFloat(depositMainBalance.innerText);
    // step-4
    const newDepsitBalance = depositFieldValue + depositBalance;
    depositMainBalance.innerText = newDepsitBalance;
    // step-5
    const stringMainBalance = document.getElementById('balance');
    const mainBalance = parseFloat(stringMainBalance.innerText);
    const newBalance = mainBalance + depositFieldValue;
    stringMainBalance.innerText = newBalance;
    // setp-7
    // depositField.value = '';   

});


// withdraw option is here 
/* 
1.add even heandelar with the withdraw  buttton 
2.  get withdraw  input field and value of input field 
2:1.conver to parse flout 
2:2.nun check and negative number check 
3.get main balnce, convert , calculet, set input value as main balance innerText
3:1 . condetion check low main balance  
4. get withdraw main balance and convert balance 
5.calulet and  set input convert value as withdraw main balance 

6.clear the input field 
*/

// step-1
document.getElementById('Withdraw-button').addEventListener('click', function () {
    // step-2
    const withdrawField = document.getElementById('Withdraw-field');
    const valueOfWithdrawField = parseFloat(withdrawField.value);
    withdrawField.value = '';
    if (isNaN(valueOfWithdrawField) === true) {
        alert('please provite the Number');
        return;
    }
    else if (valueOfWithdrawField < 0) {
        alert('Please Provite The Posetive Number');
        return;
    }
    // step-3
    const mainBalance = document.getElementById('balance');
    const innerTextOfMainBalance = parseFloat(mainBalance.innerText);
    // conditon check low main balance 
    if(valueOfWithdrawField > innerTextOfMainBalance){
        alert('Your Balance is low');
        return;
    }
    const newMainBalance = innerTextOfMainBalance - valueOfWithdrawField;
    mainBalance.innerText = newMainBalance;
    // step-4
    const withdrawMainBalance = document.getElementById('Withdraw-main-balance');
    const innerTextOfWithdrawMainBalance = parseFloat(withdrawMainBalance.innerText);

    // step-5 
    const newWithdrawAmount = innerTextOfWithdrawMainBalance + valueOfWithdrawField;
    withdrawMainBalance.innerText = newWithdrawAmount;
});