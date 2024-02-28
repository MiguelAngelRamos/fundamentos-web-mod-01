document.addEventListener('DOMContentLoaded', function() {
//* TODO EL DOCUMENTO HTML FUE CARGADO
  const addButton = document.getElementById('addTaskButton');
  const inputText = document.getElementById('taskInput');
  const tasksList = document.getElementById('tasksList');

  // El boton
  addButton.addEventListener('click', function() {
    console.log('has dado click en el boton!')
  });

  // En la caja de texto
  inputText.addEventListener('keypress', function(event) {
    if(event.key == 'Enter') {
      console.log('has presionado el enter')
    }
  })

  //* const addButton =  <button id="addTaskButton">Agregar Tarea</button>;
});