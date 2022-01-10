export function Modal(todos, index) {
  const wrapper = document.querySelector('#modal');
  const bg = wrapper.querySelector('.modal-bg');
  const closeButton = wrapper.querySelector('.modal-close');
  const form = document.forms['js-editform'];
  const inputText = form.querySelector('textarea');
  const inputLimit = form.querySelector('input[type="date"]');
  const clearButton = form.querySelector('.modal-clear');
  const submitButton = form.querySelector('.modal-submit');

  bg.addEventListener('click', close);
  closeButton.addEventListener('click', close);
  clearButton.addEventListener('click', clear);
  submitButton.addEventListener('click', submit);

  inputText.value = todos[index].todo;
  inputLimit.value = todos[index].limit;
  wrapper.classList.add('is-open');

  function close() {
    wrapper.classList.remove('is-open');
  }

  function clear() {
    inputText.value = '';
  }

  function submit() {
    const newTodo = {
      inputDate: todos[index].inputDate,
      todo: inputText.value,
      limit: inputLimit.value,
      complete: todos[index].complete,
    };
    todos.splice(index, 1, newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
