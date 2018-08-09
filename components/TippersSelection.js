import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/EvilIcons';
const TippersSelection = ({
  numOfTippers,
  incrementTippers,
  decrementTippers
}) => {
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
            backgroundColor="#65CB92"
            underlayColor="white"
            onPress={decrementTippers}
          />
        </View>
        <View style={styles.numOfTippersContainer}>
          <Text style={styles.numOfTippers}>{numOfTippers}</Text>
        </View>
        <View style={styles.numOfTippersMoreContainer}>
          <Icon.Button
            name="arrow-right"
            size={40}
            backgroundColor="#65CB92"
            underlayColor="white"
            onPress={incrementTippers}
          />
        </View>
      </View>
    </View>
  );
};

TippersSelection.propTypes = {
  numOfTippers: PropTypes.number.isRequired,
  incrementTippers: PropTypes.func.isRequired,
  decrementTippers: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#65CB92'
  },
  numOfTippersLabelContainer: {
    alignItems: 'center',
    backgroundColor: '#65CB92'
  },
  numOfTippersLabel: {
    fontSize: 20,
    color: 'white'
  },
  numOfTippersSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numOfTippersSelect: {},
  numOfTippersContainer: {},
  numOfTippers: {
    fontSize: 45,
    color: 'white'
  }
});

export default TippersSelection;
