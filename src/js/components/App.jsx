// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import Hero from './Hero';

class App extends Component {
  render() {
    return (
      <Hero />
    );
  }
}

export default App;