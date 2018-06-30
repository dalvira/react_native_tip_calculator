import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class BillTotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      billTotal: 0.0
    };
  }

  render() {
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
            onChangeText={billTotal => this.setState({ billTotal })}
          />
        </View>
      </View>
    );
  }
}

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
