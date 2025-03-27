function fetchForm(formDefault) {

    if (formDefault === 'login') {
        fetch("/front/Auth/login.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById('formContainer').innerHTML = data;
            });
    } else {
        fetch("/front/Auth/register.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById('formContainer').innerHTML = data;
            });
    }
}