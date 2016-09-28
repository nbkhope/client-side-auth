import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    this.props.signinUser({ email, password });
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} className="form-control" />
        </fieldset>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SigninForm',
  fields: ['email', 'password']
}, null, actions)(Signin);
// 2nd arg: mapStateToProps, 3rd arg: mapDispatchToProps
// note: will change in redux-form v6
