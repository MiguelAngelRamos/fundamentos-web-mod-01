$(document).ready(function() {
  let userId = 1;
  $('#addUserForm').submit(function(event){
    event.preventDefault();
    let userName = $('#userName').val().trim();

    // Verificar si el nombre de usuario no esta vacio
    if(userName) {

      let newUserRow =`
      <tr id="user_${userId}">
       <td>${userId}</td>
       <td>${userName}</td>
       <td>
        <button class="btn btn-success btn-sm edit"><i class="fas fa-edit"></i></button>
        <button class="btn btn-danger btn-sm edit"><i class="fas fa-trash-alt"></i></button>
       </td>
      </tr>
      `;

      //* Añadir la nueva fila a la tabla de usuarios
      $('#userList').append(newUserRow);
      $('#userName').val('')
      userId = userId + 1; //* userId++
      
    }
  });
});