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
          <p> { 'Rissa or kittiwake is of the gull family. They nest on extremely steep cliffs in large colonies. They breed along northern coasts and winter out at sea. Kittiwakes are the only gull-like bird in the world to make cliff dwellings. They produce one to two eggs a year, and the chicks stay in the nest until they can fly.' } </p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/RJOXOTH.jpg" />
        </div>
      </div>
    );
  }
}
