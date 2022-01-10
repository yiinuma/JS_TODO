/**
 * submitのdisableをtoggle
 * @param {Element} submit 登録ボタンの要素
 */

export function SubmitToggle(submit) {
  if (submit.disabled === true) {
    submit.classList.add('submit-enable');
    submit.disabled = false;
  } else {
    submit.classList.remove('submit-enable');
    submit.disabled = true;
  }
}
