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
            size={75}
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
            size={75}
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
    fontSize: 35,
    color: 'white',
    fontFamily: 'Bodoni 72'
  },
  numOfTippersSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numOfTippersLessContainer: {
    marginRight: 5
  },
  numOfTippersMoreContainer: {
    marginLeft: 5,
    paddingLeft: 5
  },
  numOfTippersContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  numOfTippers: {
    fontSize: 50,
    color: 'white',
    fontFamily: 'Bodoni 72'
  }
});

export default TippersSelection;
