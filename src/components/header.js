import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-inverse">
        <a className="navbar-brand" href="/">Client-Side Auth with Redux</a>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Sign In</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
