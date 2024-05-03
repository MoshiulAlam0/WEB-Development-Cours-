// for get value form the input field 
function getFieldValueById(field_id){
    const field = document.getElementById(field_id);
    const Field_value = parseFloat(field.value);
    field.value = '';
    return Field_value;
}
// for get the innerext inside the element 
function getElementValueByid(element_id){
    const element = document.getElementById(element_id);
    const text = parseFloat(element.innerText);
    return text;
}
// for set the new value inside the element as a innerText
function setNewValueById_NewValue(element_id, new_Value){
    const element = document.getElementById(element_id);
    element.innerText = new_Value;
}
