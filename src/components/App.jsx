/* eslint-disable react/prefer-stateless-function */
// Imports from node_modules
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ImmutableLoadingBar as LoadingBar } from 'react-redux-loading-bar'

// Imports from user defined modules/files
import Header from './common/Header';
import Footer from './common/Footer';

// Import styles
import styles from 'global.css';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <LoadingBar className={ styles.loadingBar } />
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
