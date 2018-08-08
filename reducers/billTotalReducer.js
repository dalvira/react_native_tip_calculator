import { ON_BILL_CHANGE } from '../actions/billTotalActions';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_BILL_CHANGE:
      return {
        ...state,
        billTotal: action.payload.text
      };
    default:
      return state;
  }
}
