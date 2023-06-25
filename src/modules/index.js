/* eslint-disable function-paren-newline */
import sheet from '/src/style.css' assert { type: 'css' };
import { TaskToDo } from './tasks.js';
import display from './display.js';
import { saveData, updateInput, getData, updateIndex } from './localStorage.js';
import trashI from '/src/assets/trash.png';
import dotsI from '/src/assets/dots.png';
import { status } from './status.js';
import { removeTask } from './removeTask.js';
import { clearCompleted } from './clearAll.js';

const tasks = [];

export const addTask = (task) => {
  const toDoList = document.querySelector('.to-do-list');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const inputUser = document.createElement('input');
  const dots = document.createElement('img');
  const trash = document.createElement('img');
  dots.src = dotsI;
  trash.src = trashI;
  input.type = 'checkbox';
  dots.classList.add('dots');
  trash.classList.add('trash');
  input.classList.add('task-check');
  inputUser.classList.add('task-value');
  inputUser.value = `${task}`;
  label.append(input, inputUser, dots, trash);
  toDoList.appendChild(label);
  const newTask = new TaskToDo(inputUser.value, 0);
  tasks.push(newTask);
  newTask.index = tasks.indexOf(newTask);
  label.classList.add('label-case');
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
    removeTask(label, tasks, newTask);
  });
  inputUser.addEventListener('keyup', () => {
    newTask.description = inputUser.value;
    updateInput(newTask);
  });
  saveData(newTask, tasks);
  status(input, newTask, tasks);
};

display();

export const updateStatus = (arr) => {
  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));
  arr.forEach(element => {
    const current = savedData[element.index];
    if (current == undefined) return;
    element.completed = current.completed;
    const check = document.getElementsByClassName('task-check');
    const html = check[current.index];
    html.checked = current.completed;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const removeButton = document.querySelector('.clear-completed')
  updateIndex(tasks);
  getData();
  clearCompleted(removeButton, tasks);
  updateStatus(tasks);
});

const form = document.querySelector('form');
form.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
  };
});
