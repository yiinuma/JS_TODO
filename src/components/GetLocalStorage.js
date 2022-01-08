/**
 * LocalStorageのobjectを取得する
 * @returns {Array} 配列内に各todoをobject形で返却
 */

export function GetLocalStorage() {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  return todos;
}
