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
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#65CB92'
  },
  billTotalLabel: {
    fontSize: 20,
    color: 'white'
  },
  billTotalInputContainer: {
    backgroundColor: '#5AB181',
    marginLeft: 60,
    marginRight: 60
  },
  billTotalInput: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 45,
    textAlign: 'center'
  }
});

export default BillTotal;
