import fetchLoginFront from './login.js';
import fetchLoginFront from './register.js';

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
            fetchLoginFront();
        }
    }

    toggleAction(); 

    btnChangeFront.addEventListener('click', toggleAction);
}
