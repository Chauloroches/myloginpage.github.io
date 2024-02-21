function validate() {
  let email = document.getElementById('inputEmail');
  let newPassword = document.getElementById('inputNewPassword');
  let confirmPassword = document.getElementById('inputConfirmPassword');

  if(email.value.trim() === '' || email.value.trim() === null) {
    alert('Your Email is required.');
    return false;
  } 

  if(newPassword.value.trim() === '' || newPassword.value.trim() === null) {
    alert('New Password is required.');
    return false;
  }

  if(confirmPassword.value.trim() === '' || confirmPassword.value.trim() === null) {
    alert('Confirm your password.');
    return false;
  } 

  if(newPassword.value.trim() === 'password') {
    alert('Password cannot be password');
    return false;
  }

  if(confirmPassword.value.trim() != newPassword.value.trim()) {
    alert('Confirm password should be same as new password.');
    return false;
  }

  return true;
}

