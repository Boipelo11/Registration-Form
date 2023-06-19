
//Form Validation
function formValidation() {
  let fullName = document.getElementById('fullname').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm password').value;

  // Invalid or missing information
  if (fullName === '') {
    alert('Please enter your full name');
    return false;
  }

  if (email === '') {
    alert('Please enter your email address');
    return false;
  }

  if (!email.includes('@')) {
    alert('Please enter a valid email address');
    return false;
  }

  if (password === '') {
    alert('Please enter your password');
    return false;
  }

  if (password.length < 8) {
    alert('Password must be 8 characters or more');
    return false;
  }

  if (!/\d/.test(password)) {
    alert('Your password should contain at least one number');
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    alert('Your password should contain at least one uppercase letter');
    return false;
  }

  if (!/[a-z]/.test(password)) {
    alert('Your password should contain at least one lowercase letter');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return false;
  }

  // All information has passed validation
  return true;
}

// Functionality for the register button
const registerButton = document.getElementById('register-btn');
registerButton.addEventListener('click', function () {
  if (formValidation()) {
    window.location.href = '/success.html';
  }
});

