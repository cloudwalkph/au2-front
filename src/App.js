import React, { Component } from 'react';

import 'material-design-lite/material.min.js';
import './material.min.css';
import './icon.css';
import './App.css';

import Au2 from './modules/Au2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'homepage'
    };
  }

  render() {
    return (
      <Au2></Au2>
    );
  }
}

export default App;
