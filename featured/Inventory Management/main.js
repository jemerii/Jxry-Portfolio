// Demo credentials (replace with database later)
const USERS = [
  { username: "root", password: "admin" },
  { username: "staff", password: "manage" },
  { username: "cyrra", password: "1y44u2yb"}
];


const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const user = USERS.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', username);
      window.location.href = 'dashboard/dashboard.html';
    } else {
      error.textContent = 'Invalid username or password.';
    }
  });
}


const dashboardPage = window.location.pathname.includes('dashboard.html');
if (dashboardPage) {
  const user = localStorage.getItem('loggedInUser');
  if (!user) {
    window.location.href = 'index.html';
  } else {
    console.log(`User logged in: ${user}`);
  }

  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
  });
}
