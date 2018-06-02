import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSortOrder } from '../actions/posts';
import Button from '@material-ui/core/Button';

const  Sort = (props) => {

  const handleSortByTime = () => props.SetSortOrder('timestamp')
  const handleSortByScore =() => props.SetSortOrder('voteScore')

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


const mapDispatchToProps = dispatch => {
  return {
    SetSortOrder: setOrder => dispatch(setSortOrder(setOrder))
  }
}

export default connect(null, mapDispatchToProps)(Sort)
