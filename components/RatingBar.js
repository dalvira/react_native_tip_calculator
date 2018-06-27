import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class RatingBar extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

export default RatingBar;
