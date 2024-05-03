/* steps are here 
1.add click hendelar 
2.get value inside the input filed 
3.get withdraw balance 
4.calulet between value and withdraw balance for new withdraw balance
4:1.set new withdraw balance inside the withdraw balance as a innerText 

5.get main balance 
6.calulet between field value and main balance for new main balance 
7.set the new main balance inside the main balance as a innnerText 
 */

document.getElementById('withdraw-bnt').addEventListener('click', function(){
    const valueOfWithdrawField = getFieldValueById('withdraw-field');
    const withdrawBalance = getElementValueByid('withdraw-balance');
    const newWithdrawBalance = withdrawBalance + valueOfWithdrawField;
    setNewValueById_NewValue('withdraw-balance', newWithdrawBalance);
    const mainBalance = getElementValueByid('Main-balance');
    const newMainBalance = mainBalance - valueOfWithdrawField;
    setNewValueById_NewValue('Main-balance', newMainBalance);
    
})

