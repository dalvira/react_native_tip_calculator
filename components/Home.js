import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StarRating from './StarRating';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Star Tipper</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.starRatingContainer}>
            <StarRating />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  //Header Component Styles
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  title: {},
  //Body Component Styles
  body: {
    flex: 6,
    backgroundColor: 'blue'
  },
  starRatingContainer: {
    flex: 0.25
  }
});

export default Home;
