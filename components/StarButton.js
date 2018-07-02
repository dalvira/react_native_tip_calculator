import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
class StarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starType: 'star-border',
      starId: 0,
      starObjArr: [
        {
          id: 0,
          starType: 'star-border'
        },
        {
          id: 1,
          starType: 'star-border'
        },
        {
          id: 2,
          starType: 'star-border'
        },
        {
          id: 3,
          starType: 'star-border'
        },
        {
          id: 4,
          starType: 'star-border'
        }
      ]
    };
  }

  toggleStars(starId, starType) {
    let starArr = this.state.starObjArr;
    let selectedStar = starArr[starId];
    for (let i = 0; i <= selectedStar.id; i++) {
      if (starArr[i].starType === 'star-border') {
        starArr[i].starType = 'star';
      } else {
        starArr[i].starType = 'star-border';
      }
    }
    this.setState({ starIdArr: starArr });
  }

  render() {
    starButtonArr = this.state.starObjArr.map(starObj => (
      <Icon.Button
        key={starObj.id}
        style={styles.starButtonContainer}
        name={starObj.starType}
        size={50}
        backgroundColor="rgba(0, 0, 0, 0)"
        underlayColor="rgba(0, 0, 0, 0)"
        onPress={() => this.toggleStars(starObj.id, starObj.starType)}
      />
    ));
    return <View style={styles.container}>{starButtonArr}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  starButtonContainer: {}
});

export default StarButton;
