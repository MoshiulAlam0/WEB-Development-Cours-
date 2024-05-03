// ////////////////////////////////////-deposit option-////////////////////////////////////

// step 1: add click event heandelara inside the Deposit-button
document.getElementById('deposit-button').addEventListener('click', function () {
    // step 2 : get value inside the deposit input field 
    const depositInputField = document.getElementById('deposit-input-field');
    const valueOfDepositInputFieldString = depositInputField.value;
    const valueOfDepositInputField = parseFloat(valueOfDepositInputFieldString);
    if (isNaN(valueOfDepositInputField) === true || valueOfDepositInputField <= 0) { //NuN = Not a Number
        alert('please provite the currect amount'); //NuN check korar jonno {isNaN()} function use kora jai                            
        depositInputField.value = '';               //nagetive number check korar jonno {<= 0}                    
        return; // return jekhane use hobe okhanei function close hoye jabe 
    }
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
    // step 2 : 
});

//////////////////////////////////////-withdraw option-////////////////////////////////////

/* 
steps are here 
1.add event heandelar with withdraw button 

2.get withdraw input field and value of input field 
2.5: cover value to parseFlout  

3.check NaN [not a Number] and negative number

4. get main balance 
4.1: cover main balance to parseFlout
4.2:check main balance, is big or not form input field value 

5.calculet main balance and withdraw amount 

6. set total main balance inside the main balance as a innerText 

7.get old withdraw balance 
7.5: cover withdraw balance innerText to parseflout

8. calculer total withdraw amount 

9. set total withdraw amount inside the withdraw balance as a innerText 

10.than clear withdraw field
*/

// step-1:
document.getElementById('Withdrow-button').addEventListener('click', function () {

    //step - 2:
    const WithdrawInputField = document.getElementById('Withdraw-input-field');
    const valueOfwithdrawFiled = parseFloat(WithdrawInputField.value);

    // step - 3: some error are fixed in here 
    if (isNaN(valueOfwithdrawFiled) === true || valueOfwithdrawFiled <= 0) {
        alert('Please Provite The Currect Amount')
        WithdrawInputField.value = '';
        return;
    }

    // step - 4:
    const StringMainBalance = document.getElementById('main-balance');
    const mainBalance = parseFloat(StringMainBalance.innerText);
    // jodi  dekha jai je mainBalance ar theke input field ar value beshi kocce tahole withdraw hobe kmne
    if (mainBalance < valueOfwithdrawFiled) {
        alert('Your Balance is Low. PlZ Deposit Some Amount than withdraw');
        WithdrawInputField.value = '';
        return;
    }

    // step - 5
    const TotalmainBalanceAfterWithdraw = mainBalance - valueOfwithdrawFiled;

    // step - 6
    StringMainBalance.innerText = TotalmainBalanceAfterWithdraw;

    // step - 7
    const stringWithdrawBalance = document.getElementById('Withdrow-money');
    const withdrawBalance = parseFloat(stringWithdrawBalance.innerText);

    // step- 8:
    const calculetTotalWithdrawBalance = valueOfwithdrawFiled + withdrawBalance;

    // step - 9
    stringWithdrawBalance.innerText = calculetTotalWithdrawBalance;
    
    // step - 10
    WithdrawInputField.value = '';

})
