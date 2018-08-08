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
    backgroundColor: 'purple'
  },
  billTotalLabelContainer: {
    backgroundColor: 'pink'
  },
  billTotalLabel: {},
  billTotalInputContainer: {},
  billTotalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default BillTotal;
