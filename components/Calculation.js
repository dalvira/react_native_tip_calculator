import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class Calculation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  calculateTip() {
    console.log('Pressed');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tipContainer}>
          <Text style={styles.tip}>$4.57</Text>
          <Text style={styles.perTipper}>per Tipper</Text>
        </View>
        <View style={styles.calculateButtonContainer}>
          <Button onPress={() => this.calculateTip()} title="Calculate" />
        </View>
      </View>
    );
  }
}

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
