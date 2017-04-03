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

        <header className={ defaultStyles.pageTitle }>{ 'Birds / Great Skua' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <h4>Great Skua (<em>Stercorarius skua</em>)</h4>
          <p>{ 'The great skua is an aggressive pirate of the seas, deliberately harrassing birds as large as gannets to steal a free meal. It grabs the wing tips of birds, for example Gannets, and tips them into the sea. It also readily kills and eats smaller birds such as puffins. Great skuas show little fear of humans - they fiercely defend the nest in the breeding season with relentless dives at intruders, including humans, sometimes making contact, anybody getting close to the nest will be repeatedly dive-bombed by the angry adult.  Although it cannot inflict serious damage, such an experience with a bird of this size is frightening. We can still relax in Elliðaey since their nesting site is luckily not on the island but In Iceland.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/bR8SCEm.jpg" />
        </div>
      </div>
    );
  }
}
