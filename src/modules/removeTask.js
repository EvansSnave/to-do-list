import { updateIndex, removeData } from './localStorage';

export const removeTask = (element, arr, obj) => {
  element.remove();
  arr.splice(arr.indexOf(obj), 1);
  removeData(obj.index);
  updateIndex(arr);
};