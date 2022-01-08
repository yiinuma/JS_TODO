/**
 * 登録した日時を取得
 * @returns {string} 西暦-月-日-時:分:秒の形
 */
export function GetInputDay() {
  let now = new Date();
  let getInputDay = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  return getInputDay;
}
