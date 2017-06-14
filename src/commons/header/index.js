import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Au2 Logo</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Login</a>
            <a className="mdl-navigation__link" href="">Register</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
