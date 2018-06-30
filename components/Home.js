import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import StarRating from './StarRating';
import BillTotal from './BillTotal';
import TippersSelection from './TippersSelection';
import Calculation from './Calculation';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      billTotal: 0.0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Star Tipper</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.starRatingContainer}>
            <StarRating />
          </View>
          <View style={styles.billTotalContainer}>
            <BillTotal />
          </View>
          <View style={styles.numOfTippersContainer}>
            <TippersSelection />
          </View>
          <View style={styles.calculationContainer}>
            <Calculation />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  //Header Component Styles
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  title: {},
  //Body Component Styles
  body: {
    flex: 6,
    backgroundColor: 'blue'
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
  calculationContainer: {
    flex: 0.25
  }
});

export default Home;
