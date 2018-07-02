import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
class TippersSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowType: '',
      numOfTippers: 1
    };
  }

  toggleTippers = arrowType => {
    let num = this.state.numOfTippers;
    if (arrowType === 'arrow-left' && num > 1) {
      this.setState({ numOfTippers: num - 1 });
    }
    if (arrowType === 'arrow-right') {
      this.setState({ numOfTippers: num + 1 });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.numOfTippersLabelContainer}>
          <Text style={styles.numOfTippersLabel}>Number of Tippers</Text>
        </View>
        <View style={styles.numOfTippersSelectContainer}>
          <View style={styles.numOfTippersLessContainer}>
            <Icon.Button
              name="arrow-left"
              size={40}
              backgroundColor="red"
              underlayColor="blue"
              onPress={() => this.toggleTippers('arrow-left')}
            />
          </View>
          <View style={styles.numOfTippersContainer}>
            <Text>{this.state.numOfTippers}</Text>
          </View>
          <View style={styles.numOfTippersMoreContainer}>
            <Icon.Button
              name="arrow-right"
              size={40}
              backgroundColor="red"
              underlayColor="blue"
              onPress={() => this.toggleTippers('arrow-right')}
            />
          </View>
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
  numOfTippersSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numOfTippersSelect: {},
  numOfTippersContainer: {}
});

export default TippersSelection;
