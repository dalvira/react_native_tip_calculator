//Root Reducer that combines all reducers into one
import { combineReducers } from 'redux';
import starRatingReducer from './starRatingReducer';
import billTotalReducer from './billTotalReducer';
import tippersSelectionReducer from './tippersSelectionReducer';
import calculationReducer from './calculationReducer';

export default combineReducers({
  starRatingReducer: starRatingReducer,
  billTotalReducer: billTotalReducer,
  tippersSelectionReducer: tippersSelectionReducer,
  calculationReducer: calculationReducer
});
