var check_dark = document.getElementById('check-dark');
var check_light = document.getElementById('check-light');
var body = document.getElementById('body');
var theme = localStorage.getItem('Theme');

if (theme == 'dark') darkTheme()
else lightTheme();

function darkTheme() {
    localStorage.setItem('Theme', 'dark');

    body.classList.remove('body-light');
    body.classList.add('body-dark');

    if (!check_dark) return;

    check_light.classList.remove('fa-check');
    check_dark.classList.add('fa-check');
}

function lightTheme() {
    localStorage.setItem('Theme', 'light');

    body.classList.remove('body-dark');
    body.classList.add('body-light');

    if (!check_light) return;

    check_dark.classList.remove('fa-check');
    check_light.classList.add('fa-check');
}