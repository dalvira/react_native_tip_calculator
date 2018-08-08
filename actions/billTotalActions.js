export const ON_BILL_CHANGE = 'ON_TEXT_CHANGE';

export function onBillChange(text) {
  return {
    type: ON_BILL_CHANGE,
    payload: { text: text }
  };
}
