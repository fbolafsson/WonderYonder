import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import BirdlifeNavigation from 'components/island/BirdlifeNavigation'

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class Gannet extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local";
    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Birds / Gannet' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>

          <p>{ 'The northern gannet is the largest seabird in the North Atlantic. Gannets often travel in small groups hunt fish by diving from great heights into the sea and pursuing their prey underwater. This enables them to catch fish at much greater depths than most birds. Gannets are colonial breeders on islands and coasts, normally laying one egg, using their webbed feet to keep it warm. They have a maximum lifespan of 35 years.' }</p>
          
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/JxajOpk.jpg" />
        </div>
      </div>
    );
  }
}
