
// ////////////////////////////////////deposit option ////////////////////////////////////

// step 1: add click event heandelara inside the Deposit-button
document.getElementById('deposit-button').addEventListener('click', function () {
    // step 2 : get value inside the deposit input field 
    const depositInputField = document.getElementById('deposit-input-field');
    const valueOfDepositInputFieldString = depositInputField.value;
    if (valueOfDepositInputFieldString !== '') {
        const valueOfDepositInputField = parseFloat(valueOfDepositInputFieldString);
        // step 3: sum deposit input field value with deposit prevous balance 
        const depositPreviousBalanceString = document.getElementById('deposid-money');
        const depositPreviousBalance = parseFloat(depositPreviousBalanceString.innerText);
        const sumDeposit = valueOfDepositInputField + depositPreviousBalance;
        depositPreviousBalanceString.innerText = sumDeposit;
        // step 4: get main balance and sum input field value with main balance 
        const mainBalanceString = document.getElementById('main-balance');
        const mainBalance = parseFloat(mainBalanceString.innerText);
        const sumMainBalance = mainBalance + valueOfDepositInputField;
        mainBalanceString.innerText = sumMainBalance;
        depositInputField.value = '';

    }
    else {
        alert('Add Some Amount For Deposit')
    }
    // step 2 : 
})

//////////////////////////////////////withdraw option ///////////////////////////

/* 
steps are here 
1.add event heandelar with withdraw button 

2.get withdraw input field and value of input field 
2.5: cover value to parseFlout  

3.get old withdraw balance 
3.5: cover withdraw balance innerText to parseflout

4. calculer total withdraw amount 

5. set total withdraw amount inside the withdraw balance as a innerText 

6. get main balance 
6.5: cover main balance to parseFlout 

7.calculet main balance and withdraw amount 

8. set total main balance inside the main balance as a innerText 

9.than clear withdraw field
*/

// step-1
document.getElementById('Withdrow-button').addEventListener('click', function(){
    //step - 2
    const WithdrawInputField = document.getElementById('Withdraw-input-field');
    const valueOfwithdrawFiled = parseFloat(WithdrawInputField.value);
    // step-3
    const stringWithdrawBalance = document.getElementById('Withdrow-money');
    const withdrawBalance = parseFloat(stringWithdrawBalance.innerText);
    // step - 4
    const calculetTotalWithdrawBalance = valueOfwithdrawFiled + withdrawBalance;
    // step - 5
    stringWithdrawBalance.innerText = calculetTotalWithdrawBalance;
    // step - 6
    const StringMainBalance = document.getElementById('main-balance');
    const mainBalance = parseFloat(StringMainBalance.innerText);
    // step - 7
    const TotalmainBalanceAfterWithdraw = mainBalance - valueOfwithdrawFiled;
    // step - 8
    StringMainBalance.innerText = TotalmainBalanceAfterWithdraw;
    // step - 9 
    WithdrawInputField.value = '';

    
})
