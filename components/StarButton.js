import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class StarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starType: 'star-border'
    };
  }

  toggleStar(starType) {
    if (starType === 'star-border') {
      this.setState({ starType: 'star' });
    } else {
      this.setState({ starType: 'star-border' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon.Button
          style={styles.iconButtonContainer}
          name={this.state.starType}
          size={50}
          backgroundColor="rgba(0, 0, 0, 0)"
          underlayColor="rgba(0, 0, 0, 0)"
          onPress={() => this.toggleStar(this.state.starType)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'orange'
  },
  iconButtonContainer: {}
});

export default StarButton;
