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
  let taskHtml = `<label class="label-case${tasks.length}"><input type="checkbox" class="task-check"><input class="task-value" 
  value="${task}"><img class="dots${tasks.length}" src="/src/assets/dots.png"><img class="trash${tasks.length} cans" src="/src/assets/trash.png"></label>`;
  toDoList.insertAdjacentHTML('afterbegin', taskHtml);
  taskHtml = new TaskToDo(task, tasks.length);
  tasks.push(taskHtml);
};

const removeTask = (remove) => {
  if (tasks.length <= 0) return;
  let item = document.querySelector(`.label-case${remove}`);
  item.remove();
  tasks.splice(remove, 1);
};

const input = document.querySelector('.add-task');

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const text = document.querySelector('.add-task').value;
    addTask(text);
    tasks.forEach((e, index ) => {
      const inputSelect = document.querySelector(`.label-case${index}`);
      inputSelect.addEventListener('focusin', () => {
        const trashCan = document.querySelector(`.trash${index}`);
        const dots = document.querySelector(`.dots${index}`);
        // dots.style.display = 'none';
        trashCan.style.display = 'block';
      })
      inputSelect.addEventListener('focusout', () => {
        const trashCan = document.querySelector(`.trash${index}`);
        const dots = document.querySelector(`.dots${index}`);
        dots.style.display = 'block';
        // trashCan.style.display = 'none';
      })
      const bins = document.querySelector(`.trash${index}`)
      bins.addEventListener('click', ()=> {
        removeTask(index);
      })

    });
  }
});
