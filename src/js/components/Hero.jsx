// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typed from 'react-typed';
import anime from 'animejs';
import SVG from 'react-inlinesvg';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import { appData } from './appData';

var lineDrawing = anime({
  targets: '#app #hero .hero-background .content-container .discovestan-logo .isvg .discovestan-logo-lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

class Hero extends Component {
  render() {
    console.log('lineDrawing', lineDrawing);
    return (
      <section id="hero">
        <div className="hero-background">
          <div className="content-container">
          <div className="discovestan-logo">
            <SVG 
              src="./images/discovestan-logo.svg"
            />
          </div>
            {/* <h1 className="section-heading">{appData[0].sectionHeading}</h1> */}
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

Hero.propTypes = {
  //getAction: PropTypes.func.isRequired,
};

export default Hero;