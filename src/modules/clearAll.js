import { removeTask } from './removeTask';

export const clearCompleted = (button, arr) => {
  button.addEventListener('click', () => {
    const completed = arr.filter( element => element.completed === true);
    completed.forEach( element => {
      const label = document.getElementsByClassName('label-case');
      const html = label[element.index];
      removeTask(html, arr, element);
    });
  });
};