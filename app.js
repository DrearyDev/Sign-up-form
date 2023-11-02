'use strict';

const pass = document.getElementById('password');
const passError = document.querySelector('.pass-error')
const confirm = document.getElementById('confirm_password');

let passData = [];
let confirmData = [];

pass.addEventListener('input', (e) => {
    if (e.data !== null) {
        passData.push(e.data);
    } else {
        passData.pop();
    };
    checkPassword();
});

confirm.addEventListener('input', (e) => {
    if (e.data !== null) {
        confirmData.push(e.data);
    } else {
        confirmData.pop();
    };
    checkPassword();
});

function checkPassword() {
    let password = passData.toString();
    let confirmPassword = confirmData.toString();

    if (password !== confirmPassword){
        pass.classList.add('error');
        passError.style.opacity = '1';
        confirm.classList.add('error');
    } else if (password === confirmPassword && passData.length > 0) {
        pass.classList.remove('error');
        passError.style.opacity = '0';
        confirm.classList.remove('error');
    };
};
