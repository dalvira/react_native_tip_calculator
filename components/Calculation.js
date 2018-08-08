import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
        <Text style={styles.tip}>{calculation}</Text>
        <Text style={styles.perTipper}>per Tipper</Text>
      </View>
      <View style={styles.calculateButtonContainer}>
        <Button onPress={this.handleCalculation} title="Calculate" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'magenta'
  },
  tipContainer: {
    flex: 2
  },
  tip: {},
  perTipper: {},
  calculateButtonContainer: {
    flex: 1,
    backgroundColor: 'orange'
  }
});

export default Calculation;
