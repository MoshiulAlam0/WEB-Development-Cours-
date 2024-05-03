/* 
1.  function for get value form the input field by id 
2.  function for get element value form the element by id
3. function for set value inside the element as a inner text
*/

// 1. function for get input field value 
function getValueOfInputFieldById(InputField_id) {
    const inputField = document.getElementById(InputField_id);
    const valueOfInputField = parseFloat(inputField.value);
    inputField.value = '';
    return valueOfInputField;
}


// 2.this function for get element value form the element by ID
function getValueOfElementById(element_id) {
    const element = document.getElementById(element_id);
    const valueOfEelement = parseFloat(element.innerText);
    return valueOfEelement;
}


// 3. this function for set value inside the element as a inner text 
function setValueById_NewValue(element_id, new_value) {
    const element = document.getElementById(element_id);
    element.innerText = new_value;
}
