import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const BillTotal = ({ onBillChange }) => {
  handleBill = text => {
    onBillChange(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.billTotalLabelContainer}>
        <Text style={styles.billTotalLabel}>Bill Total</Text>
      </View>
      <View style={styles.billTotalInputContainer}>
        <TextInput
          style={styles.billTotalInput}
          placeholder={'$0.00'}
          keyboardType="numeric"
          onChangeText={this.handleBill}
        />
      </View>
    </View>
  );
};

BillTotal.propTypes = {
  onBillChange: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#65CB92'
  },
  billTotalLabelContainer: {
    alignItems: 'center',
    backgroundColor: '#65CB92'
  },
  billTotalLabel: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Bodoni 72'
  },
  billTotalInputContainer: {
    backgroundColor: '#5AB181'
  },
  billTotalInput: {
    height: 90,
    borderColor: '#5AB181',
    borderWidth: 1,
    fontSize: 50,
    textAlign: 'center',
    color: 'white'
  }
});

export default BillTotal;
