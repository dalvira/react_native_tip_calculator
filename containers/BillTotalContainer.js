import React from 'react';
import { connect } from 'react-redux';
import BillTotal from '../components/BillTotal';
import { StyleSheet, View } from 'react-native';
import { onBillChange } from '../actions/billTotalActions';

class BillTotalContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <BillTotal
          onTextChange={this.props.onBillChange}
          billTotal={this.props.billTotal}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  billTotal: state.billTotalReducer.billTotal
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal'
  }
});

export default connect(
  mapStateToProps,
  { onBillChange }
)(BillTotal);
