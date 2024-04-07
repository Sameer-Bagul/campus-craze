function loadContent(contentUrl) {
    var content = document.getElementById('nav-footer-content');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            content.innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", contentUrl, true);
    xhttp.send();
}

document.addEventListener("DOMContentLoaded", function() {
    var navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var contentUrl = button.getAttribute('data-content');
            loadContent(contentUrl);
        });
    });
});