document.getElementById('match-pin-btn').addEventListener('click', function () {
    const autoPinField = document.getElementById('genretor-input');
    const userTypeField = document.getElementById('number-input');

    const inputPinMassege = document.getElementById('input-pin-massege');
    const currectMessege = document.getElementById('currect-massege');
    const inCurrectMessege = document.getElementById('incurrect-massege');


    if ((autoPinField.value || userTypeField.value) !== '') {
        if(autoPinField.value === userTypeField.value){
            currectMessege.style.display = 'block';
            inputPinMassege.style.display = 'none';
            inCurrectMessege.style.display = 'none';
        }
        else{
            inCurrectMessege.style.display = 'block';
            inputPinMassege.style.display = 'none';
            currectMessege.style.display = 'none';
        }
    }
    else{
        inputPinMassege.style.display = 'block';
        inCurrectMessege.style.display = 'none';
        currectMessege.style.display = 'none';

    }
})