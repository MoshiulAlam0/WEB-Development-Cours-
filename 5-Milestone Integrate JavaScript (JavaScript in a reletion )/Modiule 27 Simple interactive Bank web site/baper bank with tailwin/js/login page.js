// <!-- --------------------------------------script is here     -------------------------------------------- -->
// <!-- step 1 : add even heandelar inside the button  -->
// <!-- step 2 : get input value by getElementById -->
// <!-- step 3: check email and password using if else  -->
// <!-- step 4: if email and pass are right than redirect another html page  -->
// even heandelar  funcrion 
console.log('hello');
function submit(){
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const emailInputValue = emailInput.value;
const passwordInputValue = passwordInput.value;
if(emailInputValue === 'baperbank@gmail.com' && passwordInputValue === '1234'){
    window.location.href = "http://127.0.0.1:5500/baper%20bank%20with%20tailwin/home.html";
}
else{
    alert('provite the curect information');
}

}


