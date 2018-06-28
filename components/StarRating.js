import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StarButton from './StarButton';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.starButtonContainer}>
          <StarButton />
        </View>
        <View style={styles.percetageContainer}>
          <Text style={styles.percentage}>25%</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  starButtonContainer: {
    flex: 2
  },
  percetageContainer: {
    flex: 1
  }
});

export default StarRating;
