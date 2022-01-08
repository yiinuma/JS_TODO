import { GetLocalStorage } from './GetLocalStorage.js';
import { Render } from './Render.js';

/**
 * 入力順又は期限順で表示更新とlocalStorageを並び替える
 * @param {Event} e 入力順で並び替え又は期限順で並び替え押下時のevent
 */
export function Sort(e) {
  const todos = GetLocalStorage();
  let target;

  e.target.getAttribute('id') === 'sort-date' ? (target = 'inputDate') : (target = 'limit');
  const ascTodos = [...todos].sort((a, b) => new Date(a[target]) - new Date(b[target]));
  localStorage.setItem('todos', JSON.stringify(ascTodos));
  Render();
}
