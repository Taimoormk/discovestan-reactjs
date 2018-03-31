// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import { appData } from './appData';

class Hero extends Component {
  render() {
    return(
      <section id="hero">
        <div className="hero-background">
          <div className="content-container">
            <h1 className="sectionH1">{appData[0].sectionH1}</h1>
            <h2 className="sectionH2">{appData[0].sectionH2}</h2>
            <h3 className="sectionH3">{appData[0].sectionH3}</h3>
            <h4 className="sectionH4">{appData[0].sectionH4}</h4>
            <img className="app-store-links" src={appData[0].appleStoreIcon} alt={appData[0].appleStoreIconAlt} />
            <img className="app-store-links" src={appData[0].googleStoreIcon} alt={appData[0].googleStoreIconAlt} />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;