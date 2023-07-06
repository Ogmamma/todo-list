let inputField = document.getElementById('todo-input');

document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let todoItem = inputField.value;

  addTodoItem(todoItem);

  inputField.value = '';
});

function addTodoItem(todoItem) {
  let listItem = document.createElement('li');

  listItem.textContent = todoItem;

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.className = 'delete-button';

  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });

  listItem.appendChild(deleteButton);

  document.getElementById('todo-list').appendChild(listItem);
}

