import React, { Component } from 'react';

import { browserHistory } from 'react-router';

var { defaultApp } = require('../au2_firebase');

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
  }

  componentDidMount() {
    defaultApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.setState({
          user: user
        });
        // User is signed in.
      }
    }.bind(this));
  }

  Login(e) {
    e.preventDefault();
    browserHistory.push('/login');
  }

  Registration(e) {
    e.preventDefault();
    browserHistory.push('/registration');
  }

  LogoutUser() {
    defaultApp.auth().signOut().then(function() {
      browserHistory.push('/');
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Au2 Logo</span>
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
            <label className="mdl-button mdl-js-button mdl-button--icon"
                   htmlFor="fixed-header-drawer-exp">
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp" />
            </div>
          </div>
          {
            (this.state.user) ?
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="">{this.state.user.email}</a>
                <a className="mdl-navigation__link" href="" onClick={this.LogoutUser}>Logout</a>
              </nav>
            : <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="" onClick={this.Login}>Login</a>
                <a className="mdl-navigation__link" href="" onClick={this.Registration}>Register</a>
              </nav>
          }
          
        </div>
      </header>
    );
  }
}

export default Header;
