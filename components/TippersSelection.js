import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class TippersSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.numOfTippersLabelContainer}>
          <Text style={styles.numOfTippersLabel}>Number of Tippers</Text>
        </View>
        <View style={styles.numOfTippersSelectContainer}>
          <Text>Select Tippers</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal'
  },
  numOfTippersLabelContainer: {
    backgroundColor: 'skyblue'
  },
  numOfTippersLabel: {},
  numOfTippersSelectContainer: {},
  numOfTippersSelect: {}
});

export default TippersSelection;
