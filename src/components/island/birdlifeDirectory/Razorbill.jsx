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
          <p> { 'Razorbill is a colonial seabird that comes to land only to breed. This bird chooses one partner for life and a couple produces one egg per year. The egg is laid in a crevice or hole, or a nest of pebbles. The young leave the breeding colony while still unfledged, around 18 days after hatching, and are looked after by the parents for some time after that. Razorbills nest along coastal cliffs in enclosed or slightly exposed crevices. The parents spend equal amounts of time incubating their egg.' } </p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/Wyp8sR5.jpg" />
        </div>
      </div>
    );
  }
}
