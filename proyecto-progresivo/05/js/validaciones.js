document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    //* Antes de hacer submit el formulario este validado

    validateForm();
  });
  //* A realizar las validaciones
  function validateForm() {

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if(!validateLength(nombre, 3)) {
      setError('errorNombre', 'El nombre debe tener al menos 3 caracteres');
    }

    if(!validateEmail(email)) {
      setError('errorEmail', 'El email no es válido.');
    }

    if(!validateLength(mensaje, 26)) {
      setError('errorArea', 'El mensaje debe ser de al menos 26 caracteres');
    }

  }

  function validateLength(value, minLength) {
    return value.length >= minLength;
  }

  function validateEmail(email) {
    // email es sofiorreo.com
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  function setError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';

  }
});