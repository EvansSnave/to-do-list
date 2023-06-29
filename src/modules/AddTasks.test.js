// index.test.js
import { addTask } from './index';

describe('addTask', () => {
  beforeEach(() => {
    // Clear any existing tasks or elements before each test
    document.body.innerHTML = '';
  });

  test('adds a task to the task list', () => {
    const task = 'New Task';

    addTask(task);

    const taskLabel = document.querySelector('.to-do-list label');
    const taskInput = taskLabel.querySelector('.task-value');

    expect(taskInput.value).toBe(task);
  });

  test('adds a new task object to the tasks array', () => {
    const task = 'New Task';

    addTask(task);

    const tasks = window.tasks;
    const newTask = tasks[tasks.length - 1];

    expect(newTask.description).toBe(task);
    expect(newTask.completed).toBe(0);
    expect(newTask.index).toBe(tasks.length - 1);
  });

  // Add more test cases for different scenarios as needed
});



// import { addTask } from './index';
// // import { removeTask } from './removeTask';
// document.body.innerHTML = `
//   <form class="container">
//   <div class="demo">Demo</div>
//   <input class="add-task" type="text" placeholder="Add to your list...">
//   <div class="to-do-list">

//   </div>
//   <button class="clear-completed">Clear all completed</button>
//   </form>
//   <script type="module" src="/src/modules/index.js"></script>
// `;

// jest.mock('./index.js');
// jest.mock('./display.js');


// function sum (n, n2) {
//   return n + n2 
// }

// test('returns sum', () => {
//   expect(sum(1,2)).toBe(3);
// })