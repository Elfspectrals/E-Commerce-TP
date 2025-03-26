export default function fetchRegisterFront() {
    fetch("front/Auth/register.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('authContainer').innerHTML = data;
        });
}