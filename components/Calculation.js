import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Calculation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.calculation}>$4.57</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'magenta'
  },
  calculation: {}
});

export default Calculation;
