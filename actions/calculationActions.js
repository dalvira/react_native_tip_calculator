export const CALCULATE_TIP = 'CALCULATE_TIP';

export function calculateTip(percentage, billTotal, numOfTippers) {
  return {
    type: CALCULATE_TIP,
    payload: {
      percentage: percentage,
      billTotal: billTotal,
      numOfTippers: numOfTippers
    }
  };
}
