import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      const { authenticated } = this.props;

      if (!authenticated) {
        this.context.router.push('/signin');
      }
    }

    // Need this so when you click sign out while on the Resources
    // page, you will be redirected out.
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
