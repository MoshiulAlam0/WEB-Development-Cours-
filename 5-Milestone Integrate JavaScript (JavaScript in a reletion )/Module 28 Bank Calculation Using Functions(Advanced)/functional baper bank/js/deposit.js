/*
----------------------------------DEPOSIT OPTION ---------------------------- 
steps are here 
1.add event heandelar with the deposit buttton 
2. get value form the deposit input field using function (getValueOfInputFieldById)
3. get deposit balance using function (getValueOfElementById)
4. calculet new deposit  balance 
4.5 set new  deposit  balance inside the deposit balance using function (setValueById_NewValue)
5. get main balance using function (getValueOfElementById);
6. calculet new main balance 
6.5 set new new main balance using function (setValueById_NewValue);
*/ 


// le's start this tasks..............
document.getElementById('deposit-button').addEventListener('click', function () {
    const valueOfDepositField = getValueOfInputFieldById('deposit-field'); /// function:1
    const depositBalance = getValueOfElementById('deposit-balance');    /// function:2
    const newDepsitBalance = depositBalance + valueOfDepositField;
    setValueById_NewValue('deposit-balance', newDepsitBalance);
    const mainBalance = getValueOfElementById('balance');     ///function:2
    const newMainBalance = mainBalance + valueOfDepositField;
    setValueById_NewValue('balance', newMainBalance);   ///function:3
});