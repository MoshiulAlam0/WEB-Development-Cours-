/* 
steps are here

1.add click event heandelar to btn-dubble & btn-triple 

2. get value form the input field 
2.1:convert as a number 
2.2: check nun using isNuN()

3.caluletion 

4. get innerText of p tag 
4.0: set value inside the p tag 
4.1:remove class
4.2: add calss

5. clear input field

6.add keyup event, set befor inner text inside the p tag
6.1: remove class
6.2: add calss

*/
// dubble operation 
// step-1
document.getElementById('bubble-button').addEventListener('click', function(){
    // step-2
    const inputField = document.getElementById('input-field');
    const valueOfInputField = parseFloat(inputField.value);
    if(isNaN(valueOfInputField)){
        alert('Please input only NUMBER')
        inputField.value = '';
        return;
    }
    // step -3
    const caluletion = valueOfInputField * 2;
    // step-4
    const pTag = document.getElementById('result');
    pTag.innerText = caluletion;
    pTag.classList.remove('result');
    pTag.classList.add('style');
    // step-5
    inputField.value = '';

});


// triple operation 
// step-1
document.getElementById('Triple-button').addEventListener('click', function(){
    // step-2
    const inputField = document.getElementById('input-field');
    const valueOfInputField = parseFloat(inputField.value);
    if(isNaN(valueOfInputField)){
        alert('Please input only NUMBER')
        inputField.value = '';
        return;
    }
    // step -3
    const caluletion = valueOfInputField * 3;
    // step-4
    const pTag = document.getElementById('result');
    pTag.innerText = caluletion;
    pTag.classList.remove('result');
    pTag.classList.add('style');
    // step-5
    inputField.value = '';
});

// step-6
document.getElementById('input-field').addEventListener('keyup', function(){
    const pTag = document.getElementById('result');
    pTag.innerText = 'result is seen here ';
    pTag.classList.remove('style');
    pTag.classList.add('result');
})