import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import BirdlifeNavigation from 'components/island/BirdlifeNavigation';

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class Puffin extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local";
    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Birdlife / Puffin' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <h4>{ 'Puffin (Lundi)' }</h4>
          <p>{ 'Most common amoung birds on Elliðaey.  More puffins live on Elliðaey than people in Manhattan.  Puffin breed in crevices among rocks or in burrows in the soil.  They feed by diving in the sea.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/3xoO4Y9.jpg" />
        </div>
      </div>
    );
  }
}
