function login() {
  let email = document.getElementById('inputEmail');
  let password = document.getElementById('inputPassword');

  if(email.value.trim() === '' || email.value.trim() === null) {
    alert('Enter email');
    return false;
  }

  if(password.value.trim() === '' || password.value.trim() === null) {
    alert('Enter password');
    return false;
  }

  if(password.value.trim() === 'password') {
    alert('Password cannot be password');
    return false;
  }

  return true;
}