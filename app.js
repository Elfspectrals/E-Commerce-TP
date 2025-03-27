function fetchHeaderFooter() {
    fetch('/front/common/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
    fetch('/front/common/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

fetchHeaderFooter();