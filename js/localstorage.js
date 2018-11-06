class LocalStorage {
    constructor() {
    }

    saveDateOnLocalStorageEnter() {
        const email__enter = document.querySelector('#email__enter');
        const password__enter = document.querySelector('#password__enter');
        localStorage.setItem('mail', email__enter.value);
        localStorage.setItem('password', password__enter.value);
    }

    checkPassword() {
        const password = document.querySelector('#password');
        const checkPassword = document.querySelector('#checkpassword');
        if (password.value !== checkPassword.value) {
            alert('passwords do not match');
        }
    }

    event() {
        const button = document.querySelector('#btn');
        const buttonEnter = document.querySelector('#btnEnter');
        const submit = document.querySelector('#submit');
        const submitRegistration = document.querySelector('#submit-registration');
        submitRegistration.addEventListener('click', this.checkPassword.bind(this));
        submit.addEventListener('click', this.saveDateOnLocalStorageEnter.bind(this));
        button.addEventListener('click', this.addFormEnter.bind(this));
        buttonEnter.addEventListener('click', this.addFormEnter.bind(this));
    }

    addFormEnter() {
        const formEnter = document.querySelector('#form-enter');
        const formRegistration = document.querySelector('#form-registration');
        formEnter.classList.toggle('form-enter-flex');
        formRegistration.classList.toggle('form-enter');
    }
}

let localstorage = new LocalStorage();
localstorage.event();


// localStorage.setItem('vit', JSON.stringify(vit));
// console.log(JSON.parse(localStorage.getItem('vit')).sex);






