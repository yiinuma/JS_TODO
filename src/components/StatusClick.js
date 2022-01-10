import { GetLocalStorage } from './GetLocalStorage.js';
import { Modal } from './Modal.js';

// Status Click Action
/**
 * EditがクリックされたらModalをopen
 * ✅がクリックされたら完了状態にする
 * 🗑がクリックされたら削除
 * その後localStorageを更新する
 * @param {*} e
 */
export function StatusClick(e) {
  let todos = GetLocalStorage();
  const item = e.target;
  const todoLi = item.closest('.todo-item');
  const index = item.classList[0].slice(4);

  if (item.classList.contains('complete-btn')) {
    todoLi.classList.toggle('completed');
    todos[index].complete = todoLi.classList.contains('completed') ? true : false;
  } else if (item.classList.contains('trash-btn')) {
    todoLi.remove();
    todos.splice(index, 1);
  } else if (item.classList.contains('edit-btn')) {
    Modal(todos, index);
  }
  localStorage.setItem('todos', JSON.stringify(todos));
}
