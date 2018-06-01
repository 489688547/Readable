import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSortOrder } from '../actions/posts';
import Button from '@material-ui/core/Button';

class Sort extends Component {

  handleSortByTime() {
    this.props.SetSortOrder('timestamp')
  }

  handleSortByScore() {
    this.props.SetSortOrder('voteScore')
  }

  render() {
    return (
      <div>
        Sort by:
        <Button variant="raised" color="primary" size="small" onClick={this.handleSortByTime}>
          Date
        </Button>
        <Button variant="raised" color="primary" size="small" onClick={this.handleSortByScore}>
          Score
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SetSortOrder: setOrder => dispatch(setSortOrder(setOrder))
  }
}

export default connect(null, mapDispatchToProps)(Sort)
