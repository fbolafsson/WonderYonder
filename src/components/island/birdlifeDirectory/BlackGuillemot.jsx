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
          <p>Black Guillemots (<em>Cepphus grylle</em>) are divers, diving in relatively shallow waters, using its wings to swim. They can stay under for about 2 and a half minutes. Their diet consists of fish, crustaceans and marine invertebrates.</p>
          <p>{ 'They create their nests on rocky coastlines. The nests, which can be made up of pebbles, shells, seaweed, or nothing at all are usually placed amongst rocks.' }</p>
          <p>{ "Up to 2 eggs are laid. Both parents take turns incubating the eggs for about a month while the other forages. Once hatched, both parents will alternate taking care of the chick with going off to feed, returning with fish for the hatchling." }</p>
          <p>{ "The chicks will leave the nest from 1 to 2 months after hatching, heading down to the water where they will take care of themselves until they learn to fly." }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/Y3xfBop.jpg" />
        </div>
      </div>
    );
  }
}
