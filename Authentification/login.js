export default function fetchLoginFront() {
    fetch("front/Auth/login.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('authContainer').innerHTML = data;
        });
}