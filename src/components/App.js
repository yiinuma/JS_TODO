'use-strict';
import { Render } from './Render.js';
import { SubmitToggle } from './SubmitToggle.js';
import { Sort } from './Sort.js';
import { StatusClick } from './StatusClick.js';
import { AddLi } from './AddLi.js';
import { Modal } from './Modal.js';

export class App {
  constructor() {
    Render();
  }
  todoApp() {
    // Selectors
    const todo = document.querySelector('#todo');
    const limit = document.querySelector('input[type="date"]');
    const submit = document.querySelector('#submit');
    const todoList = document.querySelector('.todo-list');
    const sortDateButton = document.querySelector('#sort-date');
    const sortLimitButton = document.querySelector('#sort-limit');
    const editButton = document.querySelector('.edit-btn');

    // Event Listeners
    todo.addEventListener('keyup', disableCheck);
    limit.addEventListener('change', disableCheck);
    submit.addEventListener('click', addTodo);
    todoList.addEventListener('click', StatusClick);
    sortDateButton.addEventListener('click', Sort);
    sortLimitButton.addEventListener('click', Sort);
    editButton.addEventListener('click', Modal);

    // Check Input & Limit
    function disableCheck() {
      todo.value != '' && limit.value != '' && SubmitToggle(submit);
    }

    function addTodo(e) {
      e.preventDefault();
      AddLi(todo['value'], limit['value']);
      Render();
      // Clear Todo&Limit
      todo.value = '';
      limit.value = '';
      // Disable SubmitButton
      SubmitToggle(submit);
    }
  }
}
