import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import StarRatingContainer from '../containers/StarRatingContainer';
import BillTotalContainer from '../containers/BillTotalContainer';
import TippersSelectionContainer from '../containers/TippersSelectionContainer';
import CalculationContainer from '../containers/CalculationContainer';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Star Tipper</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.starRatingContainer}>
              <StarRatingContainer />
            </View>
            <View style={styles.billTotalContainer}>
              <BillTotalContainer />
            </View>
            <View style={styles.numOfTippersContainer}>
              <TippersSelectionContainer />
            </View>
            <View style={styles.calculationContainer}>
              <CalculationContainer />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#65CB92'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5AB181'
  },
  title: {
    fontSize: 45,
    color: 'white',
    fontFamily: 'Bodoni 72'
  },
  body: {
    flex: 6,
    backgroundColor: 'white'
  },
  starRatingContainer: {
    flex: 0.25
  },
  billTotalContainer: {
    flex: 0.25
  },
  numOfTippersContainer: {
    flex: 0.25
  },
  footer: {},
  calculationContainer: {
    flex: 0.25
  }
});

export default Home;
