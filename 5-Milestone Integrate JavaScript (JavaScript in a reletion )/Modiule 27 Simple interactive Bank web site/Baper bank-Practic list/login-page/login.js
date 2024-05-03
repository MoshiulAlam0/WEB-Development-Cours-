/*
step 1: add click event-heandelar  inside the login button 
*/
const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function () {

    //  step 2: get input value inside the input field  by using the (.value)
    const inputFieldOfGmail = document.getElementById('input1'); //input field of gmail
    const inputFieldOfPassword = document.getElementById('input2'); //input field of password
    const valueOfGmailInputField = inputFieldOfGmail.value;
    const valueOfPasswordInputField = inputFieldOfPassword.value;

    // step 3 : check gamil and password  with user gamil and password and  redairect another html page 
    // {avabe check kora akebare ochid na (danger). aita check hobe batabase a jehetu akhon begenar sehetu avabe korci}
    if (valueOfGmailInputField === 'baperbank@gmail.com' && valueOfPasswordInputField === '1234') {
        window.location.href = 'http://127.0.0.1:5500/Baper%20bank-Practic%20list/home-page/home.html'; //To Redirect Another Webpage
    }
    else {
        alert('You data is Incurret.'); /// to send alart messege 
    }
})