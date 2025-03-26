import fetchLoginFront from './login.js';
import fetchRegisterFront from './register.js';

export default function indexAuth() {
    let defaultAction = "login";
    const btnChangeFront = document.getElementById('switchFront');

    function toggleAction() {
        if (defaultAction === "login") {
            defaultAction = "register";
            btnChangeFront.innerHTML = "Login";
            fetchLoginFront();
        } else {
            defaultAction = "login";
            btnChangeFront.innerHTML = "Register";
            fetchRegisterFront();
        }
    }

    toggleAction(); 

    btnChangeFront.addEventListener('click', toggleAction);
}
