import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starType: 'star-border',
      starId: 0,
      starObjArr: [
        {
          id: 0,
          starType: 'star-border',
          percentage: 12
        },
        {
          id: 1,
          starType: 'star-border',
          percentage: 15
        },
        {
          id: 2,
          starType: 'star-border',
          percentage: 20
        },
        {
          id: 3,
          starType: 'star-border',
          percentage: 22
        },
        {
          id: 4,
          starType: 'star-border',
          percentage: 25
        }
      ],
      percentage: 0
    };
  }

  toggleStars(starId, starType, percentage) {
    let starArr = this.state.starObjArr;
    let selectedStar = starArr[starId];
    let lastStar = starArr[starArr.length - 1];
    for (let i = 0; i <= selectedStar.id; i++) {
      if (starArr[i].starType === 'star-border') {
        starArr[i].starType = 'star';
      }
    }
    if (selectedStar != lastStar) {
      for (let i = starArr.indexOf(selectedStar) + 1; i < starArr.length; i++) {
        if (starArr[i].starType === 'star') {
          starArr[i].starType = 'star-border';
        }
      }
    }
    this.setState({ starIdArr: starArr });
    this.setState({ percentage: percentage });
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
        onPress={() =>
          this.toggleStars(starObj.id, starObj.starType, starObj.percentage)
        }
      />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.starButtonsContainer}>{starButtonArr}</View>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentage}>{this.state.percentage}%</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
  starButtonsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  percentageContainer: {
    flex: 1,
    backgroundColor: 'green'
  },
  percentage: {}
});

export default StarRating;
