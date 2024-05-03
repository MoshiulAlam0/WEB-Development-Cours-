// deposit option ////
// steps are here 
/* 
1.add click hendelar 
2.get value inside the input filed 
3.get deposit balance 
4.calulet between value and deposit balance for new deposit balance
4:1.set new deposit balance inside the beposit balance as a innerText 

5.get main balance 
6.calulet between field value and main balance for new main balance 
7.set the new main balance inside the main balance as a innnerText 

*/

document.getElementById('deposit-btn').addEventListener('click', function(){
    const valueOfDepositField = getFieldValueById('deposit-field');
    const depositBalance = getElementValueByid('deposit-Balance');
    const newDepositBalance = valueOfDepositField + depositBalance;
    setNewValueById_NewValue('deposit-Balance', newDepositBalance);

    const mainBalance = getElementValueByid('Main-balance');
    const newMainBalance = mainBalance + valueOfDepositField;
    setNewValueById_NewValue('Main-balance', newMainBalance);
})