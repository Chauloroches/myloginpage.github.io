function signUp() {
  let firstName = document.getElementById('inputFirstName');
  let lastName = document.getElementById('inputLastName');
  let phone = document.getElementById('inputPhone');
  let email = document.getElementById('inputEmail');
  let password = document.getElementById('inputPassword');
  let confirmPassword = document.getElementById('inputConfirmPassword');

  if(firstName.value.trim() === '' || firstName.value.trim() === null) {
    alert('Enter your first name.');
    return false;
  } 

  if(lastName.value.trim() === '' || lastName.value.trim() === null) {
    alert('Enter your last name.');
    return false;
  }

  if(phone.value.trim() === '' || phone.value.trim() === null) {
    alert('Enter your phone number.');
    return false;
  } 

  if(email.value.trim() === '' || email.value.trim() === null) {
    alert('Enter your email.');
    return false;
  }

  if(password.value.trim() === '' || password.value.trim() === null) {
    alert('Enter your password.');
    return false;
  } 

  if(password.value.trim() === 'password') {
    alert('Password cannot be password');
    return false;
  }

  if(confirmPassword.value.trim() === '' || confirmPassword.value.trim() === null) {
    alert('Confirm your password.');
    return false;
  }

  if(confirmPassword.value.trim() != password.value.trim()) {
    alert('Confirm password not same as password');
    return false;
  }

  return true;
}

