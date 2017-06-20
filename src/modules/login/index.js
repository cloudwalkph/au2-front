import React, { Component } from 'react';
import LoginForm from './form';

class Login extends Component {
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col"></div>
        <div className="mdl-cell mdl-cell--4-col">
          <LoginForm></LoginForm>
        </div>
        <div className="mdl-cell mdl-cell--4-col"></div>
      </div>
    );
  }
}

export default Login;
