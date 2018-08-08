export const TOGGLE_STARS = 'TOGGLE_STARS';

export function toggleStars(starId, percentage) {
  return {
    type: TOGGLE_STARS,
    payload: { starId: starId, percentage: percentage }
  };
}
