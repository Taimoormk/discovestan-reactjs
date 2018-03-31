// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typed from 'react-typed';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import { appData } from './appData';

class Hero extends Component {
  render() {
    return (
      <section id="hero">
        <div className="hero-background">
          <div className="content-container">
            <h1 className="section-heading">{appData[0].sectionHeading}</h1>
            <Typed
              className="section-line"
              strings={[appData[0].sectionLine1, appData[0].sectionLine2, appData[0].sectionLine3, appData[0].sectionLine4]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            <img className="app-store-links" src={appData[0].appleStoreIcon} alt={appData[0].appleStoreIconAlt} />
            <img className="app-store-links" src={appData[0].googleStoreIcon} alt={appData[0].googleStoreIconAlt} />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;