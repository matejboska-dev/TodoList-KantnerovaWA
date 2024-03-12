const newTodoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

function addTodo() {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText === '') {
    return;
  }

  const newTodoItem = document.createElement('li');
  const newTodoCheckbox = document.createElement('input');
  const newTodoSpan = document.createElement('span');
  const newTodoDeleteButton = document.createElement('button');

  newTodoCheckbox.type = 'checkbox';
  newTodoSpan.textContent = newTodoText;
  newTodoDeleteButton.textContent = 'X';
  newTodoDeleteButton.classList.add('delete-button');

  newTodoDeleteButton.addEventListener('click', deleteTodo);

  newTodoItem.appendChild(newTodoCheckbox);
  newTodoItem.appendChild(newTodoSpan);
  newTodoItem.appendChild(newTodoDeleteButton);
  todoList.appendChild(newTodoItem);

  newTodoInput.value = '';
}

function deleteTodo(event) {
  const todoItem = event.target.parentNode;
  todoList.removeChild(todoItem);
}

function completeTodo(event) {
  const targetElement = event.target;

  if (targetElement.type === 'checkbox') {
    const todoItem = targetElement.parentNode;
    const todoText = todoItem.querySelector('span');

    todoItem.classList.toggle('completed');

    if (todoItem.classList.contains('completed')) {
      todoText.style.textDecoration = 'line-through';
    } else {
      todoText.style.textDecoration = 'none';
    }
  }
}


addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', completeTodo);

const initialTodos = ['Vstát v 6:00', 'Cvičit 1 hodinu', 'Snídat', 'Začít se učit PHP', 'Obědvat', 'Strávit 1 hodinu online hrami'];

initialTodos.forEach(todoText => {
  const newTodoItem = document.createElement('li');
  const newTodoCheckbox = document.createElement('input');
  const newTodoSpan = document.createElement('span');
  const newTodoDeleteButton = document.createElement('button');

  newTodoCheckbox.type = 'checkbox';
  newTodoSpan.textContent = todoText;
  newTodoDeleteButton.textContent = 'X';
  newTodoDeleteButton.classList.add('delete-button');

  newTodoDeleteButton.addEventListener('click', deleteTodo);

  newTodoItem.appendChild(newTodoCheckbox);
  newTodoItem.appendChild(newTodoSpan);
  newTodoItem.appendChild(newTodoDeleteButton);
  todoList.appendChild(newTodoItem);
});
