import { addTask } from './index.js';

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

export default display;