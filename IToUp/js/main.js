const passwordEl = document.querySelector('.password');
const cheackPass = document.querySelector('.cheackPass');
const aufBtn= document.querySelector('.AufBtn');

let isPass = true;

function togglePass() {
    if(isPass) {
        passwordEl.setAttribute('type', 'text');
        isPass = false;
    } else {
        passwordEl.setAttribute('type', 'password');
        isPass = true;
    }
}

cheackPass.addEventListener('click', togglePass);