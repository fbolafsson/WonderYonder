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

          <p> { 'The great skua is an aggressive pirate of the seas, deliberately harassing birds as large as gannets to steal a free meal. It also kills and eats smaller birds such as puffins. Great skuas show little fear of humans. During breeding seasons, they fiercely defend their nest from any and all intruders, including humans. Although the great skua cannot inflict serious damage, this can make for a less than pleasant experience. We can still relax in Elliðaey, since their nesting area is not on the island but on the coast of Iceland.' }</p>
          
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/bR8SCEm.jpg" />
        </div>
      </div>
    );
  }
}
