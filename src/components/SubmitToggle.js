/**
 * submitのdisableをtoggle
 * @param {Element} submit 登録ボタンの要素
 */

export function SubmitToggle(submit) {
  submit.disabled === true
    ? (submit.classList.add('bg-orange-400', 'hover:bg-orange-500'), submit.classList.remove('bg-slate-300'), (submit.disabled = false))
    : (submit.classList.remove('bg-orange-400', 'hover:bg-orange-500'), submit.classList.add('bg-slate-300'), (submit.disabled = true));
}
