import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
        <Text style={styles.tip}>${calculation}</Text>
        <Text style={styles.perTipper}>per Tipper</Text>
      </View>
      <View style={styles.calculateButtonContainer}>
        <Button
          style={styles.calculateButton}
          onPress={this.handleCalculation}
          title="Calculate"
          color="white"
        />
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
    flex: 2,
    alignItems: 'center'
  },
  tip: {
    fontSize: 45,
    color: 'white'
  },
  perTipper: {
    fontSize: 20,
    color: 'white'
  },
  calculateButtonContainer: {
    flex: 1,
    backgroundColor: '#5AB181'
  }
});

export default Calculation;
