import {
  INCREMENT_TIPPERS,
  DECREMENT_TIPPERS
} from '../actions/tippersSelectionActions';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_TIPPERS:
      return {
        ...state,
        numOfTippers: state.numOfTippers + 1
      };
    case DECREMENT_TIPPERS:
      if (state.numOfTippers > 1) {
        return {
          ...state,
          numOfTippers: state.numOfTippers - 1
        };
      }
    default:
      return state;
  }
}
