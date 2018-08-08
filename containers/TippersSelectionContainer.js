import React from 'react';
import { connect } from 'react-redux';
import TippersSelection from '../components/TippersSelection';
import { StyleSheet, View } from 'react-native';
import {
  incrementTippers,
  decrementTippers
} from '../actions/tippersSelectionActions';

class TippersSelectionContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TippersSelection
          numOfTippers={this.props.numOfTippers}
          incrementTippers={this.props.incrementTippers}
          decrementTippers={this.props.decrementTippers}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  numOfTippers: state.tippersSelectionReducer.numOfTippers
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal'
  }
});

export default connect(
  mapStateToProps,
  { incrementTippers, decrementTippers }
)(TippersSelection);
