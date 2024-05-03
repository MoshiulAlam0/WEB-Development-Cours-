const passwordInputButton = document.getElementById('password-input');
const conformInputButton = document.getElementById('Conform-input');
const p = document.querySelector('p');
const loginButton = document.getElementById('login-btn');

loginButton.addEventListener('click', function (event) {
    if (passwordInputButton.value.length >= 5) {
        if (passwordInputButton.value === conformInputButton.value) {
            p.innerText = 'Password is matched';
            p.style.color = 'white';
            p.style.fontSize = '19px';
            p.style.letterSpacing = '1px';
            p.style.backgroundColor = 'lightgreen';
            passwordInputButton.value = '';
            conformInputButton.value = '';
        }
        else {
            p.innerText = 'Password is not matched';
            p.style.color = 'white';
            p.style.fontSize = '19px';
            p.style.letterSpacing = '1px';
            p.style.backgroundColor = 'rgba(598,0,0,0.8)';
        }
    }
    else{
        passwordInputButton.style.border = '1.5px solid rgba(255, 0, 0, 0.6)';
        p.textContent = 'plz type minimum 5 charecter password';
        p.style.color = 'white';
        p.style.fontSize = '15px';
        p.style.letterSpacing = '1px';
        p.style.backgroundColor = 'rgba(598,0,0,0.8)';

    }

})


