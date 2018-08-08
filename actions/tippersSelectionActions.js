export const INCREMENT_TIPPERS = 'INCREMENT_TIPPERS';
export const DECREMENT_TIPPERS = 'DECREMENT_TIPPERS';

export function incrementTippers() {
  return { type: INCREMENT_TIPPERS };
}

export function decrementTippers() {
  return { type: DECREMENT_TIPPERS };
}
