import { CALCULATE_TIP } from '../actions/calculationActions';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case CALCULATE_TIP:
      let totalTip =
        action.payload.billTotal * (action.payload.percentage / 100);
      let calculation = totalTip / action.payload.numOfTippers;
      return {
        ...state,
        calculation: calculation
      };
    default:
      return state;
  }
}
