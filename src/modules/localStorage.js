import { addTask } from './index.js';

export const saveData = (taskData, arr) => {
  if (localStorage.getItem('ObjectSaved') == null) localStorage.setItem('ObjectSaved', '[]');;
  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));
  if (savedData.length < arr.length) savedData.push(taskData);
  localStorage.setItem('ObjectSaved', JSON.stringify(savedData));
};

export const removeData = (index) => {
  if (localStorage.getItem('ObjectSaved') == null) return;
  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));
  savedData.splice(index, 1);
  localStorage.setItem('ObjectSaved', JSON.stringify(savedData));
};

export const updateInput = (object) => {
  if (localStorage.getItem('ObjectSaved') == null) return;
  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));
  const OldObject = savedData[object.index];
  OldObject.description = object.description;
  localStorage.setItem('ObjectSaved', JSON.stringify(savedData));
};

export const updateIndex = (arr) => {
  if (localStorage.getItem('ObjectSaved') == null) return;
  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));
  arr.forEach( (element, ind) => {
    element.index = ind;
    savedData[ind].index = ind;
    savedData[ind].completed = element.completed;
  });
  localStorage.setItem('ObjectSaved', JSON.stringify(savedData));
};

export const getData = () => {
  if (localStorage.getItem('ObjectSaved') != null) {
    const data = JSON.parse(localStorage.getItem('ObjectSaved'));
    data.forEach(element => {
      const oldTask = element.description;
      addTask(oldTask);
    });
  };
};