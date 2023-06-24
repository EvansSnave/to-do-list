/* eslint-disable function-paren-newline */
import sheet from '/src/style.css' assert { type: 'css' };
import { TaskToDo } from './tasks.js';

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
  const newTask = new TaskToDo(inputUser.value, 0);
  tasks.push(newTask);
  newTask.index = tasks.indexOf(newTask);
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
    tasks.splice(tasks.indexOf(newTask), 1);
    removeData(newTask.index);
    updateIndex();
    console.log(tasks);
  });
  inputUser.addEventListener('keyup', () => {
    newTask.description = inputUser.value;
    updateInput(newTask);
  });
  saveData(newTask);
  console.log(tasks);
};

const display = () => {
  const input = document.querySelector('.add-task');
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      let text = document.querySelector('.add-task');
      if (text.value === '') return;
      addTask(text.value);
      text.value = '';
    };
  });
};

display();

const saveData = (taskData) => {
  if (localStorage.getItem('ObjectSaved') == null) localStorage.setItem('ObjectSaved', '[]');;
  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));
  if (savedData.length < tasks.length) savedData.push(taskData);
  localStorage.setItem('ObjectSaved', JSON.stringify(savedData));
};

const removeData = (index) => {
  if (localStorage.getItem('ObjectSaved') == null) return;
  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));
  savedData.splice(index, 1);
  localStorage.setItem('ObjectSaved', JSON.stringify(savedData));
};

const updateInput = (object) => {
  if (localStorage.getItem('ObjectSaved') == null) return;
  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));
  const OldObject = savedData[object.index];
  OldObject.description = object.description;
  localStorage.setItem('ObjectSaved', JSON.stringify(savedData));
};

const updateIndex = () => {
  if (localStorage.getItem('ObjectSaved') == null) return;
  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));
  tasks.forEach( (element, ind) => {
    element.index = ind;
  });
  for (let i = 0; i < tasks.length; i++){
    savedData[i].index = i;
  };
  localStorage.setItem('ObjectSaved', JSON.stringify(savedData));
};

const getData = () => {
  if (localStorage.getItem('ObjectSaved') != null) {
    const data = JSON.parse(localStorage.getItem('ObjectSaved'));
    data.forEach(element => {
      const oldTask = element.description;
      addTask(oldTask);
    });
  };
};

document.addEventListener('DOMContentLoaded', () => {
  getData();
});
