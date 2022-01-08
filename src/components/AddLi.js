import { GetInputDay } from './GetInputDay.js';
import { GetLocalStorage } from './GetLocalStorage.js';

/**
 * 新規todoをLocalStorageに追加
 * @param {Element} todo
 * @param {Element} limit
 */
export function AddLi(todo, limit) {
  const todos = GetLocalStorage();
  const inputDate = GetInputDay();
  const newTodo = {
    inputDate,
    todo,
    limit,
    complete: false,
  };
  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
}
