import React from 'react';
import { connect } from 'react-redux';
import Calculation from '../components/Calculation';
import { StyleSheet, View } from 'react-native';
import { calculateTip } from '../actions/calculationActions';

class CalculationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.percentage);
    console.log(this.props.billTotal);
    console.log(this.props.numOfTippers);
    return (
      <View style={styles.container}>
        <Calculation
          calculateTip={this.props.calculateTip}
          percentage={this.props.percentage}
          billTotal={this.props.billTotal}
          numOfTippers={this.props.numOfTippers}
          calculation={this.props.calculation}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  percentage: state.starRatingReducer.percentage,
  billTotal: state.billTotalReducer.billTotal,
  numOfTippers: state.tippersSelectionReducer.numOfTippers,
  calculation: state.calculationReducer.calculation
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal'
  }
});

export default connect(
  mapStateToProps,
  { calculateTip }
)(Calculation);
