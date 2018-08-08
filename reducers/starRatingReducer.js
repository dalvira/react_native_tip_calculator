import { TOGGLE_STARS } from '../actions/starRatingActions';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_STARS:
      let starArr = state.starObjArr;
      let selectedStar = starArr[action.payload.starId];
      let lastStar = starArr[starArr.length - 1];
      for (let i = 0; i <= selectedStar.id; i++) {
        if (starArr[i].starType === 'star-border') {
          starArr[i].starType = 'star';
        }
      }
      if (selectedStar != lastStar) {
        for (
          let i = starArr.indexOf(selectedStar) + 1;
          i < starArr.length;
          i++
        ) {
          if (starArr[i].starType === 'star') {
            starArr[i].starType = 'star-border';
          }
        }
      }
      return {
        ...state,
        starObjArr: starArr,
        percentage: action.payload.percentage
      };
    default:
      return state;
  }
}
