/* eslint-disable function-paren-newline */
import sheet from '/src/style.css' assert { type: 'css' };
import { TaskToDo } from './tasks.js';
import display from './display.js';
import { saveData, removeData, updateIndex, updateInput, getData } from './localStorage.js';
import trashI from '/src/assets/trash.png';
import dotsI from '/src/assets/dots.png';

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
    updateIndex(tasks);
    console.log(tasks);
  });
  inputUser.addEventListener('keyup', () => {
    newTask.description = inputUser.value;
    updateInput(newTask);
  });
  saveData(newTask, tasks);
  console.log(tasks);
};

display();

document.addEventListener('DOMContentLoaded', () => {
  getData();
});
