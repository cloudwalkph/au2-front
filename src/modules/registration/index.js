import React, { Component } from 'react';

import RegistrationForm from './form';

class Registration extends Component {
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col"></div>
        <div className="mdl-cell mdl-cell--4-col">
          <RegistrationForm></RegistrationForm>
        </div>
        <div className="mdl-cell mdl-cell--4-col"></div>
      </div>
    );
  }
}

export default Registration;
