function validateEmail() {
    const emailInput = document.getElementById('email');
    const validationMessage = document.getElementById('validation-message');

    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput.value)) {
      validationMessage.textContent = '';
      alert('Thank you for signing up!');
    } else {
      validationMessage.textContent = 'Invalid email address';
    }
  }