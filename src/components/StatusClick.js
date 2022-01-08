import { GetLocalStorage } from './GetLocalStorage.js';

// Status Click Action
/**
 * ✅がクリックされたら完了状態にする
 * 🗑がクリックされたら削除
 * その後localStorageを更新する
 * @param {*} e
 */
export function StatusClick(e) {
  const todos = GetLocalStorage();
  const item = e.target;
  const todoLi = item.closest('.todo-item');
  const index = item.classList[0].slice(4);

  if (item.classList.contains('complete-btn')) {
    todoLi.classList.toggle('completed');
    todos[index].complete = todoLi.classList.contains('completed') ? true : false;
  } else if (item.classList.contains('trash-btn')) {
    todoLi.remove();
    todos.splice(index, 1);
  }
  localStorage.setItem('todos', JSON.stringify(todos));
}
