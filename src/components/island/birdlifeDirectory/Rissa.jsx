import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import BirdlifeNavigation from 'components/island/BirdlifeNavigation'

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class Rissa extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local";
    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Birds / Rissa' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <h4>Rissa (<em>Rissa tridactyla</em>)</h4>
          <p>{ 'Rissa is a causine of gull family.  They nest on extremely steep cliffs.  Rissa nests/hatch 2-3 eggs, and the chicks sit still in the nest until they can fly.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/RJOXOTH.jpg" />
        </div>
      </div>
    );
  }
}
