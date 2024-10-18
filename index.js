// Registration Function
function registerUser() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const role = document.getElementById('regRole').value;
  
    // Create a user object
    const user = { username, password, role };
  
    // Store user in localStorage
    localStorage.setItem(username, JSON.stringify(user));
  
    alert('Registration successful! Now, log in.');
  }
  
  // Login Function
  function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    // Retrieve user from localStorage
    const user = JSON.parse(localStorage.getItem(username));
  
    if (user && user.password === password) {
      alert(`Welcome, ${user.role}!`);
      // Redirect user based on role
      if (user.role === 'student') {
        window.location.href = 'student-dashboard.html'; // Redirect to student dashboard
      } else if (user.role === 'teacher') {
        window.location.href = 'teacher-dashboard.html'; // Redirect to teacher dashboard
      }
    } else {
      alert('Invalid credentials!');
    }
  }
  


  
  
  
    
    
  