import React, { Component } from 'react';

import { browserHistory } from 'react-router';

var {
  defaultApp,
  checkLoginState,
  signUpUser,
} = require('../../commons/au2_firebase');

class RegistrationForm extends Component {

  componentWillMount() {
    defaultApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        browserHistory.push('/myCars');
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  facebook_login() {
    checkLoginState('facebook');
  }

  google_login() {
    checkLoginState('google');
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    var email = formData.get('email_address');
    var password = formData.get('password');
    signUpUser(email, password);
  }

  render() {
    return (
      <div className="auth_card mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Registration</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <form id="RegistrationForm" onSubmit={this.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="first_name" name="first_name" />
              <label className="mdl-textfield__label" htmlFor="first_name">First Name</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="last_name" name="last_name" />
              <label className="mdl-textfield__label" htmlFor="last_name">Last Name</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="email" id="email_address" name="email_address" />
              <label className="mdl-textfield__label" htmlFor="email_address">Email Address</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="mobile_number" name="mobile_number" />
              <label className="mdl-textfield__label" htmlFor="mobile_number">Mobile Number</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="password" id="password" name="password" />
              <label className="mdl-textfield__label" htmlFor="password">Password</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="password" id="verify_password" />
              <label className="mdl-textfield__label" htmlFor="verify_password">Re-Type Password</label>
            </div>
          </form>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <div className="mdl-layout-spacer"></div>
          <button
            type="submit"
            className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            form="RegistrationForm"
          >
            Register
          </button>
        </div>
        <div className="mdl-card__menu">
          <a className="mdl-button mdl-js-button mdl-button--icon" onClick={this.facebook_login}>
            <svg style={{width: 24, height: 24}} viewBox="0 0 24 24">
              <path fill="#3b5998" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
            </svg>
          </a>
          <a className="mdl-button mdl-js-button mdl-button--icon" onClick={this.google_login}>
            <svg style={{width: 24, height: 24}} viewBox="0 0 24 24">
              <path fill="#db4437" d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
            </svg>
          </a>
          <div id="status"></div>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
