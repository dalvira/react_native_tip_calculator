import React from 'react';
import { connect } from 'react-redux';
import StarRating from '../components/StarRating';
import { StyleSheet, View } from 'react-native';
import { toggleStars } from '../actions/starRatingActions';

class StarRatingContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.starObjArr);
    return (
      <View style={styles.container}>
        <StarRating
          starObjArr={this.props.starObjArr}
          toggleStars={this.props.toggleStars}
          percentage={this.props.percentage}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  starObjArr: state.starRatingReducer.starObjArr,
  percentage: state.starRatingReducer.percentage
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal'
  }
});

export default connect(
  mapStateToProps,
  { toggleStars }
)(StarRating);
