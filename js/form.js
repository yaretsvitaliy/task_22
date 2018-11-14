(function () {
    let user = {};
    let $email__enter = document.querySelector('#email__enter');
    let $password__enter = document.querySelector('#password__enter');
    let $email__registration = document.querySelector('#email__registration');
    let $password__registration = document.querySelector('#password');
    let $password = document.querySelector('#password');
    let $checkPasswords = document.querySelector('#checkpassword');
    let $button = document.querySelector('#btn');
    let $buttonEnter = document.querySelector('#btnEnter');
    let $submit = document.querySelector('#submit');
    let $submitRegistration = document.querySelector('#submit-registration');
    let $formEnter = document.querySelector('#form-enter');
    let $formRegistration = document.querySelector('#form-registration');
    let $buttonLogin = document.querySelector('#btn-login');
    let $form = document.querySelector('#form');
    const START_PAGE_URL = 'https://rmsys.issoft.by/Home/Index';
    let $users = document.querySelector("#users");
    let a = '';
    let arrayUsers = [];
    checkOnNull();
    event();

    function saveDateOnLocalStorageRegistration() {
        user.name = $email__registration.value;
        user.password = $password__registration.value;
        arrayUsers.push(user);
        localStorage.setItem('users', JSON.stringify(arrayUsers));
    }

    function showAllUsers() {
        let storedNames = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < storedNames.length; i++) {
            for (let prop in storedNames[i]) {
                a += (' Users ' + [i + 1] + prop + " = " + storedNames[i][prop]);
            }
        }
        $users.innerHTML = a;
    }


    function checkOnNull() {
        if (localStorage.getItem("users") !== null) {
            showAllUsers();
        }
    }

    function checkPassword(e) {
        e.preventDefault();
        if ($password.value !== $checkPasswords.value) {
            alert('passwords do not match');
        }
        saveDateOnLocalStorageRegistration();
    }

    function enterPage(e) {
        // debugger;
        e.preventDefault();
        if ($email__enter.value === user.name && $password__enter.value === user.password) {
            location.href = START_PAGE_URL;
        } else {
            alert('error');
        }
    }

    function addFormEnter(e) {
        e.preventDefault();
        $formEnter.classList.toggle('form-enter-flex');
        $formRegistration.classList.toggle('form-enter');
    }

    function addFormModalWindow(e) {
        e.preventDefault();
        $form.classList.toggle('show__form');
    }

    function event() {
        $submitRegistration.addEventListener('click', checkPassword);
        $button.addEventListener('click', addFormEnter);
        $buttonEnter.addEventListener('click', addFormEnter);
        $submit.addEventListener('click', enterPage);
        $buttonLogin.addEventListener('click', addFormModalWindow);
    }
}());

