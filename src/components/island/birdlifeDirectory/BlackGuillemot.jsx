import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import BirdlifeNavigation from 'components/island/BirdlifeNavigation';

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class BlackGuillemot extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local";
    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Birds / Black Guillemot' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <p>{ 'Black guillemots are divers, diving in relatively shallow waters, using their wings to swim. They can stay underwater for up to two and a half minutes. They create their nests on rocky coastlines and the parents take turns incubating the eggs, each staying in the nest for about a month, while the other forages. Once the young are hatched, both parents share the responsibility of taking care of the chick, going off to feed and returning with fish for the hatchling. The chicks will leave the nest about one to two months after hatching, heading down to the water where they will take care of themselves until they learn to fly.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/Y3xfBop.jpg" />
        </div>
      </div>
    );
  }
}
