/* eslint-disable function-paren-newline */
import sheet from '/src/style.css' assert { type: 'css' };

class TaskToDo {
  constructor (description, index, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const tasks = [];

const addTask = (task) => {
  const toDoList = document.querySelector('.to-do-list');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const inputUser = document.createElement('input');
  const dots = document.createElement('img');
  const trash = document.createElement('img');
  dots.src = '/src/assets/dots.png';
  trash.src = '/src/assets/trash.png';
  input.type = 'checkbox';
  dots.classList.add('dots');
  trash.classList.add('trash');
  label.classList.add('label-case');
  input.classList.add('task-check');
  inputUser.classList.add('task-value');
  inputUser.value = `${task}`;
  label.append(input, inputUser, dots, trash);
  toDoList.appendChild(label);
  const newTask = new TaskToDo(inputUser.value, tasks.length);
  tasks.push(newTask);
  inputUser.addEventListener('focusin', () => {
    dots.classList.add('none');
    dots.classList.remove('block');
    trash.classList.add('block');
    trash.classList.remove('none');
  });
  inputUser.addEventListener('focusout', () => {
    dots.classList.add('block');
    dots.classList.remove('none');
    trash.classList.add('none');
    trash.classList.remove('block');
  });
  trash.addEventListener('mousedown', () => {
    label.remove();
    tasks.splice(tasks.indexOf(task), 1);
  });
  inputUser.addEventListener('focusout', () => {
    newTask.description = inputUser.value;
  });
};

const input = document.querySelector('.add-task');

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    let text = document.querySelector('.add-task');
    addTask(text.value);
    text.value = '';
  };
});
