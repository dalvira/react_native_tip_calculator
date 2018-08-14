import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Calculation = ({
  calculateTip,
  percentage,
  billTotal,
  numOfTippers,
  calculation
}) => {
  handleCalculation = () => {
    calculateTip(percentage, billTotal, numOfTippers);
  };
  return (
    <View style={styles.container}>
      <View style={styles.tipContainer}>
        <View style={styles.calculationContainer}>
          <Text style={styles.tip}>${calculation}</Text>
        </View>
        <View style={styles.perTipperContainer}>
          <Text style={styles.perTipper}> per</Text>
        </View>
      </View>
      <View style={styles.calculateButtonContainer}>
        <TouchableOpacity
          style={styles.calculateButton}
          onPress={this.handleCalculation}
        >
          <Text style={styles.calculateButtonLabel}>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Calculation.proptypes = {
  calculateTip: PropTypes.func.isRequired,
  percentage: PropTypes.number.isRequired,
  billTotal: PropTypes.number.isRequired,
  numOfTippers: PropTypes.number.isRequired,
  calculation: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#65CB92'
  },
  tipContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  tip: {
    fontSize: 50,
    color: 'white',
    fontFamily: 'Bodoni 72'
  },
  perTipper: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'Bodoni 72'
  },
  calculateButtonContainer: {
    flex: 1,
    backgroundColor: '#5AB181',
    justifyContent: 'center'
  },
  calculateButton: {
    alignItems: 'center'
  },
  calculateButtonLabel: {
    fontSize: 37,
    color: 'white',
    fontFamily: 'Bodoni 72'
  }
});

export default Calculation;
