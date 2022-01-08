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
    htmlCode += `
      <li class="${todoClass} todo-item">
        <div class="todo-div">
          <p class="todo-todo">${list.todo}</p>
          <div class="todo-task">
            <p class="todo-date">${list.limit}</p>
            <div>
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
