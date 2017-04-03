import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import BirdlifeNavigation from 'components/island/BirdlifeNavigation';

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class Razorbill extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local";
    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Birds / Razorbill' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <h4>Razorbill (<em>Alca torda</em>)</h4>
          <p>{ 'Razorbill is a colonial seabird that comes to land only to breed.  This bird chooses one partner for life, females lay one egg per year.  Razorbills nest along coastal cliffs in enclosed or slightly exposed crevices. The parents spend equal amounts of time incubating. Once the chick has hatched, the parents take turns foraging for their young and sometimes fly long distances before finding prey.  I have seen then snatch a fish from his cousin during flight!' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/Wyp8sR5.jpg" />
        </div>
      </div>
    );
  }
}
