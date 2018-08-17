import { CALCULATE_TIP } from '../actions/calculationActions';
import { Alert } from 'react-native';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case CALCULATE_TIP:
      if (isNaN(action.payload.billTotal) == false) {
        let totalTip =
          action.payload.billTotal * (action.payload.percentage / 100);
        let calculation =
          Math.round((totalTip / action.payload.numOfTippers) * 100) / 100;
        return {
          ...state,
          calculation: calculation
        };
      } else {
        Alert.alert(
          'Sheesh!',
          'Must be expensive. Try again.',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
      }
    default:
      return state;
  }
}
