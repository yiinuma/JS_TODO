import { CheckLimit } from './CheckLimit.js';
import { GetLocalStorage } from './GetLocalStorage.js';

/**
 * Ul(todo-list)の表示
 */
export function Render() {
  const todoList = document.querySelector('.todo-list');
  const todos = GetLocalStorage();
  let htmlCode = '';
  todos.forEach((list, index) => {
    const todoClass = list.complete ? 'completed' : '';
    const keepTheDeliveryDate = CheckLimit(list.limit);
    htmlCode += `
      <li class="${todoClass} todo-item" data-limit=${keepTheDeliveryDate} >
        <div class="todo-div">
          <p class="todo-todo">${list.todo}</p>
          <div class="todo-task">
            <p class="todo-date">期限: ${list.limit}
              ${keepTheDeliveryDate ? '' : `<span class="limit-over">期限が過ぎています！！</span>`}
            </p>
            <div>
              <button class="list${index} edit-btn">
                <i class="pointer-events-none fas fa-edit"></i>
              </button>
              <button class="list${index} complete-btn">
                <i class="pointer-events-none fas fa-check"></i>
              </button>
              <button class="list${index} trash-btn">
                <i class="pointer-events-none fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </li>
    `;
  });
  todoList.innerHTML = htmlCode;
}
