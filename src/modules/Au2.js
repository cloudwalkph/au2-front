import React, { Component } from 'react';

import Header from '../commons/header';
import Homepage from './homepage';
import Registration from './registration';
import LoginForm from './login';

class Au2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page
    };
  }

  render() {
    let page = <Homepage></Homepage>;
    if(this.state.page === 'login') {
      page = <LoginForm></LoginForm>;
    }
    if(this.state.page === 'registration') {
      page = <Registration></Registration>;
    }
    return (
      <div className="demo-layout-transparent mdl-layout mdl-js-layout">
        <Header></Header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          {page}
        </main>
      </div>
    );
  }
}

Au2.defaultProps = {
  page: ''
}

export default Au2;
