function showRegister() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

function showLogin() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        if (localStorage.getItem(username)) {
            alert('Username already exists! Please choose another one.');
        } else {
            localStorage.setItem(username, password);
            alert('Registration successful! Please login.');
            showLogin();
        }
    } else {
        alert('Please enter a valid username and password.');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('securedPage').style.display = 'block';
        document.getElementById('usernameDisplay').textContent = username;
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    document.getElementById('securedPage').style.display = 'none';
    showLogin();
}
showRegister();