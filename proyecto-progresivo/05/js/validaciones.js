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

    if(validateLength(nombre, 3)) {
      // a la parte verdadera
    } else {
      // a la parte falsa
    }

  }

  function validateLength(value, minLength) {
    //* ana, ema y ena
    return value.length >= minLength;
  }
});