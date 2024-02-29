document.addEventListener('DOMContentLoaded', function() {
//* TODO EL DOCUMENTO HTML FUE CARGADO
  const addButton = document.getElementById('addTaskButton');
  const inputText = document.getElementById('taskInput');
  const tasksList = document.getElementById('tasksList');

  // El boton
  addButton.addEventListener('click', function() {
    addTask(inputText.value);
    input.value = '';
  });

  // En la caja de texto
  inputText.addEventListener('keypress', function(event) {
    
    if(event.key == 'Enter') {
      console.log(inputText.value)
      addTask(inputText.value);
      input.value = '';
    }
  });

  function addTask(task) {
    // construir un list item <li>
    const li = document.createElement('li'); // <li></li>
    li.textContent = task; // <li>task</li>

    // llamo al ul
    tasksList.appendChild(li); // al ul le agregamos un hijo que es <li> que creamos anteriormente
  }

  //* const addButton =  <button id="addTaskButton">Agregar Tarea</button>;
});