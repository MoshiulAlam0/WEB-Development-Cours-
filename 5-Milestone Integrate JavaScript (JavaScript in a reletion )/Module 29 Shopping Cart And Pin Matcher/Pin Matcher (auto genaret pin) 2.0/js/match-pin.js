function getFieldVlaue(field_id) {
    const field = document.getElementById(field_id);
    return field.value;
}
// clear field ----
function clearField(field_id) {
    const field = document.getElementById(field_id);
    field.value = '';
}

document.getElementById('match-pin').addEventListener('click', function () {
    const autoPinGenaretFieldVlaue = getFieldVlaue('genretor-input');
    const userPinFieldValue = getFieldVlaue('number-input');

    const currectMessege = document.getElementById('currect-massege');
    const incurrectMessege = document.getElementById('incurrect-massege');
    const inputPinMessege = document.getElementById('input-pin-massege');

    if ((autoPinGenaretFieldVlaue || userPinFieldValue) !== '') {
        if (autoPinGenaretFieldVlaue === userPinFieldValue) {
            currectMessege.style.display = 'block';
            incurrectMessege.style.display = 'none';
            inputPinMessege.style.display = 'none';
            clearField('genretor-input');
            clearField('number-input');
        }
        else {
            incurrectMessege.style.display = 'block';
            currectMessege.style.display = 'none';
            inputPinMessege.style.display = 'none';
        }
    }
    else {
        inputPinMessege.style.display = 'block';
        currectMessege.style.display = 'none';
        incurrectMessege.style.display = 'none';
    }
})