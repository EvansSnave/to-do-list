import { updateIndex } from './localStorage';

export const status = (input, object, arr) => {
  input.addEventListener('change', function() {
    if (this.checked) {
      object.completed = true;
    } else {
      object.completed = false;
    };
    updateIndex(arr);
  });
};