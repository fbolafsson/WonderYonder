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

        <header className={ defaultStyles.pageTitle }>{ 'The Island' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>

          <h4>{ 'Gannet (Súla)' }</h4>
          <p>{ 'Gannet is the largest seabirds in the North Atlandic, she has a maximum lifespan of 35 years.  Gannets hunt fish by diving from the height into the sea and pursuing their prey underwater.  They can dive from 30meters (98ft), achieving speeds of 100 kilometers pr hour (62 mph) as they strike the water, enabling them to catsh fish much deeper than most airborn birds.  It takes 5 years to GANNET to reach maturity.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/JxajOpk.jpg" />
        </div>
      </div>
    );
  }
}
