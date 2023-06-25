export class TaskToDo {
  constructor (description, index, completed = false) {
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
    });
    this.description = description;
    this.completed = completed;
    this.index = index;
  };
};