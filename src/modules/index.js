/* eslint-disable function-paren-newline */
const tasks = [
  {
    description: 'Wash the dishes',
    completed: 'false',
    index: '',
  },
  {
    description: 'Make the bed',
    completed: 'false',
    index: '',
  },
  {
    description: 'Make dinner',
    completed: 'false',
    index: '',
  },
];

const addTask = () => {
  const toDoList = document.querySelector('.to-do-list');
  tasks.forEach((task, indexL) => {
    const taskHtml = `<label><input type="checkbox" class="task-check">${task.description}</label>`;
    task.index = indexL;
    toDoList.insertAdjacentHTML('beforeend', taskHtml);
  },
  );
};

document.addEventListener('DOMContentLoaded', () => {
  addTask();
});
