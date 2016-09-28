import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" type="email" {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" type="password" {...password} />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input className="form-control" type="password" {...passwordConfirm} />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        <button type="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  const { email, password, passwordConfirm } = formProps;

  for (let key in formProps) {
    if (!formProps[key]) {
      errors[key] = `${key} cannot be blank`;

      // Special cases
      if (key === 'passwordConfirm') {
        errors[key] = 'please repeat your password';
      }
    }
  }

  if (password !== passwordConfirm) {
    errors.password = "Passwords don't match";
  }

  return errors;
}

export default reduxForm({
  form: "SignupForm",
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(Signup);
