import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
const StarRating = ({ starObjArr, toggleStars, percentage }) => {
  starButtonArr = starObjArr.map(starObj => (
    <Icon.Button
      key={starObj.id}
      style={styles.starButtonContainer}
      name={starObj.starType}
      size={50}
      backgroundColor="rgba(0, 0, 0, 0)"
      underlayColor="rgba(0, 0, 0, 0)"
      onPress={() => toggleStars(starObj.id, starObj.percentage)}
    />
  ));

  return (
    <View style={styles.container}>
      <View style={styles.starButtonsContainer}>{starButtonArr}</View>
      <View style={styles.percentageContainer}>
        <Text style={styles.percentage}>{percentage}%</Text>
      </View>
    </View>
  );
};

StarRating.propTypes = {
  starObjArr: PropTypes.array.isRequired,
  toggleStars: PropTypes.func.isRequired,
  percentage: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#65CB92'
  },
  starButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    paddingLeft: 10
  },
  percentageContainer: {
    flex: 1,
    backgroundColor: '#65CB92',
    alignItems: 'center'
  },
  percentage: {
    fontSize: 50,
    color: 'white',
    fontFamily: 'TempoFont'
  }
});

export default StarRating;
