import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    const { authenticated } = this.props;

    if (authenticated) {
      return (
        <div>
          <li className="nav-item">
            <Link to="/feature" className="nav-link">Feature</Link>
          </li>
          <li className="nav-item">
            <Link to="/signout" className="nav-link">Sign Out</Link>
          </li>
        </div>
      );
    }
    else {
      return [
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
      ];
    }

  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-inverse">
        <Link to="/" className="navbar-brand">Client-Side Auth with Redux</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
