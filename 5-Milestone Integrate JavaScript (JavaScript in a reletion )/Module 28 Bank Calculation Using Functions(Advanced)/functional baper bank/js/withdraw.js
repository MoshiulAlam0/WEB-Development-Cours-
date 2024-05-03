/*
----------------------------------WITHDRAW OPTION ---------------------------- 
steps are here 
1.add event heandelar with the withdraw buttton 
2. get value form the withdraw input field using function (getValueOfInputFieldById)
3. get withdraw balance using function (getValueOfElementById)
4. calculet new withdraw  balance 
4.5 set new  withdraw  balance inside the withdraw balance using function (setValueById_NewValue)
5. get main balance using function (getValueOfElementById);
6. calculet new main balance 
6.5 set new new main balance using function (setValueById_NewValue);
*/

// let's start this tasks   .....     {you can check the function  using F12 key}
document.getElementById('Withdraw-button').addEventListener('click', function(){
    const valueOfWithdrawField = getValueOfInputFieldById('Withdraw-field');  //function 1
    const valueOfwithdrawBalance = getValueOfElementById('Withdraw-main-balance');  //function 2
    const newWithdrawBalance = valueOfwithdrawBalance + valueOfWithdrawField;
    setValueById_NewValue('Withdraw-main-balance', newWithdrawBalance);  //function 3
    const valueOfMainBalane = getValueOfElementById('balance');  //function 2
    const newMainBalance = valueOfMainBalane - valueOfWithdrawField;
    setValueById_NewValue('balance', newMainBalance);
})