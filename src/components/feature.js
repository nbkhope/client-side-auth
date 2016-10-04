import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        Feature Page

        <p>The hidden message is:</p>

        <p>{this.props.message}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.messages.message };
}

export default connect(mapStateToProps, actions)(Feature);
