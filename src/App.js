import React, { Component } from 'react';

import { Router, browserHistory } from 'react-router';

import 'material-design-lite/material.min.js';
import './material.min.css';
import './icon.css';
import './App.css';

import routes from './routes';

class App extends Component {
  

  render() {
    return (
      <Router history={browserHistory} routes={routes}/>
    );
  }
}

export default App;
