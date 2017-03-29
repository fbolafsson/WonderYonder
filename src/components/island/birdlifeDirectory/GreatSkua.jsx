import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import BirdlifeNavigation from 'components/island/BirdlifeNavigation'

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class GreatSkua extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local";
    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Birdlife / Gannet' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <h4>{ 'Great Skua (Skúmur)' }</h4>
          <p>{ 'The Great skua is a vicous predator.  Mainly he eats fish, but he just eats what ever he can get.  One way of feeding is by chasing Gannets until they drop there food. Great skua also regularly kills and eat adut birds.  Such as puffins and gulls.  They defend there nest as few others can, they fly at the head of a human or other intruders approaching its nest.   Although it cannot inflict serious damage, such an experience with a bird of this size is frightening.  They dont get attimitated.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/bR8SCEm.jpg" />
        </div>
      </div>
    );
  }
}
