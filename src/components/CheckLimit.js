export function CheckLimit(limit) {
  const now = new Date();
  const formatNow = `${now.getFullYear()}-${('0' + (now.getMonth() + 1)).slice(-2)}-${now.getDate()}`;

  const keepTheDeliveryDate = new Date(limit) - new Date(formatNow) >= 0 ? true : false;
  return keepTheDeliveryDate;
}
