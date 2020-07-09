const PORTAL_URL = "http://localhost:34163"

const token = localStorage.getItem('token')

if (token) {
    window.location = PORTAL_URL
}

function login() {
    localStorage.setItem('token', 'token-logged-in')
    window.location = PORTAL_URL
}

const button = document.getElementById('loginButton')
button.addEventListener('click', login)
