import React, { Component } from 'react';

import Header from '../commons/header';

class Au2 extends Component {

  render() {
    
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
          {this.props.children}
        </main>
      </div>
    );
  }
}

Au2.defaultProps = {
  page: ''
}

export default Au2;
